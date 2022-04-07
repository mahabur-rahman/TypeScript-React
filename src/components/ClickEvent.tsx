import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const ClickEvent = (props: ButtonProps) => {
  return (
    <>
      <div className="text-center">
        <button
          onClick={(e) => props.handleClick(e, 10)}
          className="bg-slate-500 text-white text-xl px-11 border-lime-300 py-3"
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default ClickEvent;
