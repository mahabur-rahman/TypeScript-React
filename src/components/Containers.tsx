type ContainerProps = {
  styles: React.CSSProperties;
};

const Containers = (props: ContainerProps) => {
  return (
    <>
      <div style={props.styles}>Text content goes here</div>
    </>
  );
};

export default Containers;
