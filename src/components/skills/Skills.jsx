import { Container } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../universal/SectionHeading";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <Container minH="100vh" maxW="7xl" id="skills">
      <SectionHeading main="Tech Stack & Tools" sub="WHAT I EXPERT ?" />
      <SkillsList />
    </Container>
  );
};

export default Skills;
