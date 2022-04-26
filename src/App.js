
import { useState, useEffect, React } from "react";
import List from "./components/List/List";
import Header from "./components/Header/Header";

export default function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }, []);

  useEffect(() => {
    console.log(people);
  }, [people]);

  return (
    <div className="App">
      <Header />
      <List item={people} />
    </div>
  );
}

