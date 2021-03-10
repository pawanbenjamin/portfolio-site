import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "-5em",
    scrollSnapAlign: "start",
    backgroundColor: "transparent",
    width: "100%",
    height: "5em",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  mainContainer: {
    position: "absolute",
    marginTop: ".3em",
  },
  link: {
    fontSize: "0.75rem",
    fontWeight: "bold",
    opacity: ".7",
    textDecoration: "none",
    color: "black",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { value, setValue, selectedIndex, setSelectedIndex } = props;

  return (
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid
          container
          className={classes.mainContainer}
          justify="center"
          spacing={2}
        >
          <Grid item className={classes.link}>
            <Grid container direction="column">
              <Grid
                component={Link}
                to="/"
                item
                className={classes.link}
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                to="/about"
                item
                className={classes.link}
                onClick={() => setValue(1)}
              >
                About
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                to="/projects"
                item
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Projects
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                to="/media"
                item
                className={classes.link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(0);
                }}
              >
                Media
              </Grid>
              <Grid
                component={Link}
                to="/visualart"
                item
                className={classes.link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(1);
                }}
              >
                Visual Art
              </Grid>
              <Grid
                component={Link}
                to="/videos"
                item
                className={classes.link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(2);
                }}
              >
                Videos
              </Grid>
              <Grid
                component={Link}
                to="/audio"
                item
                className={classes.link}
                onClick={() => {
                  setValue(3);
                  setSelectedIndex(3);
                }}
              >
                Audio
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                to="/contact"
                item
                className={classes.link}
                onClick={() => setValue(4)}
              >
                Contact
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      {/* <Grid container direction="column">
        <Grid
          container
          direction="row"
          justify="left"
          className={classes.iconContainer}
        >
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
      </Grid> */}
      {/* <img alt="logo" src={swirl} className={classes.footerLogo} /> */}
    </footer>
  );
}
