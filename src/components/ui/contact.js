import React from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import fbook from "../../assets/fbook.svg";
import ig from "../../assets/ig.svg";
import twitter from "../../assets/twitter.svg";

import linkedin from "../../assets/linkedin.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...theme.typography.tab,
  },
  tit: {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...theme.typography.tab,
  },
  littleCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainer: {
    marginTop: "20px",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    margin: ".5em",
    opacity: ".7",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.title}>
        <Typorgraphy className={classes.tit} justify="center">
          For inquiries, please contact pawanbenjamin@gmail.com <br />
        </Typorgraphy>
        <Typorgraphy className={classes.tit} justify="center">
          Or follow me here:
        </Typorgraphy>

        <Grid
          container
          direction="row"
          justify="center"
          className={classes.iconContainer}
        >
          <Grid
            item
            component={"a"}
            href={"https://www.linkedin.com/in/pawan-benjamin-6a87411b/"}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <img src={linkedin}></img>
          </Grid>
          <Grid
            item
            component={"a"}
            href={"https://www.facebook.com/pawan.benjamin"}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <img src={fbook}></img>
          </Grid>
          <Grid
            item
            component={"a"}
            href={"https://www.instagram.com/pawanbenjamin/?hl=en"}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <img src={ig}></img>
          </Grid>
          <Grid
            item
            component={"a"}
            href={"https://twitter.com/PawanBenjamin"}
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <img src={twitter}></img>
          </Grid>
        </Grid>

        <Typorgraphy
          className={classes.tit}
          style={{
            marginBottom: "6em",
          }}
        >
          Thank you!
        </Typorgraphy>
      </Grid>
    </>
  );
};

export default Contact;
