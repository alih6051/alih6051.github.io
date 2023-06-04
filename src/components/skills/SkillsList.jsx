import React from "react";
import {
  Box,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import { skillsData } from "../../constants/skillsData";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const SkillsList = () => {
  const frontend_skills = skillsData.filter(
    (skill) => skill.category === "frontend"
  );

  const backend_skills = skillsData.filter(
    (skill) => skill.category === "backend"
  );

  const tools = skillsData.filter((item) => item.category === "tool");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Box h="100%">
      <Tabs variant="unstyled" align="center">
        <TabList my={5}>
          <Tab
            _selected={{ color: "white", bg: "#007FFF" }}
            bg="#fff"
            color="#007FFF"
            mx={2}
            rounded="md"
          >
            All
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#007FFF" }}
            bg="#fff"
            color="#007FFF"
            mx={2}
            rounded="md"
          >
            Frontend
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#007FFF" }}
            bg="#fff"
            color="#007FFF"
            mx={2}
            rounded="md"
          >
            Backend
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#007FFF" }}
            bg="#fff"
            color="#007FFF"
            mx={2}
            rounded="md"
          >
            Tools
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel paddingBottom="100px">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)",
                  xl: "repeat(8, 1fr)",
                }}
                gap={10}
              >
                {skillsData.map((skill, i) => (
                  <SkillCard key={i} {...skill} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)",
                  xl: "repeat(8, 1fr)",
                }}
                gap={10}
              >
                {frontend_skills.map((skill, i) => (
                  <SkillCard key={i} {...skill} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)",
                  xl: "repeat(8, 1fr)",
                }}
                gap={10}
              >
                {backend_skills.map((skill, i) => (
                  <SkillCard key={i} {...skill} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)",
                  xl: "repeat(8, 1fr)",
                }}
                gap={10}
              >
                {tools.map((skill, i) => (
                  <SkillCard key={i} {...skill} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SkillsList;
