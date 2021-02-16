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
    marginTop: "30px",
    justifyContent: "space-evenly",
  },
  img: {
    height: "500px",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      height: "248px",
    },
  },
  intro: {
    marginLeft: "2em",
    width: "20em",
  },
  button: {
    marginTop: "2em",
    display: "flex",
    justifyContent: "center",
    marginBottom: "2em",
  },
  mainImg: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.bigRow} container justify="column">
      <Grid container>
        <Grid container className={classes.block1} justify="row">
          <Grid item>
            <Typorgraphy className={classes.intro}>
              Welcome to my portfolio Page! Links to not only technical projects
              put music and recordings as well. Write a little more about myself
              and my journey into code
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
            <Typorgraphy>
              As always, the portfolio is always growing. Please check back for
              more new coding projects
            </Typorgraphy>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
