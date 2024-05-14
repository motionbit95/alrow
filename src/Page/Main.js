import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Topbar } from "../Component/Topbar";
import { motion } from "framer-motion";

const Main = () => {
  const [open, setOpen] = useState(false);

  const handlebuttonClick = () => {
    setOpen(!open);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex direction={"column"} flex={1}>
      {/* 애니메이션 화면 */}
      <Box
        h="100vh"
        w="100vw"
        bgColor={"#1f45fc"}
        alignContent={"center"}
        display={open ? "none" : "block"}
      >
        <Stack justify={"center"} align={"center"}>
          <Flex
            onClick={handlebuttonClick}
            position={"relative"}
            gap={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={require("../Asset/Image/left.png")}
              transform={`rotate(${isHovered ? 180 : 0}deg)`}
              transition="transform 0.12s ease-in-out"
            />
            <Image
              src={require("../Asset/Image/right.png")}
              transform={`rotate(${isHovered ? 180 : 0}deg)`}
              transition="transform 0.12s ease-in-out"
            />
          </Flex>
        </Stack>
      </Box>
      {/* 메인화면 */}
      <Box
        display={open ? "block" : "none"}
        h="100vh"
        w="100vw"
        bgColor={"gray.300"}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={require("../Asset/Video/main.mp4")} type="video/mp4" />
        </video>
        <Topbar whitecolor />
      </Box>
    </Flex>
  );
};

export default Main;
