import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api/index';

const CountryPicker = ({ handleCountryChanges }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  // const FetchCountriesAPI = async () => {
  //   setFetchedCountries(await fetchCountries());
  // };

  useEffect(() => {
    const FetchCountriesAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    FetchCountriesAPI();
  }, [setFetchedCountries]);

  return (
    <div className="container mt-4">
      <select
        className="form-control w-75 ml-5 border border-primary"
        defaultValue=""
        onChange={(e) => handleCountryChanges(e.target.value)}
      >
        <option value="">World</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
