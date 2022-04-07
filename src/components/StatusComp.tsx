import React from "react";

type StatusProps = {
  status: string;
};

const StatusComp = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully !";
  } else {
    message = "Error fetching data ...";
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Status: {message}</h1>
    </>
  );
};

export default StatusComp;
