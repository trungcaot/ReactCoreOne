import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const [name, setName] = useState("initalName");
  const setUserNameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <>
      <h1>hello {name}</h1>
      <ContactForm userName={name} onChange={setUserNameState} />
    </>
  );
};

export default ContactPage;
