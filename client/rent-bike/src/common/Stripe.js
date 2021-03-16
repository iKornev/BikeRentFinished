const Stripe = ({ className, children }) => {
  return (
    <div className={'row p-3'}>
      <div className={'col stripe ' + className}>
        <div className={'row p-3'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Stripe;
