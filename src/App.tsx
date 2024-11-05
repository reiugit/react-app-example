import Greet from "./Greet";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div className="mx-5 my-4">
      <Greet name="Visitor" />
      <ListGroup
        title="Available Fruits"
        items={["Apple", "Banana", "Orange"]}
      />
    </div>
  );
}

export default App;
