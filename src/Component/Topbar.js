import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Link,
  Square,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Topbar = () => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  return (
    <Stack>
      <Flex
        position={"absolute"}
        w={"100%"}
        justify={"space-between"}
        p={16}
        zIndex={3}
      >
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
        <Box
          w={"100%"}
          p={16}
          bgColor={"#1f45fc"}
          position={"absolute"}
          top={0}
        >
          <Flex w={"100%"} justify={"center"} pb={32}>
            <HStack gap={12} zIndex={111} color={"white"}>
              <Text onClick={() => nav("/project")}>PROJECT</Text>
              <Text onClick={() => nav("/about")}>ABOUT</Text>
              <Text onClick={() => nav("/contact")}>CONTACT</Text>
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
