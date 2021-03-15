import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import fbook from "../../assets/fbook.svg";
import ig from "../../assets/ig.svg";
import twitter from "../../assets/twitter.svg";

import linkedin from "../../assets/linkedin.svg";

import withReggieBansuri from "../../assets/withReggieBansuri.jpg";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...theme.typography.tab,
  },
  littleCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainer: {
    marginTop: "20px",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    margin: ".5em",
    opacity: ".7",
  },
}));

const Contact = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="item1"></div>
    </div>
  );
};

export default Contact;
