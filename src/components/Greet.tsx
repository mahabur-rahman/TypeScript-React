type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <>
      <h1 className="text-center font-bold text-2xl my-4 text-blue-700 capitalize">
        {props.isLoggedIn
          ? `welcome ${props.name}! you have ${messageCount} unread messages`
          : `welcome guest`}
      </h1>
    </>
  );
};

export default Greet;
