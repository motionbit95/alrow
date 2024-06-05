import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Text,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

// const theme = extendTheme({
//   styles: {
//     global: {
//       "html, body": {
//         backgroundColor: "#1f45fc",
//         color: "white",
//       },
//     },
//   },
// });

const ScrollFillText = ({ children, index, ...props }) => {
  const controls = useAnimation();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight * 0.75;

      if (!document.getElementById(`scrollText${index}`)) return;

      const elementTop = document
        .getElementById(`scrollText${index}`)
        .getBoundingClientRect().top;

      if (elementTop < scrollPosition && !triggered) {
        controls.start({ width: "100%" });
        setTriggered(true);
      } else if (elementTop >= scrollPosition && triggered) {
        controls.start({ width: 0 });
        setTriggered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, triggered]);

  return (
    <Box
      position="relative"
      overflow="hidden"
      whiteSpace={"nowrap"}
      id={`scrollText${index}`}
    >
      <Text
        position="relative"
        zIndex={2}
        {...props}
        w={"100%"}
        opacity={0.1}
        lineHeight={1.0}
      >
        {children}
      </Text>
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          // backgroundColor: "rgba(255, 255, 255)",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          overflow: "hidden",
          textAlign: props.textAlign ? props.textAlign : "left",
        }}
      >
        <Text
          position="absolute"
          zIndex={2}
          {...props}
          w={"100%"}
          opacity={1}
          lineHeight={1.0}
        >
          {children}
        </Text>
      </motion.div>
    </Box>
  );
};

export default ScrollFillText;
