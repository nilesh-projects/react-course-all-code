import React, { useState } from "react";
import { Nav } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is App Page</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >{`Count ${count}`}</button>
      <Nav></Nav>

      <Outlet />
    </div>
  );
}

export default App;
