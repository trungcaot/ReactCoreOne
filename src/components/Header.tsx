import React from "react";

interface Props {
  title: string;
}

const Header = (props: Props) => {
  const { title } = props;

  return <div>{title}</div>;
};

export default Header;
