import {
  Box,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { projectsData } from "../../constants/projectsData";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const PorfolioList = () => {
  const react_projects = projectsData.filter(
    (project) => project.category === "react"
  );

  const mern_projects = projectsData.filter(
    (project) => project.category === "mern"
  );

  const html_projects = projectsData.filter(
    (project) => project.category === "html"
  );

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
            React
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#007FFF" }}
            bg="#fff"
            color="#007FFF"
            mx={2}
            rounded="md"
          >
            MERN
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#007FFF" }}
            bg="#fff"
            color="#007FFF"
            mx={2}
            rounded="md"
          >
            HTML
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel paddingBottom="100px" px="0">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={10}
                columnGap={20}
              >
                {projectsData.map((project, i) => (
                  <PortfolioCard key={i} {...project} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
          <TabPanel paddingBottom="100px" px="0">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={10}
                columnGap={20}
              >
                {react_projects.map((project, i) => (
                  <PortfolioCard key={i} {...project} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
          <TabPanel paddingBottom="100px" px="0">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={10}
                columnGap={20}
              >
                {mern_projects.map((project, i) => (
                  <PortfolioCard key={i} {...project} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
          <TabPanel paddingBottom="100px" px="0">
            <ChakraBox variants={container} initial="hidden" whileInView="show">
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={10}
                columnGap={20}
              >
                {html_projects.map((project, i) => (
                  <PortfolioCard key={i} {...project} />
                ))}
              </Grid>
            </ChakraBox>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PorfolioList;
