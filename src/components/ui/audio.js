import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import CRT from "../../assets/CRT.jpg";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textBlock: {
    width: "30em",
    marginTop: "1em",
    marginRight: "4em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
  textBlock2: {
    width: "15em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
  textBlock3: {
    width: "40em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
  row: {
    justifyContent: "center",
    padding: "2em",
  },
  title: {
    ...theme.typography.tab,
    textAlign: "center",
    marginBottom: "3em",
  },
  title2: {
    ...theme.typography.tab,
    textAlign: "center",
    marginBottom: "1em",
  },
  CRT: {
    height: "500px",
    marginRight: "3em",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      justify: "center",
    },
  },
  signature: {
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
  },
}));

const Audio = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.title}
        style={{
          marginTop: "2em",
          marginBottom: "1em",
        }}
      >
        Recent Recordings
      </Typography>
      <Grid container justify="column">
        <Grid container justify="row" className={classes.row}>
          <Grid item display="flex">
            <Typography className={classes.textBlock}>
              <Typography className={classes.title}>
                Pawan Benjamin Trio, 'Tinte Baja'
              </Typography>
              A play on the traditional 'Panche Baja' or 5-Piece wedding bands
              of Nepal, 'Tinte Baja' presents a fresh look at the traditional
              jazz saxophone trio. Featuring Martin Nevin on acoustic bass and
              Sean Mullins on drums, the record highlights a rediscovery of
              traditional folk melodies through a creative lens, bridging two
              contrasting sonic worlds.
              <Grid
                item
                style={{
                  margin: "2em",
                }}
              >
                <iframe
                  style={{
                    border: "0",
                    width: "100%",
                    height: "42px",

                    marginRight: "5em",
                  }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=3913073922/size=small/bgcol=ffffff/linkcol=0687f5/track=542126568/transparent=true/"
                  seamless
                >
                  <a href="https://pawanbenjamin.bandcamp.com/album/tinte-baja">
                    Tinte Baja by Pawan Benjamin
                  </a>
                </iframe>
                <iframe
                  style={{ border: "0", width: "100%", height: "120px" }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=3913073922/size=small/bgcol=ffffff/linkcol=0687f5/track=2367530272/transparent=true/"
                  seamless
                >
                  <a href="https://pawanbenjamin.bandcamp.com/album/tinte-baja">
                    Tinte Baja by Pawan Benjamin
                  </a>
                </iframe>
                <Button
                  component={"a"}
                  href={"https://pawanbenjamin.bandcamp.com/album/tinte-baja"}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    marginTop: "0",
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Buy the Album Here
                </Button>
              </Grid>
            </Typography>
          </Grid>
          <Grid item>
            <iframe
              style={{ border: "0", width: "350px", height: "470px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=3913073922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://pawanbenjamin.bandcamp.com/album/tinte-baja">
                Tinte Baja by Pawan Benjamin
              </a>
            </iframe>
          </Grid>
        </Grid>

        <Grid container>
          <Grid container justify="row" className={classes.row}>
            <Grid item>
              <img src={CRT} className={classes.CRT}></img>
            </Grid>
            <Grid item>
              <Typography
                className={classes.textBlock}
                style={{
                  marginTop: "1em",
                  marginBottom: "2em",
                }}
              >
                <Typography className={classes.title2}>
                  Coltrane Rage Tribute
                </Typography>
                The ‘shehnai’ was made famous by it being the chosen instrument
                of legendary Indian Classical maestro Ustad Bismillah Khan. This
                wailing earthy sound was Coltrane’s first exposure to Indian
                music and it clearly left an impression, as the sound of the
                shehnai is very often associated with Coltrane’s soprano tone.
                When the shehnai sound enters the ensemble, the group embraces
                the totality of Coltrane’s expansive musical trajectory. In this
                context the effect is pure ecstasy. It effectively completes the
                story of this musical legend and his profound effect on the
                musical landscape for those inspired by raga music and its
                connection to the Coltrane legacy.
              </Typography>
              <iframe
                style={{ border: "0", width: "100%", height: "120px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2873852851/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://brooklynragamassive.bandcamp.com/album/coltrane-raga-tribute-ep-ogunde-afrindica">
                  Coltrane Raga Tribute EP - Ogunde &amp; Afrindica by Brooklyn
                  Raga Massive
                </a>
              </iframe>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            container
            justify="row"
            className={classes.row}
            style={{
              justifyContent: "space-around",
            }}
          >
            <Grid item>
              <Typography className={classes.textBlock3}>
                <Typography
                  className={classes.title}
                  style={{
                    marginTop: "2em",
                  }}
                >
                  Rez Abbasi, 'A Throw of Dice'
                </Typography>
                Deploying acoustic, electric, and electric-sitar guitars, Abbasi
                is accompanied by four closely attuned Silent Ensemble
                musicians: saxophonist/flutist Pawan Benjamin, bassist/cellist
                Jennifer Vincent, percussionist Rohan Khrishnamurthy, and
                drummer Jake Goldbas. Just shy of the film’s 74-minute length,
                this richly evocative soundtrack will likely be followed by
                numerous film opportunities for Abbasi if it receives even a
                small fraction of the recognition it deserves. In fact, it’s a
                safe bet.
                <Typography
                  className={classes.signature}
                  // style={{
                  //   marginTop: "2em",
                  //   width: "40em",
                  // }}
                >
                  DECEMBER 26, 2019 – JAZZTIMES
                </Typography>
                <Button
                  component={"a"}
                  href={
                    "https://www.youtube.com/watch?v=_b-Yv-zxB-c&feature=youtu.be"
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    marginTop: "3em",
                    marginBottom: "2em",
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Watch the Film w/ Audio
                </Button>
              </Typography>
            </Grid>
            <Grid item>
              <iframe
                style={{ border: "0", width: "350px", height: "470px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3500370444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                seamless
              >
                <a href="https://rezabbasi-whirlwind.bandcamp.com/album/a-throw-of-dice">
                  A Throw Of Dice by Rez Abbasi
                </a>
              </iframe>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container justify="row" className={classes.row}>
            <Grid item>
              <Typography className={classes.textBlock}>
                <Typography
                  className={classes.title}
                  style={{
                    marginTop: "2em",
                  }}
                >
                  Sunny Jain's 'Wild Wild East'
                </Typography>
                'The most sincere moments on Wild Wild East are the ones least
                weighed down with meaning: After Pawan Benjamin’s solemn
                reflection on the bansuri flute in “Blackwell,” Alam Khan
                loosens the mood on the sarod.''
              </Typography>
            </Grid>
            <Grid item>
              <iframe
                style={{ border: "0", width: "350px", height: "470px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3325276760/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=21734295/transparent=true/"
                seamless
              >
                <a href="https://sunnyjain.bandcamp.com/album/wild-wild-east">
                  Wild Wild East by Sunny Jain
                </a>
              </iframe>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Audio;
