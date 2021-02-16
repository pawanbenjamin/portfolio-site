import React from "react";
import Grid from "@material-ui/core/Grid";
import Typorgraphy from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "2em",
    flexDirection: "column",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...theme.typography.tab,
  },
  tit: {
    marginTop: "2em",
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
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.title}>
        <Typorgraphy className={classes.tit}>
          For inquiries, please send a massage and I will be back to you as soon
          as possible!
        </Typorgraphy>
      </Grid>
      <Grid container className={classes.littleCol} justify="column">
        <Grid item>
          <form className={classes.form}>
            <TextField id="filled-basic" label="Name" />
            <TextField id="filled-basic" label="E-mail" />
            <TextField id="filled-basic" label="Phone" />
            <TextField id="filled-basic" multiline label="Message" />
            <Button
              style={{
                marginTop: "2em",
                marginBottom: "20em",
              }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
