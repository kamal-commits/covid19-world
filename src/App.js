import React, { useState, useEffect } from 'react';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Card from './components/Cards/Card';
import Chart from './components/Charts/Chart';
import './style.css';
import { fetchData } from './api/index';
const App = () => {
  const [value, setValue] = useState({
    data: {},
    country: '',
  });

  const { data, country } = value;
  //Using Api

  // const fetchData = async (country) => {
  //   const url = 'https://covid19.mathdro.id/api';
  //   let changeableUrl = url;

  //   if (country) {
  //     changeableUrl = `${url}/countries/${country}`;
  //   }
  //   console.log(changeableUrl);
  //   try {
  //     const {
  //       data: { confirmed, recovered, deaths, lastUpdate },
  //     } = await Axios.get(changeableUrl);

  // const updatedData = {
  //   confirmed: confirmed,
  //   recovered: recovered,
  //   deaths: deaths,
  //   lastUpdate: lastUpdate,
  // };

  // setValue({ data: updatedData });
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  // console.log(fetchData);

  // const fetchData = async (country) => {
  //   const url = 'https://covid19.mathdro.id/api';
  //   let changeableUrl = url;

  //   if (country) {
  //     changeableUrl = `${url}/countries/${country}`;
  //   }
  //   console.log(changeableUrl);
  //   try {
  //     const {
  //       data: { confirmed, recovered, deaths, lastUpdate },
  //     } = await Axios.get(changeableUrl);

  //     return {
  //       confirmed,
  //       recovered,
  //       deaths,
  //       lastUpdate,
  //     };
  //     // setValue({ data: data });
  //   } catch (error) {
  //     return error;
  //   }
  // };

  useEffect(() => {
    const fetchDataAPI = async () => {
      const data = await fetchData();
      setValue({ data });
    };
    fetchDataAPI();
  }, []);

  const handleCountryChanges = async (country) => {
    console.log(country);

    //fetch data
    const fetchedData = await fetchData(country);
    console.log(fetchedData);

    //set data
    setValue({ ...value, data: fetchedData, country: country });
  };

  return (
    <div className="App">
      <h1 className="text-center text-danger font-weight-bold mb-4 mt-4">
        COVID-19
      </h1>
      <Card data={data} />
      <CountryPicker handleCountryChanges={handleCountryChanges} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
