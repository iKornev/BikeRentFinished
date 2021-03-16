const Select = ({ id, label, name, reference, options = [] }) => {
  const getOptions = () => {
    return (
      options.map(option => <option value={option.value} selected={option.isSelected}>{option.label}</option>)
    );
  };

  return (
    <div className={'d-flex flex-column'}>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} ref={reference}>
        {getOptions()}
      </select>
    </div>
  );
};

export default Select;
