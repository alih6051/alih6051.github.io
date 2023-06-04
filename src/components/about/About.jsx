import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../universal/SectionHeading";
import AboutBoy from "./AboutBoy";
import AboutDetail from "./AboutDetail";

const About = () => {
  return (
    <Container
      minH="100vh"
      maxW="7xl"
      id="about"
      marginBottom={{ base: "100px", lg: "0" }}
    >
      <SectionHeading main="About Me" sub="WHO AM I ?" />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        templateAreas={{
          base: `"svg" "text"`,
          md: `"svg text"`,
        }}
        gap={6}
      >
        <GridItem w="100%" area={"svg"}>
          <AboutBoy />
        </GridItem>
        <GridItem w="100%" area={"text"}>
          <AboutDetail />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
