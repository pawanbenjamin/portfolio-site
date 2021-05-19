import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import redSax from "../../assets/redSax.jpg";

import techIcons from "../../assets/techIcons.png";

import DescriptionIcon from "@material-ui/icons/Description";

import Typography from "@material-ui/core/Typography";

import Resume from "../../assets/Resume.pdf";

const useStyles = makeStyles((theme) => ({
  engineerBlock: {
    marginLeft: "15em",
    marginTop: "15em",
  },
  skillsBlock: {
    marginTop: "15em",
    marginLeft: "4em",
  },
  aboutIntro: {
    marginTop: "4em",
  },
  icon: {
    height: "1000px",
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
        <div>
          <Typography variant="h1">As an Engineer</Typography>
          <Typography>
            I graduated in 2020 from Fullstack Academy, <br />
            where I pushed myself to adapt to a challeneging enviroment, <br />
            and pushmyself to new heights.
          </Typography>
        </div>
        <div>
          <Typography variant="h2">Skills include</Typography>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </div>
      </div>
      <div className="about1">
        <div>
          <Typography variant="h1">As an Engineer</Typography>
          <Typography>
            I graduated in 2020 from Fullstack Academy, <br />
            where I pushed myself to adapt to a challeneging enviroment, <br />
            and pushmyself to new heights.
          </Typography>
        </div>
        <div>
          <Typography>Skills include</Typography>
          <Typography>
            Javascript, HTML5, CSS,
            <br /> Node.js, React, Redux, Webpack, <br /> Postgres, Firebase,
            Sequelize
          </Typography>
          <div>
            <img src={techIcons} style={{ height: "20em" }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
