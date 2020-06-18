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
      `https://api.unsplash.com/search/photos/?client_id=V38aA4zOjg1Xb1lBpNRUAK8duXvqwhDHHJbssXB_Pps&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      });
  };
  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Welcome to MLeo Gallery</h1>
      </Jumbotron>
      <div className="mydiv">
        {/* <span>Search</span> */}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Images</InputGroupText>
          </InputGroupAddon>
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
        <div className="gallery">
          {result.map((item) => {
            return (
              <img
                className="item"
                key={item.id}
                src={item.urls.regular}
                alt={item.urls.regular}
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

// V38aA4zOjg1Xb1lBpNRUAK8duXvqwhDHHJbssXB_Pps
