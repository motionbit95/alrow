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
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import ArlowLogo1 from "../Asset/Logo/ArlowLogo1.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const Nav = useNavigate();
  const [hovered1, setHovered1] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOverBox, setIsMouseOverBox] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOverBox(true);
    document.body.style.cursor = "none"; // 마우스 숨기기
  };

  const handleMouseLeave = () => {
    setIsMouseOverBox(false);
    document.body.style.cursor = "auto"; // 마우스 보이기
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
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
        spacing={{ base: 12, md: 24 }}
        px={{ base: 8, md: 16 }}
      >
        <Stack spacing={{ base: 2, md: 4 }}>
          <Text
            fontSize={{
              base: "lg",
              md: "xl",
              lg: "2xl",
              "2xl": "3xl",
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
            fontWeight={"500"}
            spacing={0}
          >
            <Text>1551-2390</Text>
            <Text>artbrickco@nate.com</Text>
          </Stack>
        </Stack>
        {!isMobile && (
          <Stack spacing={4}>
            <Text
              fontSize={{
                base: "lg",
                md: "xl",
                lg: "2xl",
                "2xl": "3xl",
              }}
              fontWeight={"bold"}
            >
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
                Seoul Office Building | Room 306, Hanwha Biz Metro 2, 551-24
                Yangcheon-ro, Gangseo-gu, Seoul
              </Text>
              <Text>
                Busan office HQ | 43, Gwangnam-ro 213beon-gil, Suyeong-gu, Busan
                (Minrak-dong)
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
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
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
                base: "8xl",
                md: "100px",
                lg: "120px",
                xl: "160px",
                "2xl": "200px",
              }}
              fontWeight={"bold"}
              color={"white"}
              lineHeight={1.1}
            >
              Atypical Genuine Classical to Contemporary
            </Text>
          </motion.div>
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
            base: "xl",
            md: "3xl",
            lg: "4xl",
            xl: "5xl",
            "2xl": "6xl",
          }}
        >
          We do not prescribe our designs.
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
          align={"end"}
          justifyContent={"space-between"}
          w={{ base: "auto", md: "55%" }}
        >
          <Stack>
            <Box
              w={"100%"}
              cursor={"pointer"}
              position="relative"
              overflow={"hidden"}
              onClick={() => Nav("/")}
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
              _hover={{ color: "white", fontWeight: "bold" }}
              fontSize={{ base: "sm", md: "md" }}
              cursor={"pointer"}
            >
              <ArrowUpRightIcon />
              <Text>BACK TOP</Text>
            </Box>
          )}
        </Stack>
        <Stack
          w={{ base: "100%", md: "auto" }}
          fontSize={{ base: "sm", md: "md" }}
        >
          <HStack justifyContent={"space-between"} gap={4}>
            <Box
              _hover={{ color: "white", fontWeight: "bold" }}
              onClick={() => window.open("https://blog.naver.com/artbricklab")}
            >
              <Text cursor={"pointer"}>BLOG</Text>
            </Box>
            <Box
              _hover={{ color: "white", fontWeight: "bold" }}
              onClick={() =>
                window.open("https://www.instagram.com/artbrick.official")
              }
            >
              <Text cursor={"pointer"}>INSTAGRAM</Text>
            </Box>
            {isMobile && (
              <Box cursor={"pointer"}>
                <ArrowUpRightIcon />
              </Box>
            )}
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const ArrowUpRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
  >
    <path d="M17 7l-10 10" />
    <path d="M8 7l9 0 0 9" />
  </svg>
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
        <Text pt={"2px"}>
          Our
          <br />
          Work
        </Text>
      ) : (
        <Text pt={2}>
          CONTACT
          <br />
          US
        </Text>
      )}
    </motion.div>
  );
};
