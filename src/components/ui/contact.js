import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "8em",
    display: "flex",
    flexDirection: "column",
    width: "200px",
  },
  container: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
  },
  button: {
    marginTop: "3em",
    margin: "2em",
    borderRadius: "10em",
  },
}));
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const classes = useStyles();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`${name} ${email} ${message}`);
    const form = document.getElementById("contact");
    form.reset();
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   console.log(name);
  // }, [name]);

  return (
    <div className={classes.container}>
      <form
        className={classes.form}
        id="contact"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          name="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="message"
          type="text"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          multiline
        />
        <Button className={classes.button} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
