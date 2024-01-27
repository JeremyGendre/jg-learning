import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
};

function ButtonContent({ children, label }: PropsWithChildren<ButtonProps>) {
  return (
    <>
      {label}
      {children}
    </>
  );
}

const classes = "px-4 py-2 rounded-md transition duration-150 bg-blue-500 text-white hover:bg-blue-700";

export default function Button({ children, label, className, ...otherProps }: PropsWithChildren<ButtonProps>) {
  return (
    <button className={`${classes} ${className}`} {...otherProps}>
      <ButtonContent label={label}>
        {children}
      </ButtonContent>
    </button>
  );
}

export function ButtonLink({ children, label, to, className, ...otherProps }: PropsWithChildren<ButtonProps & LinkProps>) {
  return (
    <Link to={to} className={`${classes} ${className}`} {...otherProps}>
      <ButtonContent label={label}>
        {children}
      </ButtonContent>
    </Link>
  )
}