import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Img,
  Stack,
  Text,
  keyframes,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import ArlowLogo1 from "../Asset/Logo/ArlowLogo1.svg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Footer = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [hovered1, setHovered1] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOverBox, setIsMouseOverBox] = useState(false);
  // const isMouseOverBox = useRef(false);

  const handleMouseEnter = () => {
    setIsMouseOverBox(true);
    // isMouseOverBox.current = true;
    document.body.style.cursor = "none"; // 마우스 숨기기
    props.onFooterText(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOverBox(false);
    // isMouseOverBox.current = false;
    document.body.style.cursor = "auto"; // 마우스 보이기
    props.onFooterText(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
  50.000001% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
  `;

  const scrollText2 = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
  `;

  const pageMove = () => {
    if (window.location.pathname === "/contact") {
      window.location.href = "/project";
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <Stack
      // px={{ base: 8, md: 16 }}
      py={8}
      zIndex={111}
      bgColor={"#1f45fc"}
      align={"start"}
      spacing={{ base: 8, md: 20 }}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={0}
        px={{ base: 8, md: 16 }}
      >
        <Stack spacing={{ base: 2, md: 4 }} w={"200px"}>
          <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={"bold"}>
            LET'S TALK
          </Text>
          <Stack
            fontSize={{ base: "sm", lg: "md" }}
            fontWeight={"500"}
            spacing={0}
          >
            <Text>1551-2390</Text>
            <Text>art@artbrickco.com</Text>
          </Stack>
        </Stack>
        {!isMobile && (
          <Stack spacing={4}>
            <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={"bold"}>
              VISIT
            </Text>
            <Stack
              fontSize={{ base: "sm", lg: "md" }}
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
        )}
      </Stack>
      <Stack>
        <Box
          overflow="hidden"
          width={{ base: "95vw", md: "97vw", lg: "98vw", xl: "99vw" }}
          position="relative"
          whiteSpace="nowrap"
          onClick={pageMove}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Text
            as="div"
            display="inline-block"
            fontSize={{
              base: "100px",
              lg: "140px",
              xl: "160px",
              "2xl": "200px",
            }}
            fontWeight="bold"
            color="white"
            lineHeight={1.1}
            animation={`${scrollText} 30s linear infinite`}
          >
            ATYPICAL, GENUINE, CLASSICAL TO
            CONTEMPORARY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* ATYPICAL GENUEOUS CLASSICAL TO CONTEMPORARY */}
          </Text>
          <Text
            as="div"
            display="inline-block"
            fontSize={{
              base: "100px",
              lg: "140px",
              xl: "160px",
              "2xl": "200px",
            }}
            fontWeight="bold"
            color="white"
            lineHeight={1.1}
            animation={`${scrollText2} 30s linear infinite`}
          >
            ATYPICAL, GENUINE, CLASSICAL TO
            CONTEMPORARY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* ATYPICAL GENUEOUS CLASSICAL TO CONTEMPORARY */}
          </Text>
          {/* <motion.div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            <Text
              whiteSpace={"nowrap"}
              fontSize={{
                base: "100px",
                lg: "140px",
                xl: "160px",
                "2xl": "200px",
              }}
              fontWeight={"bold"}
              color={"white"}
              lineHeight={1.1}
            >
              ATYPICAL GENUEOUS CLASSICAL TO CONTEMPORARY
            </Text>
          </motion.div> */}
          <Box
            position="fixed"
            width="100%"
            height="100%"
            pointerEvents="none"
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          >
            {isMouseOverBox && (
              <Box
                position="fixed"
                width="100%"
                height="100%"
                pointerEvents="none"
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
              >
                <MovingCircle
                  mouseX={mousePosition.x}
                  mouseY={mousePosition.y}
                />
              </Box>
            )}
          </Box>
        </Box>
        <Text
          px={{ base: 8, md: 16 }}
          fontSize={{
            base: "lg",
            lg: "xl",
            xl: "2xl",
            "2xl": "3xl",
          }}
        >
          We don’t define our designs.
        </Text>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        w={"100%"}
        align={{ base: "start", md: "end" }}
        px={{ base: 8, md: 16 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "start", md: "end" }}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Stack w={{ base: "100%", md: "291px" }} align={"start"}>
            <Box
              w={"100%"}
              cursor={"pointer"}
              position="relative"
              overflow={"hidden"}
              onClick={() => (window.location.href = "/")}
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              _after={{
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "black",
                transform: hovered1 ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: hovered1 ? "bottom left" : "bottom right",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <Image src={ArlowLogo1} boxSize={"100%"} />
            </Box>
            <Text
              fontSize={{ base: "2xs", md: "xs" }}
              textAlign={"end"}
              whiteSpace={"nowrap"}
            >
              COPYRIGHT(C) ARTBRICK ALL RIGHTS RESERVED.
            </Text>
          </Stack>
          {!isMobile && (
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              _hover={{ color: "white", transform: "scale(1.1)" }}
              fontSize={{
                base: "md",
                lg: "lg",
                xl: "xl",
                "2xl": "2xl",
              }}
              fontWeight={"bold"}
              cursor={"pointer"}
              onMouseEnter={() => props.onHoverEffect(true)}
              onMouseLeave={() => props.onHoverEffect(false)}
            >
              <ArrowUpRightIcon />
              <Text>BACK TOP</Text>
            </Box>
          )}
          <Stack
            w={{ base: "100%", md: "291px" }}
            align={{ base: "auto", md: "end" }}
            fontSize={{
              base: "md",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            fontWeight={"bold"}
          >
            <HStack justifyContent={"space-between"} gap={4}>
              <Box
                onClick={() =>
                  window.open("https://blog.naver.com/artbricklab")
                }
                onMouseEnter={() => props.onHoverEffect(true)}
                onMouseLeave={() => props.onHoverEffect(false)}
              >
                <Text
                  cursor={"pointer"}
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                >
                  BLOG
                </Text>
              </Box>
              {/* <Box
                _hover={{ transform: "scale(1.1)", color: "white" }}
                onClick={() =>
                  window.open("https://www.instagram.com/artbrick.official")
                }
                onMouseEnter={() => props.onHoverEffect(true)}
                onMouseLeave={() => props.onHoverEffect(false)}
              >
                <Text cursor={"pointer"}>INSTAGRAM</Text>
              </Box> */}
              {isMobile && (
                <Box
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                  cursor={"pointer"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <ArrowUpRightIcon />
                </Box>
              )}
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const ArrowUpRightIcon = (props) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.hovered ? "white" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onMouseEnter={(e) => {
      e.target.setAttribute("stroke", "white");
    }}
    onMouseLeave={(e) => {
      e.target.setAttribute("stroke", "currentColor");
    }}
    {...props}
    sx={{
      width: { base: "16px", md: "24px", lg: "32px" },
      height: { base: "16px", md: "24px", lg: "32px" },
    }}
  >
    <path d="M17 7l-10 10" />
    <path d="M8 7l9 0 0 9" />
  </Box>
);

export default ArrowUpRightIcon;

export const MovingCircle = ({ mouseX, mouseY }) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        left: mouseX,
        top: mouseY,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        backgroundColor: "#47E2E2",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
        cursor: "none",
      }}
    >
      {window.location.pathname.includes("/contact") ? (
        <Text fontWeight={"bold"} pt={"2px"}>
          OUR
          <br />
          WORK
        </Text>
      ) : (
        <Text fontWeight={"bold"} pt={2}>
          CONTACT
          <br />
          US
        </Text>
      )}
    </motion.div>
  );
};
