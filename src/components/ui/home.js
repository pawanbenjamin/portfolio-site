import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import PawanBnW from "../../assets/PawanBnW.jpg";
import soprano from "../../assets/soprano.jpg";
import swirl from "../../assets/swirl.svg";
import soloShen from "../../assets/soloShen.jpg";
import Pawan37 from "../../assets/Pawan37.jpg";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";
const useStyles = makeStyles((theme) => ({
  bigRow: {
    backgroundColor: "#EFF9F0",
    // backgroundSize: "600px 800px",
  },
  block1: {
    marginTop: "4em",

    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },

    justifyContent: "space-evenly",
  },
  img: {
    height: "500px",
    borderRadius: "5px",
    boxShadow: "0 3px 6px",
    [theme.breakpoints.down("xs")]: {
      height: "248px",
    },
  },
  intro: {
    marginLeft: "2em",
    width: "20em",
    marginBotton: "3em",
  },
  button: {
    marginTop: "2em",
    display: "flex",
    justifyContent: "center",
    marginBottom: "2em",
  },
  mainImg: {},
  title: {
    marginTop: "2em",
    ...theme.typography.tab,
    display: "flex",
    justifyContent: "center",
    marginBottom: "2em",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.bigRow} container justify="column">
      <Grid container>
        <Grid container className={classes.block1} justify="row">
          <Grid item>
            <Typorgraphy className={classes.title}>
              Welcome to my portfolio Page!{" "}
            </Typorgraphy>
            <Typorgraphy className={classes.intro}>
              Here you will find a directory to my engineering projects, as well
              as links and media from my musical career. Thank you for stopping
              by!
            </Typorgraphy>
            <Typorgraphy className={classes.title}>
              Click below to view recent projects
            </Typorgraphy>
            <Grid className={classes.button} item>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/projects"
              >
                Technical Projects
              </Button>
            </Grid>
            <Typorgraphy className={classes.title}>
              Click here to listen to my music
            </Typorgraphy>
            <Grid item className={classes.button}>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/audio"
              >
                Music
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <img src={Pawan37} className={classes.img}></img>
            <Typorgraphy
              style={{
                fontSize: "12px",
                marginTop: "1em",
                textAlign: "center",
              }}
            >
              At the UW Memorial Union Theatre Oct 2019
            </Typorgraphy>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container className={classes.block1} justify="row"></Grid>
      </Grid>
      <Grid container>
        <Grid container className={classes.block1} justify="row">
          <Grid item>
            <Typorgraphy
              style={{
                marginTop: "8em",
                marginBottom: "4em",
              }}
            >
              Please check back for new projects!
            </Typorgraphy>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
