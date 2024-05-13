import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Topbar } from "../Component/Topbar";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [showbar, setShowbar] = useState(false);
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
          <Button colorScheme="blue" onClick={() => setOpen(!open)}>
            클릭해
          </Button>
        </Stack>
      </Box>
      {/* 메인화면 */}
      <Box
        display={open ? "block" : "none"}
        h="100vh"
        w="100vw"
        bgColor={"gray.300"}
        color={"white"}
      >
        <Topbar />
      </Box>
    </Flex>
  );
};

export default Main;
