import Button from "../common/Button";

export default function Bicycle({item, handleDelete, handleRent }) {
  return (
    <div className={"col-12 d-flex justify-content-between mb-1"}>
        <div className={'d-flex'}>{item.name} / {item.type} / {item.price} $ per hour</div>
        <input type="hidden" value={item._id.toString()} />
        <div className={'d-flex justify-content-end align-items-center'}>
          {handleRent &&
            <Button className={'mr-3'} handleClick={handleRent} theme={'primary'}>Rent</Button>
          }
            <Button theme={'warn'} handleClick={()=>handleDelete(item._id)}>Delete</Button>
        </div>
    </div>
  );
}