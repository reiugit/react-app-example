import Greet from "./Greet";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div className="mx-5 my-4">
      <Greet name="Visitor" />

      <Alert>
        Example Alert-Text
        <br />
        Line 2
      </Alert>

      <ListGroup
        title="Available Fruits"
        items={["Apple", "Banana", "Orange"]}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
