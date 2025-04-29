import React, { useState } from 'react';
import { predictOwner } from '../Api';

function PredictOwner() {
  const [kmDriven, setKmDriven] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    const payload = {
      km_driven: Number(kmDriven),
      year: Number(year),
    };
    const res = await predictOwner(payload);
    setResult(res.data);
  };

  return (
    <div className="container">
      <h2>Predict Owner</h2>
      <input placeholder="Kilometers Driven" value={kmDriven} onChange={(e) => setKmDriven(e.target.value)} />
      <input placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button onClick={handlePredict}>Predict Owner</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default PredictOwner;