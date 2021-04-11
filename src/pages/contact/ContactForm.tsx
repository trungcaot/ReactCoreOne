import React from "react";

interface Props {
  userName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactForm = (props: Props) => {
  const { userName, onChange } = props;
  return (
    <>
      <label>Update name</label>
      <input value={userName} onChange={onChange} />
    </>
  );
};

export default ContactForm;
