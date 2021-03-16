import { useState } from 'react';
import Headline from "../common/Headline";
import Stripe from "../common/Stripe";
import Button from "../common/Button";
import Bicycle from "../common/Bicycle";

// const bikes = [
//   {'name': 'Miyata 750 sr',
//     'type': 'road',
//     'price': '55$/hr'
//   },
//   {
//     'name': 'Ukraina',
//     'type': 'city',
//     'price': '5$/hr'
//   },
//   {
//     'name': 'Merida Matts',
//     'type': 'mountain',
//     'price': '50$/hr'
//   },
// ];

export default function BicycleList({ bikes, loading, setLoading, handleRent }) {
  // const [loading, setLoading] = useState(true);

  const handleDelete = (itemId) => {
    fetch('http://localhost:5000/api/bike/delete/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: itemId,
      })
    }).finally(()=>{
      setLoading(true);
    });
  };

  return (
    <div className={'bicycle-list'}>
      <Headline className={'mb-3'} emoji={'🚲'} title={'Available bicycles'} appendix={`(${bikes?.length})`}/>
      <Stripe className={'background-light'}>
        {bikes?.length > 0 &&
          bikes?.map((item)=>{
            return(
              <Bicycle item={item} handleRent={()=>handleRent(true, item._id)} handleDelete={handleDelete}/>)
          })
        }
        {
          bikes?.length === 0 && <p>No bikes :(</p>
        }
      </Stripe>
    </div>
  );
}
