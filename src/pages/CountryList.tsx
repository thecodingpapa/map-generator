import React from 'react';
import { useHookstate } from '@hookstate/core';
import CountryInput from './CountryInput';
import Country, { convertCountryListToCodeArray } from '../data/Country';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { WorldMap } from '../CountryMap';
import lookup, {Country as CountryCode} from 'country-code-lookup';



function CountryList() {
  const countriesState = useHookstate<Country[]>([]);
  const countries = countriesState.get();


  const handleSelectCountry = (selectedCountry: CountryCode) => {
    const isCountryExists = countries.some(country => country.code === selectedCountry.iso2);
    if (!isCountryExists) {
        //create new Country object
        const newCountry = new Country(selectedCountry.country, selectedCountry.iso2);
      countriesState.merge([newCountry]);
    }
  };



  const handleDelete = (index: number) => {
    const updatedCountries = [...countries];
    //remove index from array
    updatedCountries.splice(index, 1);
    countriesState.set(updatedCountries);
  };
  
  const chipStyle = {
    color: 'white',
    border: '1px solid white',
    backgroundColor: '#333333',
    margin: '5px',
  };
  
  const deleteIcon = <CloseIcon style={{ color: 'white' }} />;


  return (
    <div>

        <Box sx={{width:"50vw"}}>
            <WorldMap countryIds={convertCountryListToCodeArray([...countries])} />
        </Box>
      <CountryInput onSelectCountry={handleSelectCountry} />

      <br></br>
      <br></br>

    <Box display="flex" flexWrap="wrap" width={"50vw"}>
      {countries.map((country, index) => (
        <Chip
        key={index}
        label={<Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
        <img
          loading="lazy"
          width="20"
          src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
          alt=""
        />
        {country.name}
      </Box>}
        onDelete={() => handleDelete(index)}
        style={chipStyle}
        deleteIcon={deleteIcon}
      />
      ))}
      </Box>
    </div>
  );
}

export default CountryList;
