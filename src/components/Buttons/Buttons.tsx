import Button from "../Button";

const Buttons = () => {
  let count = 0;

  return (
    <>
      <Button
        label="Click me 1"
        onClick={() => console.log(++count + " Button primary clicked ")}
      />
      &nbsp;&nbsp;
      <Button
        label="Click me 2"
        color="secondary"
        onClick={() => console.log(++count + " Button secondary clicked ")}
      />
    </>
  );
};

export default Buttons;
