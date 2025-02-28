import { ButtonProps } from "./buttonprops.tsx";
import React from "react";

const Button: React.FC<ButtonProps> = ({ onClick, active, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`toggle-button ${
        active
          ? 'active'
          : 'inactive'
      } hover:bg-purple-600 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;