import Greet from "./Greet";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons/Buttons";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div className="mx-5 my-4">
      <Greet name="Visitor" />
      <Alert>
        Example <b>Alert</b> with <i>HTML</i> content.{" "}
      </Alert>
      <Alert color="success">This is a success alert.</Alert>
      <Buttons />
      <ListGroup
        title="Available Fruits"
        items={["Apple", "Banana", "Orange"]}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
