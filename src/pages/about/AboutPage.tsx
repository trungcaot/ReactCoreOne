import React, {useRef} from "react";
import { Link } from "react-router-dom";

interface Person {
  firstName: string;
  lastName: string
}

interface Props {
  text: string;
  person: Person;
  fn?: (bob: string) => string;
}

const AboutPage = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <h1>This is AboutPage</h1>;<Link to="/">Back to HOME</Link>
      <input ref={ inputRef }/>
    </div>
  );
};

export default AboutPage;
