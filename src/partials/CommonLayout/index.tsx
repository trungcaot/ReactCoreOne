import React, { ReactNode } from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  component: any;
  path?: string;
  exact?: boolean;
}

interface NestedProps {
  children: ReactNode
}

const CommonLayout = ({ children, ...props}: NestedProps) => {
  return (
    <>
      <div>This is the Second Layout</div>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  );
};

const CommonLayoutRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest}
      render={(matchProps) => (
        <CommonLayout>
          <Component { ...matchProps } />
        </CommonLayout>
      )}
    />
  );
};

export default CommonLayoutRoute;
