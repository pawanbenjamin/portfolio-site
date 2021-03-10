import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import PawanBnW from "../../assets/PawanBnW.jpg";
import soprano from "../../assets/soprano.jpg";
import swirl from "../../assets/swirl.svg";
import soloShen from "../../assets/soloShen.jpg";
import Pawan37 from "../../assets/Pawan37.jpg";
import Button from "@material-ui/core/Button";

import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
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
        <Typography variant="h2">Welcome to My Portfolio Page!</Typography>
        <Button
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
        <Link to="/media">
          <button>Music/Art</button>
        </Link>
      </div>
      <div className="item2 home2"></div>
      <div className="item3 home3"></div>
      <div className="item4 home4"></div>
    </motion.div>
  );
};

export default Home;
