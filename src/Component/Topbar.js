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
import { useNavigate } from "react-router-dom";
import ArlowLogo1 from "../Asset/Logo/ArlowLogo1.svg";

export const Topbar = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [whitecolor, setWhitecolor] = useState(props.whitecolor);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

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

  return (
    <Stack zIndex={999} position={"sticky"} w={"100%"} top={0}>
      <Flex
        w={"100%"}
        justify={"space-between"}
        p={{ base: 8, md: 16 }}
        color={whitecolor ? "white" : "black"}
      >
        <Box
          id="logoArea"
          zIndex={111}
          onClick={() => nav("/")}
          _hover={{ transform: "scale(1.1)" }}
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(-1)}
          // transform={open ? "scale(0)" : "scale(1)"}
          // transition={"all 0.1s ease-in-out"}
        >
          <Image
            // display={open ? "none" : "block"}
            id="logo"
            cursor={"pointer"}
            src={
              hoverIndex === 0
                ? require("../Asset/Image/logoWhite.png")
                : require("../Asset/Image/logo.png")
            }
            w={"32px"}
            h={"32px"}
          />
        </Box>
        <Square
          cursor={"pointer"}
          size={"1.5rem"}
          onClick={() => {
            setOpen(!open);
            setWhitecolor(!whitecolor);
          }}
          zIndex={111}
          position={"relative"}
          _hover={{ transform: "scale(1.1)", color: "white" }}
        >
          <Bar open={open} transform={open ? "rotate(45deg)" : "rotate(0)"} />
          {open && <Bar transform={"rotate(-45deg)"} />}
        </Square>
      </Flex>
      {isMobile ? (
        <motion.div
          style={{
            width: "100%",
            height: "50vh",
            padding: "30% 32px 16px 32px",
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
          <Stack spacing={0} fontSize={"2xl"} fontWeight={"semibold"}>
            <Text
              _hover={{ fontSize: "lg" }}
              cursor={"pointer"}
              onClick={() => nav("/project")}
            >
              PROJECT
            </Text>
            <Text
              _hover={{ fontSize: "lg" }}
              cursor={"pointer"}
              onClick={() => nav("/about")}
            >
              ABOUT
            </Text>
            <Text
              _hover={{ fontSize: "lg" }}
              cursor={"pointer"}
              onClick={() => nav("/contact")}
            >
              CONTACT
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Box w={"70%"}>
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
                  onClick={() => nav("/project")}
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
                onClick={() => nav("/project")}
                display="inline-block"
                position="relative"
                overflow={"hidden"}
                px={1}
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
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
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Text
                  textAlign="center"
                  fontWeight={hovered1 ? "bold" : "normal"}
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
                onClick={() => nav("/about")}
                display="inline-block"
                position="relative"
                overflow={"hidden"}
                px={1}
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
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
                  fontWeight={hovered2 ? "bold" : "normal"}
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
                onClick={() => nav("/contact")}
                display="inline-block"
                position="relative"
                overflow={"hidden"}
                px={1}
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
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
                  fontWeight={hovered3 ? "bold" : "normal"}
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
              spacing={16}
            >
              <Stack
                direction={{ base: "column", lg: "row" }}
                // spacing={{ base: 0, md: 4, lg: 36 }}
                spacing={"20px"}
              >
                <Stack justify={"space-between"} spacing={4} w={"200px"}>
                  <Text
                    fontSize={{
                      base: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "xl",
                      "2xl": "2xl",
                    }}
                    fontWeight={"bold"}
                  >
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
                    spacing={0}
                  >
                    <Text>1551-2390</Text>
                    <Text>artbrickco@nate.com</Text>
                  </Stack>
                </Stack>
                <Stack justify={"space-between"} spacing={4}>
                  <Text
                    fontSize={{
                      base: "md",
                      md: "lg",
                      lg: "xl",
                      xl: "2xl",
                      "2xl": "3xl",
                    }}
                    fontWeight={"bold"}
                  >
                    VISIT
                  </Text>
                  <Stack
                    fontSize={{
                      base: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "xl",
                      "2xl": "2xl",
                    }}
                    spacing={0}
                  >
                    <Text>
                      Seoul Office Building | Room 306, Hanwha Biz Metro 2,
                      551-24 Yangcheon-ro, Gangseo-gu, Seoul
                    </Text>
                    <Text>
                      Busan office HQ | 43, Gwangnam-ro 213beon-gil, Suyeong-gu,
                      Busan (Minrak-dong)
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
              <Stack align={"flex-start"}>
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
    w: "1.25rem",
    h: "0.125rem",
    rounded: "full",
    bg: "currentcolor",
    mx: "auto",
    insetStart: "0.125rem",
    transition: "all 0.12s",
  },
});
