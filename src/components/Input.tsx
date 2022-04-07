type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComp = (props: InputProps) => {
  // After button clicked

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <>
      <h1>Input type of typeScript</h1>
      <input
        type="text"
        placeholder="enter name"
        className="border w-56 border-red-400"
        value={props.value}
        onChange={handleInputChange}
      />
    </>
  );
};

export default InputComp;
