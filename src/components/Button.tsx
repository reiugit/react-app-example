interface Props {
  label: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ label, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      children={label}
      className={"btn btn-" + color + " mt-1 mb-3"}
      onClick={onClick}
    />
  );
};

export default Button;
