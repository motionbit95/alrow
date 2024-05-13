import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Topbar } from "../Component/Topbar";

const Contact = () => {
  return (
    <Flex direction={"column"} flex={1} bgColor={"gray.100"}>
      <Topbar />
      <Box h={"100vh"} w={"100vw"}>
        <Stack
          h={"70%"}
          bgColor={"#1f45fc"}
          align={"center"}
          p={16}
          justify={"end"}
        >
          <Stack direction={"row"} align={"end"} justify={"space-between"}>
            <Stack fontSize={"6xl"} fontWeight={"regular"}>
              <Text>051-752-2390</Text>
              <Text>artbrickco@nate.com</Text>
            </Stack>
            <Text fontWeight={"bold"} fontSize={"200px"} textAlign={"end"}>
              CONTACT
              <br />
              US
            </Text>
          </Stack>
        </Stack>
        <Stack h={"30%"} bgColor={"gray.200"} p={16}>
          <Text fontSize={"6xl"}>OFFICE</Text>
          <Stack fontSize={"2xl"}>
            <Text>
              부산사옥 HQ | 부산광역시 수영구 광남로 213번길 43(민락동)
            </Text>
            <Text>
              서울사옥 | 서울특별시 강서구 양천로 551-24 한화비즈메트로 2차
              306호
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Flex
        px={16}
        py={8}
        bgColor={"#1f45fc"}
        justify={"space-between"}
        align={"center"}
      >
        <Text fontSize={"6xl"}>LOGO</Text>
        <Stack justify={"end"} align={"end"}>
          <Text fontSize={"xs"}>
            COPYRIGHT(C) {new Date().getFullYear()} DAWON CORP ALL RIGHTS
            RESERVED.
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Contact;
