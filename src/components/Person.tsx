import { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
  return (
    <>
      <h1>
        {props.name.first} {props.name.last}
      </h1>
    </>
  );
};

export default Person;
