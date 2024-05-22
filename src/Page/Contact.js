import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Topbar } from "../Component/Topbar";
import { Footer } from "../Component/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const MotionBox = ({ children, y = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: y }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        y: { duration: 2 },
      }}
    >
      {children}
    </motion.div>
  );
  return (
    <Flex direction={"column"} flex={1} bgColor={"gray.100"}>
      <Topbar whitecolor />
      <Box h={"100vh"} w={"100%"}>
        <Stack
          h={"60%"}
          bgColor={"#1f45fc"}
          align={"center"}
          p={{ base: 8, md: 0 }}
          justify={"end"}
        >
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            align={"end"}
            p={{ base: 0, md: 16 }}
            w={"full"}
            justify={"space-between"}
            spacing={{ base: 4, md: 0 }}
          >
            <Stack
              fontSize={{ base: "xl", md: "calc(1.5vw + 24px)" }}
              pl={{ base: 0, md: 16 }}
              fontWeight={"semibold"}
              align={{ base: "end", md: "start" }}
              spacing={0}
            >
              <MotionBox>
                <Text>1551-2390</Text>
              </MotionBox>
              <MotionBox>
                <Text>artbrickco@nate.com</Text>
              </MotionBox>
            </Stack>

            <MotionBox>
              <Stack
                fontWeight={"bold"}
                fontSize={{ base: "calc(4vw + 24px)", md: "calc(6vw + 48px)" }}
                textAlign={"end"}
                lineHeight={1}
              >
                <Text>CONTACT</Text>
                <Text>US</Text>
              </Stack>
            </MotionBox>
          </Stack>
        </Stack>
        <Stack
          h={"40%"}
          bgColor={"gray.200"}
          py={{ base: 0, md: 16 }}
          px={{ base: 8, md: 32 }}
          justify={"center"}
        >
          <MotionBox>
            <Text fontSize={{ base: "3xl", md: "5xl" }}>OFFICE</Text>
          </MotionBox>
          <Stack fontSize={{ base: "sm", md: "xl" }} spacing={2}>
            <MotionBox>
              <Text>
                부산사옥 HQ | 부산광역시 수영구 광남로 213번길 43(민락동)
              </Text>
            </MotionBox>
            <MotionBox>
              <Text>
                서울사옥 | 서울특별시 강서구 양천로 551-24 한화비즈메트로 2차
                306호
              </Text>
            </MotionBox>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Contact;
