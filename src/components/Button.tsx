import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <>
      <button
        className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={(event) => handleClick(event, 6)}
      >
        Click here
      </button>
    </>
  );
};

export default Button;
