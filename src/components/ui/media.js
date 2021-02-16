import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  bigRow: {
    backgroundColor: "#EFF9F0",
    // backgroundSize: "600px 800px",
    height: "580px",
  },
  block1: {
    marginTop: "16em",
    justifyContent: "space-evenly",
  },
}));

const Media = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.bigRow} justify="column">
      <Grid container>
        <Grid className={classes.block1} container justify="row">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/photos"
            >
              To Photos
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/videos"
            >
              To Videos
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/audio"
            >
              To Audio
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Media;
