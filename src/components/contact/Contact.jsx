import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../universal/SectionHeading";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import Footer from "../footer/Footer";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Contact = () => {
  return (
    <Container minH="80vh" maxW="7xl" id="contact">
      <SectionHeading main="Contact Me" sub="GET IN TOUCH" />
      <ChakraBox
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.7 }}
      >
        <Grid
          bg="#091624"
          h="full"
          marginTop="50px"
          marginBottom="30px"
          p={{ base: 5, md: 7 }}
          rounded="2xl"
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={10}
        >
          <ContactLeft />
          <ContactRight />
        </Grid>
      </ChakraBox>
      <Footer />
    </Container>
  );
};

export default Contact;
