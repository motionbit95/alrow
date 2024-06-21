import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Square,
  Stack,
  Text,
  chakra,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ArlowLogo1 from "../Asset/Logo/ArlowLogo1.svg";

import ArlowLogoBlack from "../Asset/Logo/ArlowLogoblack.svg";
import ArlowLogoWhite from "../Asset/Logo/ArlowLogowhite.svg";

export const Topbar = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  useEffect(() => {
    console.log(props.whitecolor);
  }, [props.whitecolor]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const MotionBox = motion(Box);

  const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  51% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

  useEffect(() => {
    if (hoverIndex > 0) {
      return;
    }
  }, [hoverIndex]);

  const imageUrl = "https://via.placeholder.com/600x400"; // 예제 이미지 URL
  const area = {
    x: 100, // 추출할 영역의 시작 x 좌표
    y: 100, // 추출할 영역의 시작 y 좌표
    width: 200, // 추출할 영역의 너비
    height: 200, // 추출할 영역의 높이
  };

  return (
    <Stack zIndex={999} position={"fixed"} w={"100%"} top={0}>
      <Flex
        w={"100%"}
        justify={"space-between"}
        py={{ base: 8, md: 16 }}
        px={{ base: 8, md: 16, xl: 32 }}
        align={"center"}
      >
        <Box
          id="logoArea"
          zIndex={111}
          onClick={() => (window.location.href = "/")}
          _hover={{ transform: "scale(1.1)" }}
          onMouseEnter={() => {
            setHoverIndex(0);
            props.onHoverEffect(true);
          }}
          onMouseLeave={() => {
            setHoverIndex(-1);
            props.onHoverEffect(false);
          }}
          cursor={"pointer"}
        >
          <Image
            id="logo"
            src={
              hoverIndex === 0 || (!open && !props.whitecolor)
                ? ArlowLogoWhite
                : ArlowLogoBlack
            }
            w={{ base: "24px", md: "32px", lg: "40px", xl: "48px" }}
            h={{ base: "24px", md: "32px", lg: "40px", xl: "48px" }}
            pointerEvents={"none"}
          />
        </Box>
        <Square
          cursor={"pointer"}
          w={{ base: "24px", md: "32px", lg: "40px", xl: "48px" }}
          h={{ base: "24px", md: "28px", lg: "34px", xl: "40px" }}
          onClick={() => {
            setOpen(!open);
            // setWhitecolor(!whitecolor);
          }}
          onMouseEnter={() => props.onHoverEffect(true)}
          onMouseLeave={() => props.onHoverEffect(false)}
          zIndex={111}
          position={"relative"}
          color={
            (open && !props.whitecolor) || props.whitecolor ? "black" : "white"
          }
          _hover={{ transform: "scale(1.1)", color: "white" }}
        >
          <Bar
            top={1}
            w={{ base: "18px", md: "24px", lg: "30px", xl: "36px" }}
            h={{ base: "2px", md: "3px", lg: "4px", xl: "5px" }}
            style={{ opacity: open ? 0 : 1, transition: "opacity 0.01s ease" }}
          />
          <Bar
            w={
              open
                ? { base: "18px", md: "24px", lg: "30px", xl: "36px" }
                : { base: "14px", md: "18px", lg: "22px", xl: "26px" }
            }
            // sx={{
            //   "@media (max-width: 768px)": {
            //     width: open ? "1.25rem" : "1rem",
            //   },
            // }}
            h={{ base: "2px", md: "3px", lg: "4px", xl: "5px" }}
            open={open}
            transform={open ? "rotate(45deg)" : "rotate(0)"}
          />
          <Bar
            bottom={1}
            w={{ base: "18px", md: "24px", lg: "30px", xl: "36px" }}
            h={{ base: "2px", md: "3px", lg: "4px", xl: "5px" }}
            style={{ opacity: open ? 0 : 1, transition: "opacity 0.01s ease" }}
          />
          {open && (
            <Bar
              w={{ base: "18px", md: "24px", lg: "30px", xl: "36px" }}
              h={{ base: "2px", md: "3px", lg: "4px", xl: "5px" }}
              transform={"rotate(-45deg)"}
            />
          )}
        </Square>
      </Flex>
      {isMobile ? (
        <motion.div
          style={{
            width: "100%",
            height: "50vh",
            backgroundColor: "#1f45fc",
            position: "absolute",
            top: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          animate={open ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.2 }}
        >
          <Box h={"15vh"} />
          <Stack
            spacing={2}
            fontSize={"22px"}
            fontWeight={"semibold"}
            px={8}
            py={4}
            lineHeight={"1"}
          >
            <Text
              _hover={{ color: "white", transform: "scale(1.1)" }}
              cursor={"pointer"}
              onClick={() => (window.location.href = "/project")}
            >
              PROJECT
            </Text>
            <Text
              _hover={{ color: "white", transform: "scale(1.1)" }}
              cursor={"pointer"}
              onClick={() => (window.location.href = "/about")}
            >
              ABOUT
            </Text>
            <Text
              _hover={{ color: "white", transform: "scale(1.1)" }}
              cursor={"pointer"}
              onClick={() => (window.location.href = "/contact")}
            >
              CONTACT
            </Text>
          </Stack>
          <Stack align={"flex-start"} px={8} py={4}>
            <Box w={"220px"}>
              <Image src={ArlowLogo1} boxSize={"100%"} />
            </Box>
            <Text
              fontSize={{ base: "10px", md: "xs" }}
              fontWeight={"semibold"}
              whiteSpace={"nowrap"}
            >
              COPYRIGHT(C) ARTBRICK ALL RIGHTS RESERVED.
            </Text>
          </Stack>
        </motion.div>
      ) : (
        <motion.div
          style={{
            width: "100%",
            padding: "64px 64px 16px 64px",
            backgroundColor: "#1f45fc",
            position: "absolute",
            top: 0,
          }}
          animate={open ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.2 }}
        >
          <Stack
            w={"100%"}
            align={"start"}
            justify={"space-between"}
            spacing={36}
          >
            <HStack
              pl={"210px"}
              w={"100%"}
              align={"center"}
              justify={"left"}
              zIndex={111}
              h={30}
              spacing={16}
              fontSize={{ base: "md", lg: "lg" }}
              fontWeight={"bold"}
            >
              {/* <Box
                w={"100px"}
                _hover={{
                  // transform: "scale(1.1) ",
                  // animation: ["flipAnimation 1.0s"],
                  color: "white",
                }}
              >
                <Text
                  textAlign={"center"}
                  cursor={"pointer"}
                  onClick={() => window.location.href =("/project")}
                >
                  PROJECT
                </Text>
                {hoverIndex === 1 && (
                  <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  >
                    <Box w={"100%"} h={"1px"} bgColor={"white"}></Box>
                  </motion.div>
                )}
              </Box> */}
              <Box
                onClick={() => (window.location.href = "/project")}
                display="inline-block"
                position="relative"
                overflow={"hidden"}
                onMouseEnter={() => {
                  setHovered1(true);
                  props.onHoverEffect(true);
                }}
                onMouseLeave={() => {
                  setHovered1(false);
                  props.onHoverEffect(false);
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "white",
                  transform: hovered1 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: hovered1 ? "bottom left" : "bottom right",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <Text
                  textAlign="center"
                  // fontWeight={hovered1 ? "bold" : "normal"}
                  color={hovered1 ? "white" : "initial"}
                  className={hovered1 ? "hovered" : ""}
                  cursor="pointer"
                  css={{
                    "&.hovered": {
                      animation: `${hoverAnimation} 0.4s ease-in-out forwards`,
                    },
                  }}
                >
                  PROJECT
                </Text>
              </Box>
              <Box
                onClick={() => (window.location.href = "/about")}
                display="inline-block"
                position="relative"
                overflow={"hidden"}
                onMouseEnter={() => {
                  setHovered2(true);
                  props.onHoverEffect(true);
                }}
                onMouseLeave={() => {
                  setHovered2(false);
                  props.onHoverEffect(false);
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "white",
                  transform: hovered2 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: hovered2 ? "bottom left" : "bottom right",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Text
                  textAlign="center"
                  // scale={hovered2 ? "bold" : "normal"}
                  color={hovered2 ? "white" : "initial"}
                  className={hovered2 ? "hovered" : ""}
                  cursor="pointer"
                  css={{
                    "&.hovered": {
                      animation: `${hoverAnimation} 0.4s ease-in-out forwards`,
                    },
                  }}
                >
                  ABOUT
                </Text>
              </Box>
              <Box
                onClick={() => (window.location.href = "/contact")}
                display="inline-block"
                position="relative"
                overflow={"hidden"}
                onMouseEnter={() => {
                  setHovered3(true);
                  props.onHoverEffect(true);
                }}
                onMouseLeave={() => {
                  setHovered3(false);
                  props.onHoverEffect(false);
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "white",
                  transform: hovered3 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: hovered3 ? "bottom left" : "bottom right",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Text
                  textAlign="center"
                  // fontWeight={hovered3 ? "bold" : "normal"}
                  color={hovered3 ? "white" : "initial"}
                  className={hovered3 ? "hovered" : ""}
                  cursor="pointer"
                  css={{
                    "&.hovered": {
                      animation: `${hoverAnimation} 0.4s ease-in-out forwards`,
                    },
                  }}
                >
                  CONTACT
                </Text>
              </Box>
            </HStack>
            <Stack
              w={"100%"}
              direction={{ base: "column", lg: "row" }}
              align={{ base: "start", lg: "end" }}
              justify={"space-between"}
              spacing={{ base: 6, lg: 0 }}
            >
              <Stack
                direction={{ base: "column", lg: "row" }}
                // spacing={{ base: 0, md: 4, lg: 36 }}
                spacing={0}
              >
                <Stack
                  justify={"space-between"}
                  spacing={{ base: 1, lg: 4 }}
                  w={"210px"}
                >
                  <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={"bold"}>
                    LET'S TALK
                  </Text>
                  <Stack
                    fontSize={{
                      base: "xs",
                      md: "sm",
                      lg: "md",
                      xl: "lg",
                      "2xl": "xl",
                    }}
                    fontWeight={"500"}
                    spacing={0}
                  >
                    <Text>1551-2390</Text>
                    <Text>art@artbrickco.com</Text>
                  </Stack>
                </Stack>
                <Stack justify={"space-between"} spacing={{ base: 1, lg: 4 }}>
                  <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={"bold"}>
                    VISIT
                  </Text>
                  <Stack
                    fontSize={{
                      base: "xs",
                      md: "sm",
                      lg: "md",
                      xl: "lg",
                      "2xl": "xl",
                    }}
                    fontWeight={"500"}
                    spacing={0}
                  >
                    <Text>
                      ​Seoul Office | Room 306, Hanwha Biz Metro 2, 551-24
                      Yangcheon-ro, Gangseo-gu, Seoul
                    </Text>
                    <Text>
                      Busan Office | 3rd Floor, 14, Oncheoncheon-ro 253beon-gil,
                      Dongnae-gu, Busan, Republic of Korea
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <Box w={{ base: "50%", lg: "70%" }}>
                  <Image src={ArlowLogo1} boxSize={"100%"} />
                </Box>
                <Text
                  fontSize={{ base: "13px", md: "xs" }}
                  fontWeight={"semibold"}
                  whiteSpace={"nowrap"}
                >
                  COPYRIGHT(C) ARTBRICK ALL RIGHTS RESERVED.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </motion.div>
      )}
    </Stack>
  );
};

const Bar = chakra("span", {
  baseStyle: {
    display: "block",
    position: "absolute",
    rounded: "full",
    bg: "currentcolor",
    mx: "auto",
    insetStart: "0.125rem",
    transition: "all 0.12s",
  },
});
