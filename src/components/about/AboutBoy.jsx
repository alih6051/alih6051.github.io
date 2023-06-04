import React from "react";
import Lottie from "lottie-react";
import AboutBoySvg from "../../constants/AboutBoySvg.json";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const AboutBoy = () => {
  return (
    <ChakraBox
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: [0, 1], opacity: 1 }}
      transition={{ duration: 0.7 }}
      width={{ base: "100%", md: "80%" }}
      mx="auto"
    >
      <Lottie animationData={AboutBoySvg} />
    </ChakraBox>
  );
};

export default AboutBoy;
