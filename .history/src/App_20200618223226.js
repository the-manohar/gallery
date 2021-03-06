import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const fetchImages = () => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=V38aA4zOjg1Xb1lBpNRUAK8duXvqwhDHHJbssXB_Pps"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
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
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;

// V38aA4zOjg1Xb1lBpNRUAK8duXvqwhDHHJbssXB_Pps
