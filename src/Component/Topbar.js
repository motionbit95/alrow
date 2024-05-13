import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Square,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Flex position={"absolute"} w={"100%"} justify={"space-between"} p={16}>
        <Text>로고</Text>
        {open ? (
          <CloseButton onClick={() => setOpen(!open)} />
        ) : (
          <Square size={"1.5rem"} onClick={() => setOpen(!open)}>
            <Bar />
          </Square>
        )}
      </Flex>
      {open && (
        <Box p={16} bgColor={"#1f45fc"}>
          <Flex w={"100%"} justify={"center"} pb={32}>
            <HStack gap={12}>
              <Link to="/project">
                <Text>PROJECT</Text>
              </Link>
              <Link to="/about">
                <Text>ABOUT</Text>
              </Link>
              <Link to="/contact">
                <Text>CONTACT</Text>
              </Link>
            </HStack>
          </Flex>
        </Box>
      )}
    </Stack>
  );
};

const Bar = chakra("span", {
  baseStyle: {
    w: "1.25rem",
    h: "0.125rem",
    rounded: "full",
    bg: "currentcolor",
    mx: "auto",
    insetStart: "0.125rem",
    transition: "all 0.12s",
  },
});
