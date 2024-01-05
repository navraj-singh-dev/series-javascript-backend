import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Fetching Data From Backend Using Axios.</h1>
      <p>Jokes: {jokes.length}</p>
      <div>
        {jokes.map((object) => {
          return (
            <>
              <h3>{object.title}</h3>
              <p>{object.joke}</p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
