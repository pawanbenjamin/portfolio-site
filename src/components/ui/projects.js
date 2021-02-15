import React from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container justify="column">
      <Grid container>
        <Grid container justify="row">
          <Grid item>
            <Typorgraphy>...1</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
          <Grid item>
            <Typorgraphy>...2</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
          <Grid item>
            <Typorgraphy>...3</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justify="row">
          <Grid item>
            <Typorgraphy>...4</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
          <Grid item>
            <Typorgraphy>...5</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
          <Grid item>
            <Typorgraphy>...6</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justify="row">
          <Grid item>
            <Typorgraphy>...7</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
          <Grid item>
            <Typorgraphy>...8</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
          <Grid item>
            <Typorgraphy>...9</Typorgraphy>
            <img src={swirl}></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
