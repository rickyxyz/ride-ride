import { AnchorHTMLAttributes } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

function Button({
  text,
  variant = 'primary',
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${className} ${
        variant === 'primary'
          ? 'border-orange bg-orange text-white hover:shadow-md hover:brightness-110'
          : 'border-black bg-black text-white hover:bg-white hover:text-black'
      } text-p flex h-11 max-w-fit items-center justify-center rounded-lg border-2 px-4 py-6 font-bold transition duration-100`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

interface ButtonLink {
  text: string;
  style?: 'primary' | 'secondary';
  className?: string;
  target: string;
  attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

function ButtonLink({
  text,
  style = 'primary',
  className,
  target,
  attributes,
}: ButtonLink) {
  return (
    <a
      className={`${className} ${
        style === 'primary'
          ? 'border-orange bg-orange text-white hover:shadow-md hover:brightness-110'
          : 'border-black bg-black text-white hover:bg-white hover:text-black'
      } text-p flex h-11 min-w-[120px] items-center justify-center rounded-lg border-2 px-4 py-2 font-bold transition duration-100`}
      href={target}
      {...attributes}
    >
      {text}
    </a>
  );
}

export default Button;
export { ButtonLink };
