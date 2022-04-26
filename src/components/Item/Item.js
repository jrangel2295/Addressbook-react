import React from "react";
import { useState } from "react";
import "./Item.css";
console.clear();

export default function Item(props) {
  const [liked, setLiked] = useState(false);
  const { name, gender, email, picture, location, login } = props.item;

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div>
      <ul className="main">
        <img src={picture.large} width="180px" alt=""></img>
        <h1>{`${name.first} ${name.last}`}</h1>
        {liked ? (
          <div>
            <p>Gender: {gender}</p>
            <p>Username: {login.username}</p>
            <p>Email: {email}</p>
            <p>Location: {location.country}</p>
          </div>
        ) : null}
        <button onClick={handleClick}>{liked ? "Hide" : "Show"} Details</button>
      </ul>
    </div>
  );
}