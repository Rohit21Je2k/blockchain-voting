import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "./NavBar/NavBar";

import "./App.css";
import Home from "./Home/Home";
import Connect from "./Connect/Connect";
import Voting from "./Voting/Voting";
import Wallet from "./Wallet/Wallet";
import Results from "./Results/Results";

function App() {
  localStorage.setItem("voters", JSON.stringify([]));
  const [store, setStore] = useState({
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  });

  const { account } = store;

  return (
    <div className="App">
      <Router>
        <NavBar store={store} setStore={setStore} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/connect"
            element={<Connect store={store} setStore={setStore} />}
          />
          {account && (
            <>
              <Route path="/wallet" element={<Wallet store={store} />} />
              <Route path="/voting" element={<Voting store={store} />} />
              <Route path="/results" element={<Results store={store} />} />
            </>
          )}

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
