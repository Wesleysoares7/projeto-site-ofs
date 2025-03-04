import { ReactNode } from "react";

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
  className?: string;
}

function ButtonPrimary({
  children,
  color = "bg-franciscan-brown-dark",
  className,
  ...props
}: Readonly<ButtonPrimaryProps>) {
  return (
    <button
      {...props}
      className={`${color} rounded-lg p-2 text-white font-bold flex items-center justify-center shadow-lg hover:bg-franciscan-brown-light transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
