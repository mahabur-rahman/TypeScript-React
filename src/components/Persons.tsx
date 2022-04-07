import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const Persons = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((name) => (
        <h1 key={name.first}>
          First : {name.first} Last : {name.last}
        </h1>
      ))}
    </>
  );
};

export default Persons;
