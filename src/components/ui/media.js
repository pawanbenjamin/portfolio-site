import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import BrushIcon from "@material-ui/icons/Brush";

const useStyles = makeStyles((theme) => ({
  block1: {
    marginTop: "15em",
    justifyContent: "center",
  },
  button: {
    borderRadius: "10em",
    margin: "2em",
  },
}));

const Media = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container className={classes.bigRow} justify="column">
      <Grid className={classes.block1} container justify="row">
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to="/visualart"
          >
            Visual Art
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
            Videos
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
            Audio
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Media;
