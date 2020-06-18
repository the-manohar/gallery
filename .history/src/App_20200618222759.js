import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>
        <input
          style={{ width: "100%" }}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
