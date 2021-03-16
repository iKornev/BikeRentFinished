const Button = ({ theme, children, handleClick, className = '' }) => {
  const themeClassNames = {
    primary: 'button-primary',
    accent: 'button-accent',
    warn: 'button-warn',
  };

  return (
    <button className={`${themeClassNames[theme]} ${className}`} onClick={handleClick}>{children}</button>
  );
};

export default Button;
