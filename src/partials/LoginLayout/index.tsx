import React from "react";
import { Route } from "react-router";

interface Props {
  component: any;
  path?: string;
  exact?: boolean;
}

interface NestedProps {
  children: any
}

const LoginLayout = ({ children, ...props}: NestedProps) => (
  <>
    <p>This is the First Layout</p>
    {children}
  </>
);

const LoginLayoutRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LoginLayout>
          <Component {...matchProps} />
        </LoginLayout>
      )}
    />
  );
};

export default LoginLayoutRoute;
