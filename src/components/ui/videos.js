import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import swirl from "../../assets/swirl.svg";
import { makeStyles } from "@material-ui/core/styles";

import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  page1: {
    marginTop: "4em",
  },
}));

const Videos = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="item1">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=F-lMO7ShtOg"
        />
      </div>
      <div className="item3">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=Xj_2uEAXLpc"
        />
      </div>
      <div className="item4">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=ITeAOXxw_kE"
        />
      </div>
    </div>
  );
};

export default Videos;
