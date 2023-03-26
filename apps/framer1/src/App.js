import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Explore from "./explore";

const pageVariants = {
  in: { 
    opacity: 1,
    transition: {
      duration: 1
    } 
  },
  out: { 
    opacity: 0,
    transition: {
      duration: 1
    } 
  }
}

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.75,
      }}
      variants={{
        initialState: {
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        animateState: {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        exitState: {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        },
      }}
      className="base-page-size"
    >
        hello world
        <Explore />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
