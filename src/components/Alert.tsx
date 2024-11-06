interface Props {
  text: string;
}

const Alert = ({ text }: Props) => {
  return <div className="alert alert-primary mb-3">{text}</div>;
};

export default Alert;
