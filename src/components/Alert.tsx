import { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary";
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ color = "primary", children, onClose }: Props) => {
  return (
    <div
      className={
        "alert alert-" + color + " alert-dismissible alert-small fade show mb-3"
      }
    >
      {children}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
};

export default Alert;
