import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Flask server address
});

export const predictCar = (payload) => API.post('/predict_price', payload);
export const predictTransmission = (payload) => API.post('/predict_transmission', payload);
export const predictMileage = (payload) => API.post('/predict_mileage', payload); // New API call
export const predictOwner = (payload) => API.post('/predict_owner', payload); // New API call
export const recommendPrice = (payload) => API.post('/recommend-price', payload);
export const suggestCars = (payload) => API.post('/suggest-cars', payload);
export const exportResults = (payload) => API.post('/export-results', payload, { responseType: 'blob' });
export const getCars = () => API.get('/cars-list');
