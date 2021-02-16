import React from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import redSax from "../../assets/redSax.jpg";
import withReggieBansuri from "../../assets/withReggieBansuri.jpg";
import wShyamDai from "../../assets/wShyamDai.jpg";

const useStyles = makeStyles((theme) => ({
  bigRow: {
    backgroundColor: "#EFF9F0",
    // backgroundSize: "600px 800px",
  },
  block1: {
    marginTop: "3em",
    justifyContent: "space-evenly",
  },
  img: {
    marginTop: "2em",
    height: "440px",
    borderRadius: "5px",
  },
  textBlock: {
    width: "20em",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.bigRow} justify="column">
      <Grid container>
        <Grid className={classes.block1} container justify="row">
          <Grid item>
            <Typorgraphy className={classes.textBlock}>
              As both an accomplished Saxophonist and Bansuri flute player,
              Pawan Benjamin stands at the intersection of profound musical
              traditions. Rooted in Jazz and Improvisation, his pursuit of
              learning later led him to the Bansuri Flute and a deep study of
              Nepali Folk and Indian Classical Music. His unique perspective
              into these legacies of music has allowed him to work with a myriad
              of world-class artists, and perform and teach around the world.
              Pawan has performed alongside artists such as Roscoe Mitchell,
              Reggie Workman, Ranjit Barot, Bill T. Jones, Taufiq Qureshi, Rez
              Abbasi, Marc Cary, and others. Performance credits include the
              Metropolitan Museum of Art, the Newport Festival, the Kennedy
              Center, the Rubin Museum of Art, Lincoln Center, the Mondriaan
              Jazz Festival, the Bimhuis, the NCPA in Mumbai, Goa International
              Jazz Festival, and more.
            </Typorgraphy>
          </Grid>
          <Grid item>
            <img src={redSax} className={classes.img}></img>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className={classes.block1} container justify="row">
          <Grid item>
            <Typorgraphy>...7</Typorgraphy>
          </Grid>
          <Grid item>
            <Typorgraphy>...8</Typorgraphy>
          </Grid>
          <Grid item>
            <Typorgraphy>...9</Typorgraphy>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.block1} container justify="row">
          <Grid item></Grid>
          <Grid item>
            <img
              src={wShyamDai}
              style={{
                marginBottom: "6em",
              }}
            ></img>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
