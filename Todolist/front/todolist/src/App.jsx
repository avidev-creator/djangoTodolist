import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="header">
        <div className="leftheader">
          <h1>TODO LIST</h1>
        </div>
        <div className="wrapper">
          <div className="rightheader">
            <h2 className="title">Enter Your Task</h2>
            <input type="text" />
            <br />
            <input type="button" value="Submit" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
