import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Predict from './components/Predict';
import RecommendPrice from './components/RecommendPrice';
import SuggestCars from './components/SuggestCars';
import ExportResults from './components/ExportResults';
import CarsList from './components/CarsList';
import PredictMileage from './components/PredictMileage'; // Import PredictMileage
import PredictOwner from './components/PredictOwner'; // Import PredictOwner
import Visualizations from './components/Visualizations'; // Import Visualizations
import './styles.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/predict">Predict Price</Link>
        <Link to="/cars-list">Cars List</Link>
        <Link to="/predict-mileage">Predict Mileage</Link>
        <Link to="/predict-owner">Predict Owner</Link>
        <Link to="/visualizations">Visualizations</Link> {/* Add Link */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/recommend-price" element={<RecommendPrice />} />
        <Route path="/suggest-cars" element={<SuggestCars />} />
        <Route path="/export-results" element={<ExportResults />} />
        <Route path="/cars-list" element={<CarsList />} />
        <Route path="/predict-mileage" element={<PredictMileage />} />
        <Route path="/predict-owner" element={<PredictOwner />} />
        <Route path="/visualizations" element={<Visualizations />} /> {/* Add Route */}
      </Routes>
    </Router>
  );
}

export default App;
