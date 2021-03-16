import Headline from "../common/Headline";
import Stripe from "../common/Stripe";
import Bicycle from "../common/Bicycle";

export default function RentList({ bikes, loading, setLoading, handleRent }) {
  const getTotal = () => {
    let count = 0;
    bikes?.forEach((item) => {
      count += item.price;
    });
    return count;
  };
  return (
    <div className={'rent-list mb-5'}>
      <Headline className={'mb-3'} emoji={'🤩'} title={'Your rent'} appendix={`(Total: ${getTotal()}$)`}/>
      <Stripe className={'background-light'}>
        {
          bikes?.map((item)=>{
            return(
              <Bicycle item={item} handleDelete={()=>handleRent(false, item._id)}/>)
          })
        }
        {
          bikes?.length === 0 && <p>No bikes :(</p>
        }
      </Stripe>
    </div>
  );
}
