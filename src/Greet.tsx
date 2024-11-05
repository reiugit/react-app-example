interface Props {
  name: String;
}

function Greet({ name }: Props) {
  return <h1 className="mb-4">Hello {name}</h1>;
}

export default Greet;
