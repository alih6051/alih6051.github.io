import { Container } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../universal/SectionHeading";
import PorfolioList from "./PorfolioList";

const Portfolio = () => {
  return (
    <Container minH="100vh" maxW="7xl" id="portfolio">
      <SectionHeading main="Creative Portfolio" sub="MY WORK" />
      <PorfolioList />
    </Container>
  );
};

export default Portfolio;
