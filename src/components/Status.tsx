import React from "react";

type StatusProps = {
  status: 'loading' | 'success' | 'error',
  data ?: String
};

const StatusComp = (props: StatusProps) => {
  return (
    <>
    <h1 className="text-xl text-emerald-500 font-bold">
      Your name is : {props.data}
    </h1>
      <h1>
        your status is :
        <span className="text-2xl font-bold">{props.status}</span>
      </h1>
    </>
  );
};

export default StatusComp;
