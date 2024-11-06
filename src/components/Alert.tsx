import { ReactNode } from "react";

interface Props {
  color?: string;
  children: ReactNode;
}

const Alert = ({ color = "primary", children }: Props) => {
  return <div className={"alert alert-" + color + " mb-3"}>{children}</div>;
};

export default Alert;
