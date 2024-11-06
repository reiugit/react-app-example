interface Props {
  item: string;
  isSelected: boolean;
  onSelectItem: () => void;
}

const ListItem = ({ item, isSelected, onSelectItem }: Props) => (
  <li
    className={`list-group-item ${isSelected ? "active" : ""}`}
    onClick={onSelectItem}
  >
    {item}
  </li>
);

export default ListItem;
