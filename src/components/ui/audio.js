import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import CRT from "../../assets/CRT.jpg";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textBlock: {
    width: "30em",
    marginTop: "1em",
    marginRight: "4em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
  textBlock2: {
    width: "15em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
  textBlock3: {
    width: "40em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
  row: {
    justifyContent: "center",
    padding: "2em",
  },
  title: {
    ...theme.typography.tab,
    textAlign: "center",
    marginBottom: "3em",
  },
  title2: {
    ...theme.typography.tab,
    textAlign: "center",
    marginBottom: "1em",
  },
  CRT: {
    height: "500px",
    marginRight: "3em",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      justify: "center",
    },
  },
  signature: {
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
}));

const Audio = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="item1 audio1"></div>
      <div className="item2 audio2"></div>
      <div className="item3 audio3"></div>
      <div className="item4 audio4"></div>
    </div>
  );
};

export default Audio;
