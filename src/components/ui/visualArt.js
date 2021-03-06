import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { images } from "../../imageData";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const useStyles = makeStyles((theme) => ({}));

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 3,
      },
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 3,
      },
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const VisualArt = () => {
  const classes = useStyles();

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="gallery">
      <div className="prev" onClick={() => paginate(-1)}>
        {"-"}
      </div>
      <motion.img
        key={page}
        height="80%"
        src={images[imageIndex]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 100, damping: 30 },
          opacity: { duration: 3 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      />
      <div className="next" onClick={() => paginate(1)}>
        {"+"}
      </div>
    </div>
  );
};

export default VisualArt;
