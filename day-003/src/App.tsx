import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let myList = [];
  for (let i = 0; i < count; i++) {
    myList.push("test");
  }

  return (
    <>
      <h1>Pricelist</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click for cat {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="catbox">
        count is{" "}
        {myList.map((item) => (
          <div>
            {item}
            <img className="cat" src="https://http.cat/404.png" alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
