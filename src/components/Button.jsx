export default function Button({ children, onClick, className = '', variant = 'primary' }) {
  const map = {
    primary: 'btn btn-primary',
    green: 'btn btn-green',
    outline: 'btn btn-outline',
  };
  const classes = `${map[variant] || map.primary}${className ? ' ' + className : ''}`;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
