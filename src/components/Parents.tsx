import React from "react";

type ParentProps = {
  children: React.ReactNode;
};

const Parents: React.FC<ParentProps> = ({ children }) => {
  return (
    <>
      <h1>
        this is
        {children}
      </h1>
    </>
  );
};

export default Parents;
