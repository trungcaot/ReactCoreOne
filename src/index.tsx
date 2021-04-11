import * as  React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/assets/scss/style.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

const renderContainer = (Component: any) => {
  const root = document.getElementById("root");
  const Application = (
    <ReduxProvider store={store}>
      <Router>
        <Component />
      </Router>
    </ReduxProvider>
  );

  // render component
  render(Application, root);
};

renderContainer(App);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
