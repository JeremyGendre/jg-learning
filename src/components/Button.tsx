import classNames from 'classnames';
import { PropsWithChildren, useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'default' | 'tinted';
  size?: 'sm' | 'md' | 'lg';
};

const defaultProps: ButtonProps = {
  variant: 'default',
  size: 'md',
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
    const size = props.size || 'md';
    const variant = props.variant || 'default';
    return [
      "rounded-md transition-all ring-1 ring-inset ring-transparent",
      {
        'text-sm px-2 py-1.5': size === 'sm',
        'text-base px-4 py-2': size === 'md',
        'text-lg px-6 py-3': size === 'lg',
        'opacity-50 cursor-not-allowed': props.disabled,
        'cursor-pointer': !props.disabled,
        'duration-200 bg-transparent !ring-blue-700 text-blue-700': variant === 'tinted',
        'hover:bg-blue-100': !props.disabled && variant === 'tinted',
        'duration-300 from-sky-400 via-blue-500 to-blue-500 bg-gradient-to-br bg-size-200 bg-pos-0 hover:bg-pos-100 text-white': !props.disabled && variant === 'default',
        'bg-blue-400 text-white': props.disabled && variant === 'default',
      }
    ]
  }, [props]);
  return classes;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, label, className, ...otherProps } = { ...defaultProps, ...props };
  const classes = useButtonClasses(otherProps);
  return (
    <button className={classNames(classes, className)} {...otherProps}>
      <ButtonContent label={label}>
        {children}
      </ButtonContent>
    </button>
  );
}

export function ButtonLink(props: PropsWithChildren<ButtonProps & LinkProps>) {
  const { children, label, to, className, size, ...otherProps } = props;
  const classes = useButtonClasses({ ...otherProps, size });
  return (
    <Link to={to} className={classNames(classes, className)} {...otherProps}>
      <ButtonContent label={label}>
        {children}
      </ButtonContent>
    </Link>
  )
}