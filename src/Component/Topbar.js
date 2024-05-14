import {
  Box,
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

  return (
    <Stack zIndex={999} position={"absolute"} w={"100%"} top={0}>
      <Flex
        w={"100%"}
        justify={"space-between"}
        p={16}
        color={whitecolor ? "white" : "black"}
      >
        <Image
          src={
            whitecolor
              ? require("../Asset/Image/logoWhite.png")
              : require("../Asset/Image/logo.png")
          }
          w={"2rem"}
          h={"2rem"}
        />
        <Square
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
          backgroundColor: "#1f45fc",
          position: "absolute",
          top: 0,
          opacity: open ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        animate={{ opacity: open ? 1 : 0 }}
      >
        <Flex w={"100%"} justify={"center"} pb={32}>
          <HStack gap={12} zIndex={111} color={"white"}>
            <Text onClick={() => nav("/project")}>PROJECT</Text>
            <Text onClick={() => nav("/about")}>ABOUT</Text>
            <Text onClick={() => nav("/contact")}>CONTACT</Text>
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
