import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { navlinks } from "../../constants/navlinks";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import NavbarMenuBtn from "./NavbarMenuBtn";
import { Link as ScrollLink } from "react-scroll";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <Box
      h="{20}"
      zIndex="100"
      position="sticky"
      top={"0"}
      transition="background-color 500ms ease"
      style={
        scroll
          ? {
              background: "rgba(102,178,255, 0.3)",
              backdropFilter: "blur(10px)",
            }
          : null
      }
    >
      <Container maxW="7xl" h={20}>
        <Flex justify="space-between" h={20} alignItems="center">
          <ChakraBox
            initial={{ opacity: 0, x: "-50px" }}
            animate={{ opacity: 1, x: "0px" }}
            transition={{ duration: 0.7 }}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              bg="#FFFFFF"
              color="bgPrimary"
              fontWeight="600"
              fontSize={20}
              h="40px"
              w="40px"
              rounded="full"
              cursor="pointer"
            >
              H
            </Flex>
          </ChakraBox>
          <ChakraBox
            justifyContent="space-between"
            paddingLeft="50px"
            display={{ base: "none", md: "flex" }}
            initial={{ opacity: 0, y: "-50px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.7 }}
          >
            {navlinks.map((link, i) => (
              <ScrollLink
                key={i}
                to={link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Text
                  textTransform="uppercase"
                  opacity={0.6}
                  fontSize="sm"
                  cursor="pointer"
                  mx={4}
                  _hover={{ opacity: 1 }}
                >
                  {link}
                </Text>
              </ScrollLink>
            ))}
            <Text
              as="a"
              href="/Mohd_Ali_Resume.pdf"
              download
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/142vWEHYuuGZrc_OpxWdp2qm9igGQTTky/view?usp=share_link",
                  "_blank"
                );
              }}
              textTransform="uppercase"
              opacity={0.6}
              fontSize="sm"
              cursor="pointer"
              mx={4}
              _hover={{ opacity: 1 }}
            >
              Resume
            </Text>
          </ChakraBox>
          <ChakraBox
            display={{ base: "none", md: "flex" }}
            initial={{ opacity: 0, x: "50px" }}
            animate={{ opacity: 1, x: "0px" }}
            transition={{ duration: 0.7 }}
          >
            <Box
              opacity={0.6}
              _hover={{ opacity: 1 }}
              cursor="pointer"
              mx="6px"
            >
              <Link href="https://github.com/alih6051" target="_blank">
                <AiFillGithub fontSize="22px" />
              </Link>
            </Box>
            <Box
              opacity={0.6}
              _hover={{ opacity: 1 }}
              cursor="pointer"
              mx="6px"
            >
              <Link
                href="https://www.linkedin.com/in/mohd-hasan/"
                target="_blank"
              >
                <AiFillLinkedin fontSize="22px" />
              </Link>
            </Box>
            <Box
              opacity={0.6}
              _hover={{ opacity: 1 }}
              cursor="pointer"
              mx="6px"
            >
              <Link href="mailto:alih6051@gmail.com">
                <AiOutlineMail fontSize="22px" />
              </Link>
            </Box>
          </ChakraBox>
          {/* </Hide> */}
          <Box display={{ base: "block", md: "none" }}>
            <NavbarMenuBtn />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
