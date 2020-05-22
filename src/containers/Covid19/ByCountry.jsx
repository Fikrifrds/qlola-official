import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import { Text } from '../../context/LanguageContext';

const ByCountry = ({
  country, loading, setLoading,
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    if (noData) setNoData(false);
    if (error) setError(false);
    fetch(`https://covid19.mathdro.id/api/countries/${country.iso2}`)
      .then((res) => res.json())
      .then((item) => {
        if (!item.error) {
          setData(item);
          setLoading(false);
        } else {
          setNoData(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [country, error, loading, noData, setLoading]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="covid19">Error...</div>;
  }

  return (
    <div>
      <p className="title">
        <Text tid="country" />
        :
        {' '}
        {country.name}
      </p>
      <div className="cardContainer">
        <Card title={<Text tid="confirmed" />}>
          <p className="confirmed">{noData ? 'No Data' : data.confirmed.value.toLocaleString()}</p>
        </Card>
        <Card title={<Text tid="recovered" />}>
          <p className="recovered">{noData ? 'No Data' : data.recovered.value.toLocaleString()}</p>
        </Card>
        <Card title={<Text tid="deaths" />}>
          <p className="deaths">{noData ? 'No Data' : data.deaths.value.toLocaleString()}</p>
        </Card>
      </div>
      <p className="lastUpdate">
        <Text tid="lastUpdate" />
        :
        {' '}
        {format(new Date(data.lastUpdate), 'dd MMMM yyyy HH:mm')}
      </p>
    </div>
  );
};


ByCountry.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default ByCountry;
