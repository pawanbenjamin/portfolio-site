import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import swirl from "../../assets/swirl.svg";

import { motion } from "framer-motion";
// const projectsArr = [
//   {
//     name: `Sita's Kitchen`,
//     description: `An e-commerce site where users can browse items (Nepali sauces), add to cart and checkout. Implemented RESTful API endpoints to create, edit, and delete items as an admin user `,
//   },
//   {
//     name: `ByteDance Revolution`,
//     description: `Used Tensorflow.js machine learning library and posenet to track user movements and calculate exact position  scores
//       Used Firebase to store user data, media, authentication and deployment in an agile development environment
//       `,
//   },
//   {
//     name: `React Synth`,
//     description: `A project that integrates React and the WebAudio Api's Oscillator nodes in particular, which can be controlled with user input.`,
//   },
// ];

const page = {
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
      duration: 2,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  bigRow: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  row: {
    textDecoration: "none",
    color: "black",
    marginRight: "2em",
    [theme.breakpoints.down("xs")]: {},
  },
  cardTitle: {
    ...theme.typography.tab,
    opacity: 0.7,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  description: {
    width: "40em",
    [theme.breakpoints.down("xs")]: {
      width: "20em",
    },
  },
  projectContainer: {
    marginRight: "2em",
  },
}));

const Projects = () => {
  const classes = useStyles();

  const [projects, setProjects] = useState([
    {
      name: `Sita's Kitchen`,
      description: `An e-commerce site where users can browse items (Nepali sauces), add to cart and checkout. \n Implemented RESTful API endpoints to create, edit, and delete items as an admin user `,
      url: "https://github.com/pawanbenjamin/sitas-kitchen",
    },
    {
      name: `ByteDance Revolution`,
      description: `Used Tensorflow.js machine learning library and posenet to track user movements and calculate exact position scores. \n
        Used Firebase to store user data, media, authentication and deployment in an agile development environment
        `,
      url:
        "https://github.com/HarryPotterAndThePhoenix-Sort/ByteDanceRevolution",
    },
    {
      name: `React Synth`,
      description: `A project that integrates React and the WebAudio Api's Oscillator nodes, which can be controlled with the user's keyboard.`,
      url: "https://github.com/pawanbenjamin/react-synth",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={page}
      initial="hidden"
      animate="visible"
      exit="exit
    "
      className="item1"
    >
      <Grid container className={classes.bigRow} justify="row">
        <Typorgraphy variant="h2" className={classes.title}>
          Click on each <br />
          project to go to the <br />
          Github Page!
        </Typorgraphy>
        <div className={classes.projectContainer} justify="column">
          {projects.map((project) => (
            <>
              <Grid
                component={"a"}
                href={project.url}
                rel="noopener noreferrer"
                target="_blank"
                className={classes.row}
                container
                justify="row"
              >
                <Grid item>
                  <Grid item>
                    <GitHubIcon
                      style={{
                        marginTop: "20px",
                        marginRight: "30px",
                      }}
                    />
                  </Grid>
                  <Typorgraphy className={classes.cardTitle}>
                    {project.name}
                  </Typorgraphy>
                  <Typorgraphy className={classes.description}>
                    {project.description}
                  </Typorgraphy>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </>
          ))}
        </div>
      </Grid>
    </motion.div>
  );
};

export default Projects;
