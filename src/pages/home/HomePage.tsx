import { Link } from "react-router-dom";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Dispatch } from "redux";
import actions from "../../redux/actions";
import AboutPage from "../about/AboutPage";
import ContactPage from "../contact/Index";

const HomePage = () => {
  const counter = useSelector((state: any) => state.counter.value);
  
  console.log(counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is HomePage</h1>
      <Link to="about">Go to about page</Link>
      <br />

      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(actions.counter.increment())}>Increase counter</button>
      <button onClick={() => dispatch(actions.counter.decrement())}>Decrease counter</button>
      <h2>
        This is {process.env.NODE_ENV} environment with KEY = {process.env.REACT_APP_KEY}
      </h2>
      <AboutPage message={"abc"}/>
      <ContactPage/>
    </div>
  );
};

export default HomePage;
