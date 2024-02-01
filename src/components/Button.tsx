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
    const classes = ["px-4 py-2 rounded-md transition duration-150 ring-1 ring-inset ring-transparent"];
    if(props.disabled){
      classes.push("opacity-50 cursor-not-allowed");
    } else {
      classes.push("cursor-pointer");
    }
    switch(props.variant){
      case 'tinted':
        classes.push("bg-transparent !ring-blue-700 text-blue-700");
        if(!props.disabled) classes.push("hover:bg-blue-100")
        break;
      default:
        classes.push("bg-blue-500 text-white");
        if(!props.disabled) classes.push("hover:bg-blue-700")
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