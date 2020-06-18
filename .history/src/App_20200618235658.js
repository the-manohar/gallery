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
    <div className="container App">
      <div className="col-md-12 col-sm-10 col-xs-12">
        <Jumbotron>
          <h1 className="display-3">Welcome to MLeo Gallery</h1>
        </Jumbotron>
      </div>
      <div className="d-flex p-3 col-sm-12 col-md-10 col-xs-3 ">
        <InputGroup>
          <Input
            placeholder="Search any image"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </InputGroup>
        <Button color="primary" onClick={() => fetchImages()}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default App;

//
