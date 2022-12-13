import React from "react";
import "./App.css";
import SignInOutContainer from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";


function App() {


  return (
    <Router>
      <Routes>
        <Route>
          {/* <div className="App">
            <SignInOutContainer />
          </div> */}
          <Route exact path="/" element={<SignInOutContainer/>} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
