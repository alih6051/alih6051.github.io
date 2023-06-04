import { Text } from "@chakra-ui/react";
import React from "react";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const SectionHeading = ({ main, sub }) => {
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      textAlign="center"
    >
      <Text fontSize="sm" color="textPrimary" fontWeight="500">
        {sub}
      </Text>
      <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="600">
        {main}
      </Text>
    </ChakraBox>
  );
};

export default SectionHeading;
