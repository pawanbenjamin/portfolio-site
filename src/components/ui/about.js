import React from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import redSax from "../../assets/redSax.jpg";
import withReggieBansuri from "../../assets/withReggieBansuri.jpg";
import wShyamDai from "../../assets/wShyamDai.jpg";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  bigRow: {
    backgroundColor: "#EFF9F0",
    // backgroundSize: "600px 800px",
  },
  block1: {
    marginTop: "2em",
    justifyContent: "space-evenly",
  },
  img: {
    marginTop: "2em",
    height: "500px",
    borderRadius: "5px",
  },
  textBlock: {
    marginTop: "4em",
    width: "33em",
    textAlign: "center",
  },
  descrip: {
    width: "60em",
    textAlign: "center",
    marginBottom: "2em",
  },
  shyam: {
    marginTop: "2em",
    textAlign: "center",
  },
  title: {
    ...theme.typography.tab,
    marginBottom: "2em",
    textAlign: "center",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.bigRow} justify="column">
      <Grid container>
        <Grid
          className={classes.block1}
          style={{
            marginBottom: "4em",
          }}
          container
          justify="row"
        >
          <Grid item>
            <Typorgraphy className={classes.textBlock}>
              <Typorgraphy className={classes.title}>Musical Bio</Typorgraphy>
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
            <Typorgraphy className={classes.descrip}>
              Below Pawan, along with Shyam Nepali, and Raj Kapoor perofrm for
              Nepali earthquake relief fund. Shyam represents a long lineage of
              Gaine Musicians in Nepal. Carrying the heart and spirit of the
              Nepali Sarangi to new heights.{" "}
            </Typorgraphy>
            <Grid
              item
              component={"a"}
              href="https://www.shyamnepali.com/about-shyam"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.shyam}
              style={{
                marginTop: "3em",
              }}
            >
              <Typorgraphy>Link here to Shyam's music</Typorgraphy>
            </Grid>
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
                height: "500px",
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
