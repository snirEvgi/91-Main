function getCountryByName(countryName) {
  return countries.find((currentCountry) => {
    return (
      currentCountry?.name.common?.toLowerCase() === countryName.toLowerCase()
    );
  });
}

function getCountryByCode(countryName) {
  return countries.find((currentCountry) => {
    return currentCountry?.cca3?.toLowerCase() === countryName.toLowerCase();
  });
}
function getBorderByCountries(borderCountryCode) {
  const country = countries.find((currentCountry) => {
    return (
      currentCountry?.cca3?.toLowerCase() === borderCountryCode.toLowerCase()
    );
  });
  return country?.borders;
}
function getCurrencies(countryName) {
  const country = countries.find((currentCountry) => {
    return (
      currentCountry?.name.common?.toLowerCase() === countryName.toLowerCase()
    );
  });
  return country?.currencies;
}
function getCountriesByCurrency(currencyKeyword) {
  const countriesOfCurrency = [];

  for (let index = 0; index < countries.length; index++) {
    const currentCountry = countries[index];
    const currentCurrency = currentCountry?.currencies;

    if (
      currentCurrency?.[
        Object.keys(currentCurrency).find(
          //Object.keys returns an array of keys that the object contains
          (currencyKey) =>
            currencyKey.toLowerCase() === currencyKeyword.toLowerCase()
          //used the current key in the function to check if it equals to the keyword attached
        )
      ]
    ) {
      countriesOfCurrency.push(currentCountry);
    }
  }

  return countriesOfCurrency;
}

function getCountriesByStartOfWeek(sow) {
  const countriesStartDay = [];
  for (let index = 0; index < countries.length; index++) {
    const currentCountry = countries[index]; // setting current country
    const currentStartingDay = currentCountry?.startOfWeek; //setting the key value as a parameter
    if (currentStartingDay === sow) {
      countriesStartDay.push(currentCountry);
    }
  }
  return countriesStartDay;
}
//  get all the countries that has higher amount than populationNumber
function getCountriesAboveThePopulation(populationNumber) {
  const countriesWithPopulation = [];

  for (let index = 0; index < countries.length; index++) {
    const currentCountry = countries[index]; // setting current country
    const currentPopulation = currentCountry?.population; //setting the key value as a parameter
    if (populationNumber < currentPopulation) {
      countriesWithPopulation.push(currentCountry);
    }
  }
  return countriesWithPopulation;
}

// country code OR by name
function getCountryByField(countryValue, field) {
  switch (field) {
    case "code": {
      return getCountryByCode(countryValue);
    }
    case "name": {
      return getCountryByName(countryValue);
    }
    case "borderCode": {
      return getBorderByCountries(countryValue);
    }
    case "cName": {
      return getCurrencies(countryValue);
    }
    case "currency": {
      return getCountriesByCurrency(countryValue);
    }
    case "startOfTheWeek": {
      return getCountriesByStartOfWeek(countryValue);
    }
    case "population": {
      return getCountriesAboveThePopulation(countryValue);
    }
    default: {
      throw new Error("No field!");
    }
  }
}

console.log(getCountryByField("israel", "name"));
console.log(getCountryByField("usa", "code"));
console.log(getCountryByField("isr", "borderCode"));
console.log(getCountryByField("israel", "cName"));
console.log(getCountryByField("usd", "currency"));
console.log(getCountryByField("sunday", "startOfTheWeek"));
console.log(getCountryByField(700000000, "population"));
