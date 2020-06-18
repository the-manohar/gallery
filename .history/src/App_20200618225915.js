import React, { useState } from "react";
import { Button } from "reactstrap";

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
      <div className="mydiv">
        <span>Search</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {/* <button onClick={() => fetchImages()}>Search</button> */}
        <Button color="primary" onClick={() => fetchImages()}>
          Search
        </Button>
      </div>

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
    </div>
  );
}

export default App;

// V38aA4zOjg1Xb1lBpNRUAK8duXvqwhDHHJbssXB_Pps
