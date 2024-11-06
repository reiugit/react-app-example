import { useState } from "react";

interface Props {
  title: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ title, items, onSelectItem }: Props) {
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3 className="mb-3">{title}</h3>

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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
