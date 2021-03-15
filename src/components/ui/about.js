import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import redSax from "../../assets/redSax.jpg";

import DescriptionIcon from "@material-ui/icons/Description";

import ctrib from "../../assets/ColtraneTrib.jpeg";
import wShyamDai from "../../assets/wShyamDai.jpg";
import LinkIcon from "@material-ui/icons/Link";
import Typography from "@material-ui/core/Typography";

import Resume from "../../assets/Resume.pdf";

const useStyles = makeStyles((theme) => ({
  engineerBlock: {
    marginTop: "15em",
  },
  skillsBlock: {
    marginTop: "15em",
    marginLeft: "4em",
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

const aboutPage = {
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
    x: "100vw",
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const About = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={aboutPage}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container"
    >
      <div className="about2">
        <Typography className={classes.engineerBlock}>
          <Typography variant="h3">As an Engineer</Typography>
          Blah Blah Blah Blah
          <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          <a href={Resume} target="_blank">
            Resume <DescriptionIcon />
          </a>
        </Typography>
        <Typography className={classes.skillsBlock}>
          <Typography variant="h3">Skills:</Typography>
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
        </Typography>
      </div>
      <div className="about1">
        <Typography className={classes.engineerBlock}>
          <Typography variant="h3">As a Musician</Typography>
          Blah Blah Blah Blah
          <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
        </Typography>
        <Typography className={classes.skillsBlock}>
          <Typography variant="h3">Awards and Honors Include:</Typography>
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
          Blah Blah Blah Blah <br />
        </Typography>
      </div>
      <div className="about3"></div>
    </motion.div>
  );
};

export default About;
