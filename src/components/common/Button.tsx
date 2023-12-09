export interface ButtonProps {
  text: string;
  style?: 'primary' | 'secondary';
  className?: string;
  onClick: () => void;
}

function Button({ text, style = 'primary', className, onClick }: ButtonProps) {
  return (
    <button
      className={`${className} ${
        style === 'primary'
          ? 'border-orange bg-orange text-white hover:bg-white hover:text-orange'
          : 'border-black bg-black text-white hover:bg-white hover:text-black'
      } flex h-11 max-w-fit items-center justify-center rounded-lg border-2 px-4 py-2 text-p font-bold transition duration-100`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
