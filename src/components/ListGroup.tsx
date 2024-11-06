import { useState } from "react";
import ListItem from "./ListItem";

interface Props {
  title: string;
  items: string[];
}

function ListGroup({ title, items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="listgroup-small mt-5">
      <h3 className="mt-3">{title}</h3>

      <ul className="list-group">
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            isSelected={index === selectedIndex}
            onSelectItem={() => setSelectedIndex(index)}
          />
        ))}
      </ul>

      <p className="text-secondary mt-4 ms-2">
        &nbsp;<i>Click on items to select.</i>
      </p>
    </div>
  );
}

export default ListGroup;
