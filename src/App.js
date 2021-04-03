import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Splash from "./components/splash";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" render={() => <Splash />} />
      </Router>
    </div>
  );
}
