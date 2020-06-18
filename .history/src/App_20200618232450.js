import React, { useState } from "react";
import {
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Jumbotron,
  Spinner,
} from "reactstrap";

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
    <div className="App col-sm-12">
      <Jumbotron>
        <h1 className="display-3">Welcome to MLeo Gallery</h1>
      </Jumbotron>
      <div className="mydiv col-sm-12 col-md-10">
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

      {result.length > 0 ? (
        <div className="col-sm-12">
          {result.map((item) => {
            return (
              <img
                className=" img-thumbnail"
                key={item.id}
                src={item.urls.small}
                alt={item.urls.small}
              />
            );
          })}
        </div>
      ) : (
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      )}
    </div>
  );
}

export default App;

//
