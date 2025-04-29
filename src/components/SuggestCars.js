import React, { useState } from 'react';
import { suggestCars } from '../Api';

function SuggestCars() {
  const [filters, setFilters] = useState({});
  const [cars, setCars] = useState([]);

  const handleSuggest = async () => {
    const res = await suggestCars(filters);
    setCars(res.data.suggested_cars);
  };

  return (
    <div className="container">
      <h2>Suggest Cars</h2>
      <input placeholder="Fuel Type" onChange={(e) => setFilters({ ...filters, fuel: e.target.value })} />
      <input placeholder="Transmission" onChange={(e) => setFilters({ ...filters, transmission: e.target.value })} />
      <input placeholder="Year Min" type="number" onChange={(e) => setFilters({ ...filters, year_min: Number(e.target.value) })} />
      <input placeholder="Year Max" type="number" onChange={(e) => setFilters({ ...filters, year_max: Number(e.target.value) })} />
      <input placeholder="Price Max" type="number" onChange={(e) => setFilters({ ...filters, price_max: Number(e.target.value) })} />
      <button onClick={handleSuggest}>Suggest</button>

      {cars.length > 0 && (
        <ul>
          {cars.map((car, idx) => (
            <li key={idx}>{car.name} - ₹{car.selling_price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SuggestCars;
