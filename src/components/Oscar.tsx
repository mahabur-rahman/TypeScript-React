type OscarProps = {
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  return (
    <>
      <h1>{props.children}</h1>
    </>
  );
};

export default Oscar;
