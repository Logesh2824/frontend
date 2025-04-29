import React, { useState } from 'react';
import { exportResults } from '../Api';

function ExportResults() {
  const [data, setData] = useState('');

  const handleExport = async () => {
    const parsedData = JSON.parse(data);
    const res = await exportResults(parsedData);

    const blob = new Blob([res.data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'exported_cars.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container">
      <h2>Export Results</h2>
      <textarea placeholder="Paste JSON array data here" value={data} onChange={(e) => setData(e.target.value)}></textarea>
      <button onClick={handleExport}>Export CSV</button>
    </div>
  );
}

export default ExportResults;
