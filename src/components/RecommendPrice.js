import React, { useState } from 'react';
import { recommendPrice } from '../Api';

function RecommendPrice() {
  const [features, setFeatures] = useState('');
  const [price, setPrice] = useState(null);

  const handleRecommend = async () => {
    const res = await recommendPrice(features.split(',').map(Number));
    setPrice(res.data.recommended_price);
  };

  return (
    <div className="container">
      <h2>Recommend Selling Price</h2>
      <input placeholder="Features (comma separated)" value={features} onChange={(e) => setFeatures(e.target.value)} />
      <button onClick={handleRecommend}>Recommend</button>

      {price && <h3>Recommended Price: ₹ {price}</h3>}
    </div>
  );
}

export default RecommendPrice;
