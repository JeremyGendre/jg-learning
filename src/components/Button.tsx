import { PropsWithChildren, useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'default' | 'tinted';
};

function ButtonContent({ children, label }: PropsWithChildren<ButtonProps>) {
  return (
    <>
      {label}
      {children}
    </>
  );
}

function useButtonClasses(props: ButtonProps = {}){
  const classes = useMemo(() => {
    const classes = ["px-4 py-2 rounded-md transition-all ring-1 ring-inset ring-transparent"];
    if(props.disabled){
      classes.push("opacity-50 cursor-not-allowed");
    } else {
      classes.push("cursor-pointer");
    }
    switch(props.variant){
      case 'tinted':
        classes.push("duration-200 bg-transparent !ring-blue-700 text-blue-700");
        if(!props.disabled) classes.push("hover:bg-blue-100")
        break;
      default:
        if(!props.disabled) {
          classes.push("duration-300 from-sky-400 via-blue-500 to-blue-500 bg-gradient-to-br bg-size-200 bg-pos-0 hover:bg-pos-100 text-white"); // bg-blue-500
        } else {
          classes.push("bg-blue-400 text-white") //hover:bg-blue-700
        }
        break;
    }
    return classes.join(" ");
  }, [props]);
  return classes;
}

export default function Button({ children, label, className, ...otherProps }: PropsWithChildren<ButtonProps>) {
  const classes = useButtonClasses({ ...otherProps });
  return (
    <button className={`${classes} ${className}`} {...otherProps}>
      <ButtonContent label={label}>
        {children}
      </ButtonContent>
    </button>
  );
}

export function ButtonLink({ children, label, to, className, ...otherProps }: PropsWithChildren<ButtonProps & LinkProps>) {
  const classes = useButtonClasses({ ...otherProps });
  return (
    <Link to={to} className={`${classes} ${className}`} {...otherProps}>
      <ButtonContent label={label}>
        {children}
      </ButtonContent>
    </Link>
  )
}