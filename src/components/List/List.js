import React from "react";
import Item from "../Item/Item";

export default function List(props) {
  return (
    <ul>
      {props.item.map((api) => (
        <Item key={api.id} item={api} />
      ))}
    </ul>
  );
}