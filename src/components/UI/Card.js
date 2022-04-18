import './Card.css';
export const Card = ({ children, className, ...rest }) => {
  const classes = 'card ' + className;
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
