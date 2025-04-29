import React, { useState } from 'react';
import { predictCar } from '../Api';

function Predict() {
  const [kmDriven, setKmDriven] = useState('');
  const [year, setYear] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuel, setFuel] = useState('');
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    try {
      const payload = {
        km_driven: Number(kmDriven),
        year: Number(year),
        transmission,
        fuel,
      };
      const res = await predictCar(payload);
      setResult(res.data);
    } catch (error) {
      console.error('Error predicting price:', error);
      setResult({ error: 'Failed to predict price. Please check your input.' });
    }
  };

  return (
    <div className="container">
      <h2>Predict Selling Price</h2>
      <input
        placeholder="Kilometers Driven"
        value={kmDriven}
        onChange={(e) => setKmDriven(e.target.value)}
      />
      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        placeholder="Transmission (Manual/Automatic)"
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
      />
      <input
        placeholder="Fuel (Diesel/Petrol)"
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
      />
      <button onClick={handlePredict}>Predict Price</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default Predict;
