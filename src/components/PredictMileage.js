import React, { useState } from 'react';
import { predictMileage } from '../Api';

function PredictMileage() {
  const [kmDriven, setKmDriven] = useState('');
  const [year, setYear] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuel, setFuel] = useState('');
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    const payload = {
      km_driven: Number(kmDriven),
      year: Number(year),
      transmission,
      fuel,
    };
    const res = await predictMileage(payload);
    setResult(res.data);
  };

  return (
    <div className="container">
      <h2>Predict Mileage</h2>
      <input placeholder="Kilometers Driven" value={kmDriven} onChange={(e) => setKmDriven(e.target.value)} />
      <input placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <input placeholder="Transmission (Manual/Automatic)" value={transmission} onChange={(e) => setTransmission(e.target.value)} />
      <input placeholder="Fuel (Diesel/Petrol)" value={fuel} onChange={(e) => setFuel(e.target.value)} />
      <button onClick={handlePredict}>Predict Mileage</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default PredictMileage;