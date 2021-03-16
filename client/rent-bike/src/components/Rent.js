import React from 'react';
import Input from "../common/Input";
import Select from "../common/Select";
import Headline from "../common/Headline";
import Stripe from "../common/Stripe";

export default function Rent({ loading, setLoading }) {
  const options = [
    { value: 'mountain', label: 'Mountain' },
    { value: 'road', label: 'Road' },
    { value: 'trial', label: 'Trial' }
  ];

  const nameRef = React.createRef(null);
  const typeRef = React.createRef(null);
  const priceRef = React.createRef(null);

  const handleFormSubmit = () => {
    // console.log(nameRef.current.value, typeRef.current.value, priceRef.current.value);
    const nameValue = nameRef.current.value || '';
    const typeValue = typeRef.current.value || '';
    const rentPriceValue = parseInt(priceRef.current.value || 0, 10)
    if (!nameValue || !typeValue || !rentPriceValue) {
      alert('Invalid Input') 
    }
    else {
      fetch('http://localhost:5000/api/bike/create/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameValue ,
          type: typeValue ,
          rentPrice: rentPriceValue,
        })
      }).finally(setLoading(true));
    };
  }
  return (
    <div className={'rent mb-5'}>
      <Headline className={'mb-3'} emoji={'🤑'} title={'Create new rent'}/>
      <Stripe className={'background-dark'}>
        <div className={'col-4 mb-3'}>
          <Input name={'title'} id={'bike-name'} label={'Bike name'} reference={nameRef}/>
        </div>
        <div className={'col-4'}>
          <Select label={'Bike type'} options={options} reference={typeRef}/>
        </div>
        <div className={'col-2'}>
          <Input id={'rent-price'} label={'Rent price'} reference={priceRef}/>
        </div>
        <div className={'col mb-3 d-flex align-items-end justify-content-end'}>
          <button style={{backgroundColor: "green"}} onClick={handleFormSubmit}>CREATE</button>
        </div>
        
      </Stripe>
    </div>
  );
} 
