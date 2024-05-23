import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Topbar } from "../Component/Topbar";
import { Footer } from "../Component/Footer";
import { motion } from "framer-motion";

const Contact = () => {
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
            direction={{ base: "column-reverse", lg: "row" }}
            align={"end"}
            p={{ base: 0, md: 8, lg: 16 }}
            w={"full"}
            justify={"space-between"}
            spacing={{ base: 4, md: 0 }}
          >
            <Stack
              fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
              pl={{ base: 0, lg: 16 }}
              fontWeight={"semibold"}
              align={{ base: "end", lg: "start" }}
              spacing={0}
              pt={{ base: 4, lg: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  y: { duration: 1 },
                }}
              >
                <Text>1551-2390</Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.5,
                  y: { duration: 1 },
                }}
              >
                <Text>artbrickco@nate.com</Text>
              </motion.div>
            </Stack>

            <Stack
              fontWeight={"bold"}
              fontSize={{ base: "6xl", md: "8xl", lg: "160px" }}
              textAlign={"end"}
              lineHeight={0.9}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  y: { duration: 1 },
                }}
              >
                <Text>CONTACT</Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.5,
                  duration: 1,
                  y: { duration: 1 },
                }}
              >
                <Text>US</Text>
              </motion.div>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          h={"40%"}
          bgColor={"gray.200"}
          py={16}
          px={{ base: 8, md: 16, lg: 32 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              delay: 1,
              duration: 1,
              y: { duration: 1 },
            }}
          >
            <Text fontSize={{ base: "3xl", md: "5xl" }}>OFFICE</Text>
          </motion.div>
          <Stack fontSize={{ base: "sm", md: "xl" }} spacing={2}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                delay: 1.5,
                duration: 1,
                y: { duration: 1 },
              }}
            >
              <Text>
                부산사옥 HQ | 부산광역시 수영구 광남로 213번길 43(민락동)
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                delay: 1.5,
                duration: 1,
                y: { duration: 1 },
              }}
            >
              <Text>
                서울사옥 | 서울특별시 강서구 양천로 551-24 한화비즈메트로 2차
                306호
              </Text>
            </motion.div>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Contact;
