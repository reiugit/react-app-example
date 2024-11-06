import Greet from "./Greet";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div className="mx-5 my-4">
      <Greet name="Visitor" />

      <Alert text="Example Alert-Text" />

      <ListGroup
        title="Available Fruits"
        items={["Apple", "Banana", "Orange"]}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
