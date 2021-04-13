import { createStyles, makeStyles } from "@material-ui/core/styles";
import React, { FC, ReactElement } from "react";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => {
  createStyles({
    title: {
      textTransform: "uppercase"
    }
  });
});

const PageTitle: FC<{ title: string }> = ({ title }): ReactElement => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.title} color="textSecondary">
      {title}
    </Typography>
  );
};

export default PageTitle;
