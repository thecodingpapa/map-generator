import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { CountryCode } from '../data/Country';
import lookup, {Country as CountryCode} from 'country-code-lookup';
import Box from '@mui/material/Box';

interface Props {
  onSelectCountry: (country: CountryCode) => void;
}

function CountryInput(props: Props) {


  const handleSelectCountry = (event: any, value: CountryCode | null) => {
    if (value) {
      props.onSelectCountry(value);
    }
  };

  return (
    <Autocomplete
      options={lookup.countries}
      sx={{ width: '50vw', color: 'white' }}
      getOptionLabel={(option) => `${option.country} (${option.iso2})`}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.iso2.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.iso2.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.country} ({option.iso2})
        </Box>
      )}
      onChange={handleSelectCountry}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          InputLabelProps={{ 
            style: { color: 'white' }, }}
          inputProps={{
            ...params.inputProps,
            style: { color: 'white' },
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export default CountryInput;
