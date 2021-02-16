import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import swirl from "../../assets/swirl.svg";

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

const useStyles = makeStyles((theme) => ({
  title: {
    alignItems: "center",
    marginBottom: "0",
  },
  bigRow: {
    alignItems: "center",
    textAlign: "center",
    marginBottom: "6em",
  },
  row: {
    marginTop: "2em",
    textDecoration: "none",
    color: "black",
    justifyContent: "center",
    padding: "20px",
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
  title: {
    marginTop: "2em",
    textAlign: "center",
    ...theme.typography.tab,
  },
}));

const Projects = () => {
  const classes = useStyles();

  const [projects, setProjects] = useState([
    {
      name: `Sita's Kitchen`,
      description: `An e-commerce site where users can browse items (Nepali sauces), add to cart and checkout. Implemented RESTful API endpoints to create, edit, and delete items as an admin user `,
      url: "https://github.com/pawanbenjamin/sitas-kitchen",
    },
    {
      name: `ByteDance Revolution`,
      description: `Used Tensorflow.js machine learning library and posenet to track user movements and calculate exact position  scores
        Used Firebase to store user data, media, authentication and deployment in an agile development environment
        `,
      url:
        "https://github.com/HarryPotterAndThePhoenix-Sort/ByteDanceRevolution",
    },
    {
      name: `React Synth`,
      description: `A project that integrates React and the WebAudio Api's Oscillator nodes in particular, which can be controlled with user input.`,
      url: "https://github.com/pawanbenjamin/react-synth",
    },
  ]);

  return (
    <>
      <Typorgraphy className={classes.title}>
        Click on each project to go to the Github Page!
      </Typorgraphy>
      <Grid container className={classes.bigRow} justify="column">
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
                <GitHubIcon
                  style={{
                    marginTop: "20px",
                    marginRight: "30px",
                  }}
                />
              </Grid>
              <Grid item>
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
      </Grid>
    </>
  );
};

export default Projects;
