const Headline = ({ emoji, title, className = '', appendix = '' }) => {
  return (
    <div className={'headline d-flex ' + className}>
      <span className={'headline-emoji mr-1'}>{emoji}</span><h3 className={'headline-title mr-1'}>{title}</h3>
      {appendix && <h3 className={'headline-appendix'}>{appendix}</h3>}
    </div>
  );
};

export default Headline;
