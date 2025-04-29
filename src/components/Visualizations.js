import React from 'react';

function Visualizations() {
  const visualizations = [
    { title: 'Kilometers Driven Distribution', src: '/visualizations/km_driven_distribution.png' },
    { title: 'Year Distribution', src: '/visualizations/year_distribution.png' },
    { title: 'Transmission Type Count', src: '/visualizations/transmission_count.png' },
    { title: 'Fuel Type Count', src: '/visualizations/fuel_count.png' },
    { title: 'Selling Price Distribution', src: '/visualizations/selling_price_distribution.png' },
    { title: 'Mileage Distribution', src: '/visualizations/mileage_distribution.png' },
    { title: 'Owner Type Count', src: '/visualizations/owner_count.png' },
    { title: 'Feature Relationships', src: '/visualizations/feature_relationships.png' },
  ];

  return (
    <div className="container">
      <h2>Data Visualizations</h2>
      {visualizations.map((viz, index) => (
        <div key={index} className="visualization">
          <h3>{viz.title}</h3>
          <img src={viz.src} alt={viz.title} style={{ width: '100%', maxWidth: '800px', marginBottom: '20px' }} />
        </div>
      ))}
    </div>
  );
}

export default Visualizations;