import React from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textBlock: {
    width: "30em",
  },
  textBlock2: {
    width: "15em",
  },
}));

const Audio = () => {
  const classes = useStyles();

  return (
    <Grid container justify="column">
      <Grid container>
        <Grid container justify="row">
          <Grid item>
            <Typorgraphy className={classes.textBlock}>
              A play on the traditional 'Panche Baja' or 5-Piece wedding bands
              of Nepal, 'Tinte Baja' presents a fresh look at the traditional
              jazz saxophone trio. Featuring Martin Nevin on acoustic bass and
              Sean Mullins on drums, the record highlights a rediscovery of
              traditional folk melodies through a creative lens, bridging two
              contrasting sonic worlds.
            </Typorgraphy>
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
          <Grid item>
            <Typorgraphy className={classes.textBlock}></Typorgraphy>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justify="row">
          <Grid item>
            <Typorgraphy className={classes.textBlock}>
              Talk about Ogunde, and that whole process making that record.
              Taking the tunes and hearing it over a large vilambit cycle.
            </Typorgraphy>
            <iframe
              style={{ border: "0", width: "100%", height: "120px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1279427232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=4094792377/transparent=true/"
              seamless
            >
              <a href="https://coltraneragatribute.bandcamp.com/album/coltrane-raga-tribute">
                Coltrane Raga Tribute by Brooklyn Raga Massive
              </a>
            </iframe>
          </Grid>
          <Grid item>
            <Typorgraphy className={classes.textBlock2}>
              Talk about Rez's album, the process etc
            </Typorgraphy>
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
        <Grid container justify="row">
          <Grid item>
            <Typorgraphy>...7</Typorgraphy>
          </Grid>
          <Grid item>
            <Typorgraphy>
              Sunny Jain's Wild Wild East Featuring Blah BLah blah
            </Typorgraphy>
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
  );
};

export default Audio;
