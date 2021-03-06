import React, { FC, ReactElement } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

import { FOOTER_TEXT, FOOTER_HEIGHT } from "../constants/appConstant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      background: theme.palette.background.paper,
      minHeight: FOOTER_HEIGHT
    },
    footer: {
      textTransform: "uppercase"
    }
  })
);

const Footer: FC<{}> = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="/" target="_blank" rel="noreferrer" className={classes.footer}>
        {FOOTER_TEXT}
      </Link>
    </div>
  );
};

export default Footer;
