import {
  Box,
  Flex,
  Image,
  Stack,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Topbar } from "../Component/Topbar";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 초기 로딩 상태를 true로 설정

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // 2초 후에 로딩 상태 변경
      setOpen(true); // 메인 화면으로 전환
    }, 2000);
  }, []);

  const rotationVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -360],
      transition: {
        duration: 0.5,
        repeat: Infinity, // 무한 반복 설정
        repeatDelay: 0.8, // 반복 딜레이 설정
        ease: "linear",
      },
    },
  };

  return (
    <Flex direction={"column"} flex={1}>
      <AnimatePresence>
        {!open && (
          <motion.div
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}
          >
            <Box
              h="100vh"
              w="100vw"
              bgColor={"#1f45fc"}
              alignContent={"center"}
            >
              <Stack justify={"center"} align={"center"}>
                <Flex gap={4}>
                  <Box boxSize={{ base: "5rem", md: "10rem" }}>
                    <motion.img
                      src={require("../Asset/Image/left.png")}
                      style={{ originX: "center", originY: "center" }}
                      variants={rotationVariants} // 회전 애니메이션 설정
                      initial="initial"
                      animate="animate"
                    />
                  </Box>
                  <Box boxSize={{ base: "5rem", md: "10rem" }}>
                    <motion.img
                      src={require("../Asset/Image/right.png")}
                      style={{ originX: "center", originY: "center" }}
                      variants={rotationVariants} // 회전 애니메이션 설정
                      initial="initial"
                      animate="animate"
                    />
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <Box
        display={open ? "block" : "none"}
        h="100vh"
        w="100vw"
        bgColor={"gray.300"}
        position="relative"
      >
        {isMobile && (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src={require("../Asset/Video/mainMobile.mp4")}
              type="video/mp4"
            />
          </video>
        )}

        {!isMobile && (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src={require("../Asset/Video/mainPC.mp4")}
              type="video/mp4"
            />
          </video>
        )}

        <Topbar whitecolor />
      </Box>
    </Flex>
  );
};

export default Main;
