import { GridItem, Image, Text, VStack } from "@chakra-ui/react";
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

const SkillCard = ({ icon, name }) => {
  const listItem = {
    hidden: { opacity: 0, y: "50px" },
    show: { opacity: 1, y: "0" },
  };

  return (
    <ChakraBox variants={listItem}>
      <GridItem
        bg="#091624"
        p={5}
        rounded="2xl"
        _hover={{
          boxShadow: "0 0 5px #007FFF",
          transform: "scale(1.1)",
          transition: "all .2s ease-in-out",
        }}
      >
        <VStack>
          <Image src={icon} w="100%" />
          <Text fontSize="sm">{name}</Text>
        </VStack>
      </GridItem>
    </ChakraBox>
  );
};

export default SkillCard;
