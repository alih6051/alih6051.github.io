import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsGlobe, BsGithub } from "react-icons/bs";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const PortfolioCard = ({
  title,
  image,
  category,
  description,
  techstack,
  live_url,
  github_url,
}) => {
  const listItem = {
    hidden: { opacity: 0, y: "50px" },
    show: { opacity: 1, y: "0" },
  };
  return (
    <ChakraBox variants={listItem}>
      <GridItem w="100%">
        <Card
          maxW="full"
          bg="#091624"
          h="100%"
          _hover={{
            boxShadow: "0 0 5px #007FFF",
            transition: "all .2s ease-in-out",
          }}
        >
          <CardBody>
            <Box>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={5000}
              >
                {image.map((img, i) => (
                  <Box key={i}>
                    <Image src={img} />
                  </Box>
                ))}
              </Carousel>
            </Box>
            <Stack mt="6" spacing="3" color="#fff" fontSize="sm">
              <Text fontSize="lg" fontWeight="500">
                {title}
              </Text>
              <Text align="left">{description}</Text>
              <Text align="left">
                <Text as="span" color="#007FFF" fontSize="md" fontWeight="500">
                  Tech Stack :{" "}
                </Text>
                {techstack.join(", ")}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="space-between" w="100%">
              <Button
                as="a"
                href={live_url}
                target="_blank"
                variant="solid"
                color="#fff"
                bg="none"
                _hover={{ bg: "#007FFF" }}
                width="45%"
                fontSize="lg"
                leftIcon={<BsGlobe />}
              >
                Demo
              </Button>
              <Button
                as="a"
                href={github_url}
                target="_blank"
                variant="solid"
                color="#fff"
                bg="none"
                _hover={{ bg: "#007FFF" }}
                width="45%"
                fontSize="lg"
                leftIcon={<BsGithub />}
              >
                Code
              </Button>
            </Flex>
          </CardFooter>
        </Card>
      </GridItem>
    </ChakraBox>
  );
};

export default PortfolioCard;
