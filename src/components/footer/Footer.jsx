import { Container, Text } from "@chakra-ui/react";
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

const Footer = () => {
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container textAlign="center" py={3}>
        <Text>
          Copyright©2023 All rights reserved.Made by{" "}
          <span style={{ color: "#007FFF" }}>Mohd Hasan</span>
        </Text>
      </Container>
    </ChakraBox>
  );
};

export default Footer;
