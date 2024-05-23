import {
  AspectRatio,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Footer } from "../Component/Footer";
import { getDocument } from "../Firebase/firebase-func";
import { motion } from "framer-motion";
import { Topbar } from "../Component/Topbar";

const ProjectItem = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const pid = window.location.pathname.split("/").pop();
    getDocument("Product", pid).then((data) => {
      setData(data);
    });
    // getDocument("Product", data.id);
  }, []);

  const MotionBox = ({ children, y = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: y }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        y: { duration: 0.7 },
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <Flex direction={"column"} flex={1}>
      <Topbar whitecolor />
      <Box w="full">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <AspectRatio ratio={{ base: 1, md: 16 / 6 }}>
            <Image
              src={
                process.env.REACT_APP_FIREBASE_STORAGE +
                data.image +
                "?alt=media"
              }
              objectFit="cover"
            />
          </AspectRatio>
        </motion.div>
      </Box>
      <Stack p={{ base: 8, md: 16 }} spacing={{ base: 8, md: 16 }}>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            y: { duration: 2 },
          }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            justify={"space-between"}
            align={"center"}
          >
            <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight={"bold"}>
              {data.title}
            </Text>
            <Box maxW={{ base: "100%", lg: "350" }}>
              <Text
                fontSize={
                  data.portfolio_Description?.length > 150
                    ? "xs"
                    : { base: "sm", md: "md" }
                }
                textAlign={"end"}
                lineHeight={1.2}
              >
                {data.portfolio_Description}
              </Text>
            </Box>
          </Stack>
        </motion.div>
        <SimpleGrid px={{ base: 0, md: 32 }} columns={1} spacing={16}>
          {data.detail_images?.map((element, index) => (
            <MotionBox key={index} y={0}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`${process.env.REACT_APP_FIREBASE_STORAGE}${element}?alt=media`}
                  objectFit="cover"
                />
              </AspectRatio>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Stack>
      <Footer />
    </Flex>
  );
};

export default ProjectItem;
