import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import PawanBnW from "../../assets/PawanBnW.jpg";
import soprano from "../../assets/soprano.jpg";
import swirl from "../../assets/swirl.svg";
import soloShen from "../../assets/soloShen.jpg";
import Pawan37 from "../../assets/Pawan37.jpg";
import Button from "@material-ui/core/Button";

import BWLouie from "../../assets/BWLouie.jpeg";
import parchement from "../../assets/parchment.jpg";

import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  block1: {
    marginTop: "10em",
    alignItems: "left",
    width: "35em",
  },
  block2: {
    alignItems: "left",
    width: "25em",
  },
  button: {
    marginTop: "3em",
    margin: "2em",
    borderRadius: "10em",
  },
  photo: {
    boxShadow: "10px 10px 5px #ccc",
    marginTop: "10em",
    marginRight: "3em",
  },
  column1: {
    marginLeft: "8em",
    marginTop: "12em",
    marginRight: "3em",
  },
}));

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const imageVar = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};

const textVar = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};

const Home = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="item1 home1">
        <div className={classes.block1}>
          <Typography variant="h2">
            Hi, I'm Pawan. <br />
            Software Engineer <br />
            Musician & Educator
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            component={Link}
            to="/projects"
            onClick={() => {
              setValue(1);
              setSelectedIndex(1);
            }}
          >
            Technical Projects
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            component={Link}
            to="/media"
            onClick={() => {
              setValue(3);
              setSelectedIndex(3);
            }}
          >
            Music / Art
          </Button>
        </div>
        <div className={classes.block2}></div>
      </div>
      <div className="item2home">
        <img style={{ marginLeft: "0" }} src={BWLouie} />
        <div className={classes.column1}>
          <Typography variant="h2">
            I am a <br />
            creativite mind <br />
            with a passion for <br />
            technology, sound, art and people.
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
