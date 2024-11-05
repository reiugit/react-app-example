import { useState } from "react";

function ListGroup() {
  let items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>ListGroup</h3>

      {items.length === 0 && <p>No items</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
