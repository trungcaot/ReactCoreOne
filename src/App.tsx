import React from "react";
import { Switch } from "react-router-dom";

import Homepage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// import LoginLayoutRoute from "./partials/LoginLayout";
import CommonLayoutRoute from "./partials/CommonLayout";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="React App" />
      <Switch>
        <CommonLayoutRoute path="/about" component={AboutPage} />
        <CommonLayoutRoute exact path="/" component={Homepage} />
        <CommonLayoutRoute component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
