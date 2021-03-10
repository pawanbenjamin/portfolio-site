import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import redSax from "../../assets/redSax.jpg";
import withReggieBansuri from "../../assets/withReggieBansuri.jpg";
import wShyamDai from "../../assets/wShyamDai.jpg";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  bigRow: {
    // backgroundColor: "#EFF9F0",
    // backgroundSize: "600px 800px",
    scrollSnapType: "y mandatory",
  },
  block1: {
    marginTop: "2em",
    justifyContent: "space-evenly",
  },
  img: {
    marginTop: "2em",
    height: "500px",
    borderRadius: "5px",
    boxShadow: "0 3px 6px",
  },
  textBlock: {
    marginTop: "4em",
    width: "33em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
  },
  descrip: {
    width: "60em",
    textAlign: "center",
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
  },
  shyam: {
    marginTop: "2em",
    textAlign: "center",
  },
  title: {
    ...theme.typography.tab,
    marginBottom: "2em",
    textAlign: "center",
  },
  lpr: {
    marginBottom: "6em",
    height: "500px",
    boxShadow: "0 3px 6px",
    [theme.breakpoints.down("md")]: {
      height: "15em",
    },
  },
}));

const containerVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    },
  },
};

const text1 = {
  hidden: {
    y: "-200vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 3,
    },
  },
};

const redSaxy = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
    },
  },
};

const About = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="item1"></div>
      <div className="item2"></div>
      <div className="item3"></div>
      <div className="item4"></div>
    </div>
  );
};

export default About;
