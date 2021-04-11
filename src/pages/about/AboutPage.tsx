import React from "react";
import { Link } from "react-router-dom";

interface Props {
  message: string;
}

const AboutPage = (props: Props) => {
  const { message } = props;
  console.log(message);
  return (
    <>
      <h1>Welcome come to {message}</h1>
      <br />
      <Link to="/">Back to HOME</Link>
    </>
  );
};

export default AboutPage;
