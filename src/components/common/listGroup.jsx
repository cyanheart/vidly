import React from "react";
const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          className={`list-group-item ${selectedItem === item ? "active" : ""}`}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
