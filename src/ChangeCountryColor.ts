export function changeColorsInSVG(countryIds: string[], svgElement: SVGSVGElement): void {
    const svgCountries = svgElement.querySelectorAll('path') as NodeListOf<SVGPathElement>;
    svgCountries.forEach((country: SVGPathElement) => {
      if (countryIds.includes(country.id)) {
        country.style.fill = '#ffff00';
      } else {
        country.style.fill = '#00000000';
      }
    });
  }
  