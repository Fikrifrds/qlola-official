import React, { useEffect, useState } from 'react';
import Global from './Global';
import ByCountry from './ByCountry';
import { Text } from '../../context/LanguageContext';

const Covid19 = () => {
  const [selectedCountry, setSelectedCountry] = useState({ name: 'Indonesia', iso2: 'ID' });
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api/countries')
      .then((res) => res.json())
      .then((item) => {
        setCountries(item.countries);
      });
  }, []);

  const onChangeValue = (e) => {
    setLoading(true);
    const foundCountry = countries.find((item) => item.iso2 === e.target.value);
    setSelectedCountry(foundCountry);
  };

  return (
    <div className="covid19">
      <p className="title">COVID-19 Cases</p>
      <select onChange={onChangeValue} value={selectedCountry.iso2} className="country-picker">
        {countries.map((country) => (
          <option value={country.iso2} key={country.name}>{country.name}</option>
        ))}
      </select>
      <ByCountry loading={loading} country={selectedCountry} setLoading={setLoading} />
      <Global />
      <div className="source">
        <p>
          <Text tid="apiSource" />
          : https://covid19.mathdro.id/api
        </p>
        <p>
          Data
          {' '}
          <Text tid="from" />
          {' '}
          Johns Hopkins CSSE
        </p>
      </div>
    </div>
  );
};

export default Covid19;
