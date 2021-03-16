const Input = ({ id, label, value, reference, type = 'text'}) => {
  console.log(reference);
  return (
    <div className={'d-flex flex-column'}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} ref={reference}/>
    </div>
  );
};

export default Input;
