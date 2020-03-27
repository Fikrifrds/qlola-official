import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Loading from '../../components/Loading';
import Card from '../../components/Card';

const Global = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) setError(false);
    fetch('https://covid19.mathdro.id/api')
      .then((res) => res.json())
      .then((item) => {
        setData(item);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="covid19">Error...</div>;
  }

  return (
    <div className="covid19">
      <p className="title">Global</p>
      <div className="cardContainer">
        <Card title="Confirmed">
          <p className="confirmed">{data.confirmed.value}</p>
        </Card>
        <Card title="Recovered">
          <p className="recovered">{data.recovered.value}</p>
        </Card>
        <Card title="Deaths">
          <p className="deaths">{data.deaths.value}</p>
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

export default Global;
