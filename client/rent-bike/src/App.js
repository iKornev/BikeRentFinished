import React, { useState } from 'react';
import './App.css';
import Container from "./components/Container";
import Rent from "./components/Rent";
import RentList from "./components/RentList";
import BicycleList from "./components/BicycleList";
import axios from 'axios';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  if (loading) {
    axios.get('http://localhost:5000/api/bikes').then(response => {
      setData(response.data);
    }).finally(() => {
      setLoading(false);
    })
  }

  const handleRent = (value, bikeId) => {
    fetch('http://localhost:5000/api/bike/update/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: bikeId,
        isRented: value,
      })
    }).finally(()=>{
      setLoading(true);
    });
  }

  return (
    <Container>
      <h1 className={'mb-5'}>Awesome Bike Rental</h1>
      <Rent loading={loading} setLoading={setLoading}/>
      <RentList loading={loading} setLoading={setLoading} bikes={data?.bikes?.filter((item)=>{return item.isRented})} handleRent={handleRent}/>
      <BicycleList loading={loading} setLoading={setLoading} bikes={data?.bikes?.filter((item)=>{return !item.isRented})} handleRent={handleRent}/>
    </Container>
  );
}
