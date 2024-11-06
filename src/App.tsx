import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const [isAlertVisible, setAlertVisibility] = useState(true);

  const onAlertClose = () => setAlertVisibility(!isAlertVisible);

  return (
    <div className="mx-5 my-4">
      {isAlertVisible && (
        <Alert onClose={onAlertClose}>3 fruits are available.</Alert>
      )}

      {!isAlertVisible && <Button label="Show info" onClick={onAlertClose} />}

      <ListGroup
        title="Available Fruits"
        items={["Apple", "Banana", "Orange"]}
      />
    </div>
  );
}

export default App;
