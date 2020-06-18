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
    <div className="row">
      <div className="App col-sm-5 col-md-12 col-xs-8">
        <Jumbotron>
          <h1 className="display-3">Welcome to MLeo Gallery</h1>
        </Jumbotron>
        <div className="d-flex col-sm-4 col-md-10 col-xs-4 p-2 mx-2">
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

        {
          result.length > 0 ? (
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
          ) : null
          // <Spinner style={{ width: "3rem", height: "3rem" }} />
        }
      </div>
    </div>
  );
}

export default App;

//
