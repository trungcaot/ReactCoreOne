import React, { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import PageTitle from "../components/PageTitle";
import { APP_TITLE, PAGE_TITLE_HOME } from "../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  })
);

const descriptions = [
  {
    title: "Test 1",
    shortened: "Short description of Test 1",
    full: "Full description of Test 1"
  },
  {
    title: "Test 2",
    shortened: "Short description of Test 2",
    full: "Full description of Test 2"
  }
];

const Home: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const [showFullDescriptions, setShowFullDescriptions] = useState([...descriptions].map(() => false));

  const handleReadMore = (index: number): void => {
    const nextShowFullDescriptions = showFullDescriptions.map((prevValue, prevIndex) =>
      prevIndex === index ? true : prevValue
    );
    setShowFullDescriptions(nextShowFullDescriptions);
  };

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_HOME} />
      </div>
      <div>
        {descriptions.map((description, index) => (
          <div key={description.title}>
            <h2>{description.title}</h2>
            <h4>
              {description.shortened}
              {showFullDescriptions[index] ? (
                <span>{description.full}</span>
              ) : (
                <button type="button" onClick={() => handleReadMore(index)}>
                  Read more...
                </button>
              )}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
