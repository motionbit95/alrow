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
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Topbar } from "../Component/Topbar";
import { Footer } from "../Component/Footer";
import { AnimatePresence, motion } from "framer-motion";
import ScrollFillText from "../Component/ScrollRevealText";
import ContactBgImg from "../Asset/Image/ContactBgImg.jpg";

const Contact = (props) => {
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

  const isMobile = useBreakpointValue({ base: true, md: false });
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerHeight = window.innerHeight;
  const initialPosition = 300;
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset / 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // 스크롤 이벤트 핸들러
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position / 8);
  // };

  // useEffect(() => {
  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener("scroll", handleScroll);

  //   // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // 의존성 배열을 비워서 한 번만 등록하도록 함

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
          {/* <Topbar whitecolor={true} onHoverEffect={props.onHoverEffect} /> */}
          <Box
            // display={open ? "block" : "none"}
            w={"100%"}
            py={{ base: 28, md: 44 }}
            px={{ base: 7, md: "60px" }}
            bgColor={"#1f45fc"}
          >
            <Stack spacing={6}>
              <Box
                fontSize={{
                  base: "6xl",
                  sm: "90px",
                  md: "120px",
                  lg: "160px",
                  xl: "200px",
                  "2xl": "240px",
                }}
                fontWeight={"bold"}
                lineHeight={1}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
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
                  base: "xl",
                  sm: "2xl",
                  md: "3xl",
                  lg: "4xl",
                }}
                fontWeight={"semibold"}
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
                  <Text>art@artbrickco.com</Text>
                </motion.div>
              </Box>
            </Stack>
          </Box>
          <Box
            w="100%"
            h={"auto"}
            overflow="hidden"
            position="relative"
            alignContent={"center"}
          >
            <Box
              pos="absolute"
              top={`calc(-${scrollPosition}px + ${initialPosition}px)`}
              left={0}
              w="100%"
              transform="translateY(-50%)"
            >
              <Image
                aspectRatio={{ base: 16 / 40, md: 16 / 25 }}
                src={require("../Asset/Image/ContactBgImg.jpg")}
                alt="background"
                objectFit={"cover"}
              />
            </Box>
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
          <>
            {isMobile ? (
              <Stack
                p={8}
                divider={<StackDivider borderColor="gray.300" />}
                bgColor={"gray.200"}
              >
                <Stack py={{ base: 8, lg: 16 }} spacing={12}>
                  <Box position={"relative"}>
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        ease: "easeInOut",
                        duration: 2,
                        y: { duration: 3 },
                      }}
                    >
                      <Flex w="100px" gap={"5%"}>
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
                    </motion.div>
                    <Flex
                      w="100px"
                      gap={"5%"}
                      position={"absolute"}
                      top={0}
                      left={0}
                      opacity={0.2}
                    >
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
                  </Box>
                  <Stack
                    fontWeight={"bold"}
                    fontSize={"18px"}
                    sx={{
                      display: "block",
                      "@media (max-width: 600px)": {
                        display: "none",
                      },
                    }}
                  >
                    <ScrollFillText index={2}>
                      Artbrick Co., Ltd.
                    </ScrollFillText>
                    <Stack>
                      <ScrollFillText index={2}>
                        (주)아트브릭은 대한민국 전역을 커버하는 인테리어 디자인
                        전문기업으로,
                      </ScrollFillText>
                      <ScrollFillText index={2}>
                        서울과 부산 사무실을 운영하고 있습니다.
                      </ScrollFillText>
                    </Stack>
                  </Stack>
                  <Stack
                    fontWeight={"bold"}
                    fontSize={"14px"}
                    sx={{
                      display: "none",
                      "@media (max-width: 600px)": {
                        display: "block",
                      },
                    }}
                  >
                    <ScrollFillText index={2}>
                      Artbrick Co., Ltd.
                    </ScrollFillText>
                    <Stack pt={2}>
                      <ScrollFillText index={2}>
                        (주)아트브릭은 대한민국 전역을 커버하는
                      </ScrollFillText>
                      <ScrollFillText index={2}>
                        인테리어 디자인 전문기업으로,
                      </ScrollFillText>
                      <ScrollFillText index={2}>
                        서울과 부산 사무실을 운영하고 있습니다.
                      </ScrollFillText>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack spacing={12} py={{ base: 8, lg: 16 }}>
                  <Stack spacing={4} fontSize={"14px"}>
                    <Text>01</Text>
                    <Text>SEND US YOUR PROJECT</Text>
                  </Stack>
                  <Stack spacing={4} fontSize={"20px"} fontWeight={"semibold"}>
                    <ScrollFillText index={3}>LET'S TALK</ScrollFillText>
                    <Box>
                      <ScrollFillText index={4}>1551-2390</ScrollFillText>
                      <ScrollFillText index={4}>
                        art@artbrickco.com
                      </ScrollFillText>
                    </Box>
                  </Stack>
                </Stack>
                <Stack spacing={12} py={{ base: 8, lg: 16 }}>
                  <Stack spacing={4}>
                    <Text>02</Text>
                    <Text>WE WORK EVERYWHERE</Text>
                  </Stack>
                  <Stack spacing={4} fontWeight={"semibold"}>
                    <ScrollFillText index={5} fontSize={"18px"}>
                      OFFICES
                    </ScrollFillText>
                    <Stack
                      fontSize={"16px"}
                      sx={{
                        display: "block",
                        "@media (max-width: 550px)": {
                          display: "none",
                        },
                      }}
                    >
                      <Stack>
                        <ScrollFillText index={6}>
                          ​서울 사무실 | 서울특별시 강서구 양천로 551-24
                          한화비즈메트로 2차 306호
                        </ScrollFillText>
                        <ScrollFillText index={6}>
                          부산 사무실 | 부산광역시 수영구 광남로 213번길
                          43(민락동)
                        </ScrollFillText>
                      </Stack>
                    </Stack>
                    <Stack
                      fontSize={"14px"}
                      sx={{
                        display: "none",
                        "@media (max-width: 550px)": {
                          display: "block",
                        },
                      }}
                    >
                      <Stack>
                        <ScrollFillText index={7}>
                          ​서울 사무실 | 서울특별시 강서구 양천로
                        </ScrollFillText>
                        <ScrollFillText index={7}>
                          551-24 한화비즈메트로 2차 306호
                        </ScrollFillText>
                      </Stack>
                      <Stack pt={3}>
                        <ScrollFillText index={7}>
                          부산 사무실 | 부산광역시 수영구 광남로
                        </ScrollFillText>
                        <ScrollFillText index={7}>
                          213번길 43(민락동)
                        </ScrollFillText>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ) : (
              <TableContainer
                bgColor={"gray.200"}
                py={{ base: 16, md: 24, lg: 32 }}
                px={{ base: 8, md: 8, lg: 32 }}
              >
                <Table variant="simple" size={"md"}>
                  <Tbody>
                    <Tr>
                      <Td borderBottomColor={"gray.300"}></Td>
                      <Td borderBottomColor={"gray.300"}>
                        <Stack
                          py={{ base: 8, lg: 16 }}
                          spacing={{ base: 6, lg: 12 }}
                          direction={{ base: "column", lg: "row" }}
                        >
                          <Box
                            position={"relative"}
                            w={{ base: "100px", "2xl": "130px" }}
                          >
                            <motion.div
                              initial={{ opacity: 0, x: 0 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false }}
                              transition={{
                                ease: "easeInOut",
                                duration: 1,
                                y: { duration: 2 },
                              }}
                            >
                              <Flex gap={"5%"}>
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
                            </motion.div>
                            <Flex
                              gap={"5%"}
                              position={"absolute"}
                              top={0}
                              left={0}
                              opacity={0.2}
                            >
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
                          </Box>
                          <Stack
                            fontSize={{
                              base: "lg",
                              lg: "xl",
                              xl: "2xl",
                              "2xl": "3xl",
                            }}
                            fontWeight={"bold"}
                          >
                            <ScrollFillText index={2}>
                              Artbrick Co., Ltd.
                            </ScrollFillText>
                            <ScrollFillText
                              index={2}
                              style={{
                                // backgroundColor: "red",
                                lineHeight: 1.5,
                              }}
                            >
                              (주)아트브릭은 대한민국 전역을 커버하는 인테리어
                              디자인 전문기업으로,
                              <br />
                              서울과 부산 사무실을 운영하고 있습니다.
                            </ScrollFillText>
                          </Stack>
                        </Stack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottomColor={"gray.300"} alignContent={"start"}>
                        <Stack spacing={16} py={8}>
                          <Text
                            fontSize={{
                              base: "xs",
                              md: "sm",
                              lg: "md",
                              xl: "lg",
                            }}
                          >
                            01
                          </Text>
                          <ScrollFillText
                            index={3}
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
                          </ScrollFillText>
                        </Stack>
                      </Td>
                      <Td borderBottomColor={"gray.300"}>
                        <Stack py={8} spacing={16}>
                          <Text
                            fontSize={{
                              base: "xs",
                              md: "sm",
                              lg: "md",
                              xl: "lg",
                            }}
                          >
                            SEND US YOUR PROJECT
                          </Text>
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
                              <ScrollFillText index={3}>
                                1551-2390
                              </ScrollFillText>
                              <ScrollFillText index={3}>
                                art@artbrickco.com
                              </ScrollFillText>
                            </Stack>
                            <HStack
                              justifyContent={"space-between"}
                              alignContent={"flex-start"}
                              pb={12}
                              gap={4}
                              fontSize={{
                                base: "md",
                                lg: "lg",
                                xl: "xl",
                                "2xl": "2xl",
                              }}
                              fontWeight="bold"
                            >
                              <Box
                                _hover={{ color: "white" }}
                                onClick={() =>
                                  window.open(
                                    "https://blog.naver.com/artbricklab"
                                  )
                                }
                              >
                                <Text cursor={"pointer"}>BLOG</Text>
                              </Box>
                              {/* <Box
                                _hover={{ color: "white" }}
                                onClick={() =>
                                  window.open(
                                    "https://www.instagram.com/artbrick.official"
                                  )
                                }
                              >
                                <Text cursor={"pointer"}>INSTAGRAM</Text>
                              </Box> */}
                            </HStack>
                          </HStack>
                        </Stack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td borderBottomColor={"gray.300"} alignContent={"start"}>
                        <Stack spacing={16} py={8}>
                          <Text
                            fontSize={{
                              base: "xs",
                              md: "sm",
                              lg: "md",
                              xl: "lg",
                            }}
                          >
                            02
                          </Text>
                          <ScrollFillText
                            index={4}
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
                          </ScrollFillText>
                        </Stack>
                      </Td>
                      <Td borderBottomColor={"gray.300"}>
                        <Stack spacing={16} py={8}>
                          <Text
                            fontSize={{
                              base: "xs",
                              md: "sm",
                              lg: "md",
                              xl: "lg",
                            }}
                          >
                            WE WORK EVERYWHERE
                          </Text>
                          <Stack
                            fontSize={{
                              base: "md",
                              lg: "lg",
                              xl: "xl",
                              "2xl": "2xl",
                            }}
                            fontWeight={"semibold"}
                            spacing={4}
                            pb={12}
                          >
                            <ScrollFillText index={4} fontWeight={"bold"}>
                              KOREA
                            </ScrollFillText>
                            <Stack>
                              <ScrollFillText index={4}>
                                ​서울 사무실 | 서울특별시 강서구 양천로 551-24
                                한화비즈메트로 2차 306호
                              </ScrollFillText>
                              <ScrollFillText index={4}>
                                부산 사무실 | 부산광역시 수영구 광남로 213번길
                                43(민락동)
                              </ScrollFillText>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </>
          {/* <Footer onFooterText={props.onFooterText} /> */}
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
