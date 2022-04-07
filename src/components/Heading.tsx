type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return (
    <>
      <h1 className="text-center text-2xl text-purple-600">{props.children}</h1>
    </>
  );
};

export default Heading;
