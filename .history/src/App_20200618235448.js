import React, { useState } from "react";
import { Button, InputGroup, Input, Jumbotron, Spinner } from "reactstrap";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=V38aA4zOjg1Xb1lBpNRUAK8duXvqwhDHHJbssXB_Pps&query=${value}&orientation=squarish&per_page=18`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      });
  };
  return (
    <div className="container app">
      <div className="col-md-12 col-sm-10 col-xs-12">
        <Jumbotron>
          <h1 className="display-3">Welcome to MLeo Gallery</h1>
        </Jumbotron>
      </div>
    </div>
  );
}

export default App;

//
