import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Topbar } from "../Component/Topbar";
import { Footer } from "../Component/Footer";

const Contact = () => {
  return (
    <Flex direction={"column"} flex={1} bgColor={"gray.100"}>
      <Topbar whitecolor />
      <Box h={"100vh"} w={"100%"}>
        <Stack
          h={"70%"}
          bgColor={"#1f45fc"}
          align={"center"}
          p={{ base: 16, md: 0 }}
          justify={"end"}
        >
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            align={"end"}
            px={{ base: 0, md: 16 }}
            w={"full"}
            justify={"space-between"}
          >
            <Stack
              fontSize={{ base: "2xl", md: "6xl" }}
              fontWeight={"regular"}
              align={{ base: "end", md: "start" }}
            >
              <Text>051-752-2390</Text>
              <Text>artbrickco@nate.com</Text>
            </Stack>
            <Stack
              fontWeight={"bold"}
              fontSize={{ base: "6xl", md: "200px" }}
              textAlign={"end"}
            >
              <Text>CONTACT</Text>
              <Text mt={{ base: -12, md: -36 }}>US</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack h={"30%"} bgColor={"gray.200"} p={16}>
          <Text fontSize={{ base: "2xl", md: "6xl" }}>OFFICE</Text>
          <Stack fontSize={{ base: "lg", md: "2xl" }}>
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
      <Footer />
    </Flex>
  );
};

export default Contact;
