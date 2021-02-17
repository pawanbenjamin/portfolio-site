import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Photos = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography>Photo Gallery Coming Soon!</Typography>
    </Grid>
  );
};

export default Photos;
