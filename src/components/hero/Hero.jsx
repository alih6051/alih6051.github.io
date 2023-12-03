import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import avatar from "../../assets/avatar.png";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer."],
    loop: 0,
  });

  return (
    <Container maxW="4xl" id="home">
      <Flex style={{height: "calc(100vh - 80px)"}} justifyContent="center" alignItems="center">
        <Box w="100%">
          <ChakraBox
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.7 }}
          >
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              templateAreas={{
                base: `"avatar avatar" "name name"`,
                md: `"name name name avatar"`,
              }}
              gap={{ base: 20, md: 4 }}
              marginBottom="50px"
            >
              <GridItem marginX={{ base: "0", md: "0" }} area={"name"}>
                <Text fontSize={{ base: "26px", sm: "3xl" }} fontWeight="600">
                  Hello, my name is
                </Text>
                <Text fontSize={{ base: "40px", sm: "70px" }} fontWeight="600">
                  Mohd Hasan
                </Text>

                <Text fontSize={{ base: "26px", sm: "3xl" }} fontWeight="600">
                  I'm a <span style={{ color: "#007FFF" }}>{text}</span>
                  <Cursor cursorColor="#007FFF" />
                </Text>

                <Box>
                  <Button
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    href="/Mohd_Ali_Resume.pdf"
                    download
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/142vWEHYuuGZrc_OpxWdp2qm9igGQTTky/view?usp=share_link",
                        "_blank"
                      );
                    }}
                    size="lg"
                    marginTop="20px"
                    bg="textPrimary"
                    _hover={{
                      color: "textPrimary",
                      bg: "bgPrimary",
                      border: "1px solid #007FFF",
                    }}
                  >
                    Resume
                  </Button>
                </Box>
              </GridItem>
              <GridItem area={"avatar"}>
                <ChakraBox
                  h="270px"
                  w="270px"
                  marginX="auto"
                  position="relative"
                  rounded="full"
                  cursor="pointer"
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ boxShadow: "0 0 10px #007FFF" }}
                >
                  <Image
                    src={avatar}
                    rounded="full"
                    objectFit="contain"
                  ></Image>
                </ChakraBox>
              </GridItem>
            </Grid>
          </ChakraBox>
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;
