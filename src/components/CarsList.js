import React, { useEffect, useState } from 'react';
import { getCars } from '../Api';

function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const res = await getCars();
      setCars(res.data.cars);
    }
    fetchCars();
  }, []);

  return (
    <div className="container">
      <h2>Cars List</h2>
      <ul>
        {cars.map((car, idx) => (
          <li key={idx}>{car.name} - {car.year} - ₹{car.selling_price}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarsList;
