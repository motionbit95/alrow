import {
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Flex,
  HStack,
  Image,
  Link,
  Square,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Topbar = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const { whitecolor } = props;

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <Stack zIndex={999} position={"absolute"} w={"100%"} top={0}>
      <Flex
        w={"100%"}
        justify={"space-between"}
        p={{ base: 8, md: 16 }}
        color={whitecolor ? "white" : "black"}
      >
        <Box
          zIndex={111}
          onClick={() => nav("/")}
          transform={open ? "scale(0)" : "scale(1)"}
          transition={"all 0.1s ease-in-out"}
        >
          <Image
            display={open ? "none" : "block"}
            cursor={"pointer"}
            src={
              whitecolor
                ? require("../Asset/Image/logoWhite.png")
                : require("../Asset/Image/logo.png")
            }
            w={"2rem"}
            h={"2rem"}
          />
        </Box>
        <Square
          cursor={"pointer"}
          size={"1.5rem"}
          onClick={() => setOpen(!open)}
          zIndex={111}
          position={"relative"}
        >
          <Bar open={open} transform={open ? "rotate(45deg)" : "rotate(0)"} />
          {open && <Bar transform={"rotate(-45deg)"} />}
        </Square>
      </Flex>
      <motion.div
        style={{
          width: "100%",
          padding: "64px 16px 16px 16px",
          height: "30vh",
          backgroundColor: "#1f45fc",
          position: "absolute",
          top: 0,
        }}
        animate={open ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <Flex w={"100%"} justify={"center"}>
          <HStack
            w={"350px"}
            justify={"space-around"}
            zIndex={111}
            color={"white"}
            h={30}
          >
            <Box w={"100px"}>
              <Text
                textAlign={"center"}
                fontSize={"md"}
                _hover={{ fontSize: "lg" }}
                cursor={"pointer"}
                onClick={() => nav("/project")}
              >
                PROJECT
              </Text>
            </Box>
            <Box w={"100px"}>
              <Text
                textAlign={"center"}
                fontSize={"md"}
                _hover={{ fontSize: "lg" }}
                cursor={"pointer"}
                onClick={() => nav("/about")}
              >
                ABOUT
              </Text>
            </Box>
            <Box w={"100px"}>
              <Text
                textAlign={"center"}
                fontSize={"md"}
                _hover={{ fontSize: "lg" }}
                cursor={"pointer"}
                onClick={() => nav("/contact")}
              >
                CONTACT
              </Text>
            </Box>
          </HStack>
        </Flex>
      </motion.div>
    </Stack>
  );
};

const Bar = chakra("span", {
  baseStyle: {
    display: "block",
    position: "absolute",
    w: "1.25rem",
    h: "0.125rem",
    rounded: "full",
    bg: "currentcolor",
    mx: "auto",
    insetStart: "0.125rem",
    transition: "all 0.12s",
  },
});
