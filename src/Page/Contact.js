import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Topbar } from "../Component/Topbar";
import { Footer } from "../Component/Footer";
import { AnimatePresence, motion } from "framer-motion";
import ScrollFillText from "../Component/ScrollRevealText";

const Contact = () => {
  // const [open, setOpen] = useState(false);
  // const [index, setIndex] = useState(0);

  // const texts = ["MAKE", "YOUR", "OWN", "FANTASY"];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(true); // 메인 화면으로 전환
  //   }, 4000);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 250); // 0.3초마다 텍스트 변경
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <Flex direction={"column"} flex={1} bgColor={"gray.100"}>
        {/* <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            >
              <Stack
                h={"100vh"}
                he
                w={"100%"}
                bgColor={"#1f45fc"}
                align={"center"}
                justify={"center"}
              >
                <Box>
                  <Text
                    fontSize={{ base: "3xl", md: "100px" }}
                    fontWeight={"bold"}
                    color={"white"}
                  >
                    {texts[index]}
                  </Text>
                </Box>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence> */}

        <Flex
          flex={1}
          direction={"column"}
          // display={open ? "block" : "none"}
        >
          <Topbar />
          <Box
            // display={open ? "block" : "none"}
            w={"100%"}
            py={{ base: 32, lg: 56 }}
            px={{ base: 5, lg: 20 }}
            bgColor={"#1f45fc"}
          >
            <Stack spacing={6}>
              <Box
                fontSize={{
                  base: "5xl",
                  md: "120px",
                  lg: "160px",
                  xl: "200px",
                  "2xl": "240px",
                }}
                fontWeight={"bold"}
                lineHeight={1}
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
                    delay: 0.3,
                    duration: 1.3,
                    y: { duration: 1 },
                  }}
                >
                  <Text>US</Text>
                </motion.div>
              </Box>
              <Box
                fontSize={{
                  base: "4xl",
                  lg: "5xl",
                  xl: "6xl",
                  "2xl": "7xl",
                }}
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
              </Box>
            </Stack>
          </Box>
          <Box
            w={"100%"}
            bgImage={require("../Asset/Image/ContactBgImg.jpg")}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
          >
            <Stack
              px={{ base: 5, lg: 20 }}
              py={{ base: 32, lg: 56 }}
              color={"white"}
              align={"center"}
              justify={"center"}
              fontSize={{
                base: "20px",
                md: "36px",
                lg: "48px",
                xl: "72px",
                "2xl": "80px",
              }}
              fontWeight={"bold"}
            >
              <ScrollFillText index={0}>
                ARTBRICK CO., LTD. OPERATES
              </ScrollFillText>
              <ScrollFillText index={0}>
                OFFICES IN SEOUL AND BUSAN,
              </ScrollFillText>
              <ScrollFillText index={0}>OFFERING PROFESSIONAL</ScrollFillText>
              <ScrollFillText index={1}>
                INTERIOR DESIGN SERVICES
              </ScrollFillText>
              <ScrollFillText index={1}>
                ACROSS THE ENTIRE REGION
              </ScrollFillText>
              <ScrollFillText index={1}>OF SOUTH KOREA</ScrollFillText>
            </Stack>
          </Box>
          <TableContainer
            bgColor={"gray.200"}
            py={{ base: 16, lg: 32 }}
            px={{ base: 8, lg: 32 }}
          >
            <Table>
              <Tbody>
                <Tr>
                  <Td w={"40%"}>
                    <Box />
                  </Td>
                  <Td>
                    <HStack py={{ base: 8, lg: 16 }} spacing={12}>
                      <Flex w="100px" gap={{ base: 2 }}>
                        <Image
                          src={require("../Asset/Image/leftBlack.png")}
                          width="45%"
                          height="auto"
                        />
                        <Image
                          src={require("../Asset/Image/rightBlack.png")}
                          width="45%"
                          height="auto"
                        />
                      </Flex>
                      <Stack
                        fontSize={{
                          base: "lg",
                          lg: "xl",
                          xl: "2xl",
                          "2xl": "3xl",
                        }}
                        fontWeight={"bold"}
                      >
                        <Text>Artbrick Co., Ltd.</Text>
                        <Text>
                          (주)아트브릭은 대한민국 전역을 커버하는 인테리어
                          <br />
                          디자인 전문기업으로, 서울과 부산 사무실을 운영하고
                          <br />
                          있습니다.
                        </Text>
                      </Stack>
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td w={"40%"} alignContent={"start"}>
                    <Stack spacing={16}>
                      <Text>01</Text>
                      <Text
                        fontSize={{
                          base: "lg",
                          md: "xl",
                          lg: "2xl",
                          xl: "3xl",
                          "2xl": "5xl",
                        }}
                        fontWeight={"bold"}
                      >
                        LET'S TALK
                      </Text>
                    </Stack>
                  </Td>
                  <Td>
                    <Stack spacing={16}>
                      <Text>SEND US YOUR PROJECT</Text>
                      <HStack justify={"space-between"}>
                        <Stack
                          fontSize={{
                            base: "md",
                            lg: "lg",
                            xl: "xl",
                            "2xl": "2xl",
                          }}
                          fontWeight={"semibold"}
                          pb={12}
                        >
                          <Text>1551-2390</Text>
                          <Text>artbrickco@nate.com</Text>
                        </Stack>
                        <ButtonGroup variant={"transparent"} size={"sm"}>
                          <Button>BLOG</Button>
                          <Button>INSTAGRAM</Button>
                        </ButtonGroup>
                      </HStack>
                    </Stack>
                  </Td>
                </Tr>
                <Tr>
                  <Td w={"40%"} alignContent={"start"}>
                    <Stack spacing={16}>
                      <Text>02</Text>
                      <Text
                        fontSize={{
                          base: "lg",
                          md: "xl",
                          lg: "2xl",
                          xl: "3xl",
                          "2xl": "5xl",
                        }}
                        fontWeight={"bold"}
                      >
                        OFFICES
                      </Text>
                    </Stack>
                  </Td>
                  <Td>
                    <Stack spacing={16}>
                      <Text
                        fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
                      >
                        WE WORK EVERYWHERE.
                      </Text>
                      <Stack
                        fontSize={{
                          base: "md",
                          lg: "lg",
                          xl: "xl",
                          "2xl": "2xl",
                        }}
                        spacing={4}
                        pb={12}
                      >
                        <Text fontWeight={"bold"}>KOREA</Text>
                        <Stack>
                          <Text>
                            ​서울사옥 | 서울특별시 강서구 양천로 551-24
                            한화비즈메트로 2차 306호
                          </Text>
                          <Text>
                            부산사옥 HQ | 부산광역시 수영구 광남로 213번길
                            43(민락동)
                          </Text>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
