import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  console.log(history);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => history.replace({search: '?test'})}>Click run history</button>
      </header>
    </div>
  );
}

export default App;
