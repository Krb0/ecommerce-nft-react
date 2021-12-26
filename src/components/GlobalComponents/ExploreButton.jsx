import React from "react";
import StyledExploreButton from "./StyledExploreButton";
import { motion } from "framer-motion/dist/es/index";

const ExploreButton = ({ active }) => {
  return (
    <StyledExploreButton to="/products">
      <motion.button
        animate={{ opacity: [0, 1], y: [30, 0] }}
        exit={{ opacity: [1, 0] }}
        transition={{ duration: 1 }}
        className={`btn-explore ${active ? "active" : ""}`}
      >
        Explore
      </motion.button>
    </StyledExploreButton>
  );
};

export default ExploreButton;
