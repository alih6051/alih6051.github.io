import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const AboutDetail = () => {
  return (
    <ChakraBox
      display="flex"
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      transition={{ duration: 0.7 }}
      h="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="100%">
        <Text marginBottom="10px" fontSize="sm">
          Hello! My name is Mohd Hasan & I enjoy creating things that live on
          the internet. I'm a passionate Developer, with strong administrative &
          communication skills, good attention to details & the ability to write
          efficient code.
        </Text>
        <Text fontSize="sm">
          I have clear, logical mind with a practical approach to
          problem-solving and a drive to see things through to completion. I
          have work experience in multiple project and clone project with team
          collaboration.
        </Text>
        <Flex py="5px" fontSize="sm" marginTop={3}>
          <Flex justifyContent="left" alignItems="center" w="25%">
            <AiFillPhone />
            <Text marginLeft="10px">Phone</Text>
          </Flex>
          <Text>+91 8882523233</Text>
        </Flex>
        <Flex py="5px" fontSize="sm">
          <Flex justifyContent="left" alignItems="center" w="25%">
            <AiOutlineMail />
            <Text marginLeft="10px">Email</Text>
          </Flex>
          <Text>alih6051@gmail.com</Text>
        </Flex>
        <Button
          as={motion.a}
          href="/Mohd_Ali_Resume.pdf"
          download
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/142vWEHYuuGZrc_OpxWdp2qm9igGQTTky/view?usp=share_link",
              "_blank"
            );
          }}
          variant="none"
          bg="#fff"
          size="md"
          color="bgPrimary"
          marginTop={3}
          whileHover={{ scale: 1.1 }}
        >
          Download Resume
        </Button>
      </Box>
    </ChakraBox>
  );
};

export default AboutDetail;
