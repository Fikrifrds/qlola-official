import React, { useEffect, useState } from 'react';
import Global from './Global';
import ByCountry from './ByCountry';

const Covid19 = () => {
  const [country, setCountry] = useState('Indonesia');
  const [value, setValue] = useState('ID');
  const [countries, setCountries] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api/countries')
      .then((res) => res.json())
      .then((item) => {
        setCountries(item.countries);
      });
  }, []);

  const keys = Object.keys(countries);

  const onChangeValue = (e) => {
    setLoading(true);
    setCountry(e.target.value);
    setValue(countries[e.target.value]);
  };

  return (
    <div className="covid19">
      <p className="title">COVID-19 Cases</p>
      <select onChange={onChangeValue} value={country} className="country-picker">
        {keys.map((key) => (
          <option value={key} key={key}>{key}</option>
        ))}
      </select>
      <ByCountry loading={loading} value={value} country={country} setLoading={setLoading} />
      <Global />
      <div className="source">
        <p>API Source : https://covid19.mathdro.id/api</p>
        <p>Data from Johns Hopkins CSSE</p>
      </div>
    </div>
  );
};

export default Covid19;
