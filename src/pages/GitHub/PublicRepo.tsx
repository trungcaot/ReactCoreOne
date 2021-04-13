import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import PageTitle from "../../components/PageTitle";

import { APP_TITLE, PAGE_TITLE_GH_PUBLIC } from "../../constants";

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

const PublicRepo: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_GH_PUBLIC} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_GH_PUBLIC} />
      </div>
    </>
  );
};

export default PublicRepo;
