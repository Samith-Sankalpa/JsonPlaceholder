import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/users";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Fetching data from third party API</h1>
      </div>
      <div>
        <Users data={users} />
      </div>
    </>
  );
}
