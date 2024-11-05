function ListGroup() {
  let items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  //items = [];

  const message = items.length === 0 && <p>No items</p>;

  return (
    <>
      <h3>ListGroup</h3>

      {message}

      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log({ item })}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
