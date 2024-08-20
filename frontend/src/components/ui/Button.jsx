import { cn } from '../../lib/utils';

const Button = ({
  children,
  type = 'button',
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'relative group/btn block w-full text-base font-medium rounded-md h-10',
        'transition-all duration-300 ease-in-out transform hover:scale-105',
        'text-white tracking-wide shadow-md bg-blue-500 hover:bg-blue-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
