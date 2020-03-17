import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Loading from '../../components/Loading';
import Card from '../../components/Card';

const ByCountry = ({
  country, value, loading, setLoading,
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    if (noData) setNoData(false);
    if (error) setError(false);
    fetch(`https://covid19.mathdro.id/api/countries/${value}`)
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
  }, [value, error, loading]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="covid19">Error...</div>;
  }

  return (
    <div>
      <p className="title">
        Country :
        {' '}
        {country}
      </p>
      <div className="cardContainer">
        <Card title="Confirmed">
          <p className="confirmed">{noData ? 'No Data' : data.confirmed.value}</p>
        </Card>
        <Card title="Recovered">
          <p className="recovered">{noData ? 'No Data' : data.recovered.value}</p>
        </Card>
        <Card title="Deaths">
          <p className="deaths">{noData ? 'No Data' : data.deaths.value}</p>
        </Card>
      </div>
      <p className="lastUpdate">
        Last Update :
        {' '}
        {format(new Date(data.lastUpdate), 'dd MMMM yyyy HH:mm')}
      </p>
    </div>
  );
};

export default ByCountry;
