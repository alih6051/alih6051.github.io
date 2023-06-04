import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { navlinks } from "../../constants/navlinks";
import { Link as ScrollLink } from "react-scroll";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const NavbarMenuBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ChakraBox
      initial={{ opacity: 0, x: "50px" }}
      animate={{ opacity: 1, x: "0px" }}
      transition={{ duration: 0.7 }}
    >
      <Button
        ref={btnRef}
        onClick={onOpen}
        px={0}
        py={0}
        h="40px"
        w="40px"
        bg="#fff"
        rounded="full"
      >
        <HiMenuAlt2 fontSize="20px" color="#001E3C" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="bgPrimary">
          <DrawerCloseButton fontSize="20px" p={5} />
          <DrawerBody>
            <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
              <VStack gap={3} marginBottom={7}>
                {navlinks.map((link, i) => (
                  <ScrollLink
                    key={i}
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={onClose}
                  >
                    <Text
                      textTransform="uppercase"
                      fontSize="2xl"
                      opacity="0.6"
                      fontWeight="500"
                      cursor="pointer"
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
                    onClose();
                    window.open(
                      "https://drive.google.com/file/d/142vWEHYuuGZrc_OpxWdp2qm9igGQTTky/view?usp=share_link",
                      "_blank"
                    );
                  }}
                  textTransform="uppercase"
                  fontSize="2xl"
                  opacity="0.6"
                  fontWeight="500"
                  cursor="pointer"
                  _hover={{ opacity: 1 }}
                >
                  Resume
                </Text>
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ChakraBox>
  );
};

export default NavbarMenuBtn;
