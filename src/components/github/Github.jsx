import { Box, Container, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../universal/SectionHeading";
import GitHubCalendar from "react-github-calendar";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Github = () => {
  return (
    <Container minH="80vh" maxW="7xl" paddingBottom="100px">
      <SectionHeading main="Calender & Stats" sub="MY GITHUB" />
      <ChakraBox
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.7 }}
      >
        <VStack spacing="40px">
          <Box maxW="4xl" margin="auto" marginTop="50px">
            <GitHubCalendar username="alih6051" />
          </Box>
          <Box maxW="xl" margin="auto">
            <Link href="https://github.com/alih6051/" target="_blank">
              <Image
                src="https://github-readme-streak-stats.herokuapp.com/?user=alih6051&theme=tokyonight&hide_border=true&ring=2DB0CB&background=161616&currStreakLabel=DDDDDD&fire=FF0000"
                alt="github_stats1"
                width="100%"
                borderRadius="20px"
              ></Image>
            </Link>
          </Box>
          <Box maxW="xl" margin="auto">
            <Link href="https://github.com/alih6051/" target="_blank">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=alih6051&show_icons=true&locale=en&theme=tokyonight&hide_border=true&bg_color=161616"
                alt="github_stats2"
                width="100%"
                borderRadius="20px"
                transition="0.2s linear"
              ></Image>
            </Link>
          </Box>
        </VStack>
      </ChakraBox>
    </Container>
  );
};

export default Github;
