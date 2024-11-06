import Greet from "./Greet";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div className="mx-5 my-4">
      <Greet name="Visitor" />
      <ListGroup
        title="Available Fruits"
        items={["Apple", "Banana", "Orange"]}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
