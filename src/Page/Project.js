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
import { Topbar } from "../Component/Topbar";
import { Footer } from "../Component/Footer";
import { searchDocument } from "../Firebase/firebase-func";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase/firebase-conf";
import { motion } from "framer-motion";

const Project = (props) => {
  const [portfolioList, setPortfolioList] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const q = query(collection(db, "Product"), orderBy("createdAt", "desc"));
      searchDocument(q).then(async (data) => {
        setPortfolioList(data);
      });
    };

    getProjects();
  }, []);

  return (
    <Flex
      direction={"column"}
      flex={1}
      bgColor={"gray.100"}
      position={"relative"}
    >
      <>
        {/* whitecolor는 배경 기준으로 작성 -> whitecolor 가 true이면 배경이 흰색(밝은색) 이므로 로고 및 아이콘이 black  */}
      </>
      {/* <Topbar whitecolor={true} onHoverEffect={props.onHoverEffect} /> */}
      <Stack
        spacing={{ base: 16, lg: 32 }}
        px={{ base: 8, md: 16 }}
        py={16}
        mt={8}
      >
        <Text
          fontSize={{ base: "6xl", md: "8xl", lg: "180px", xl: "240px" }}
          fontWeight={"bold"}
          lineHeight={1}
          whiteSpace={"nowrap"}
          zIndex={1}
          ml={-1}
          sx={{
            "@media (max-width: 371px)": {
              fontSize: "40px",
            },
          }}
        >
          PROJECTS
        </Text>
        <Box
          position={"absolute"}
          top={0}
          right={0}
          w={"100%"}
          overflow={"hidden"}
        >
          <Box
            bgColor={"#1f45fc"}
            mt={{ base: "112px", md: "124px", lg: "146px", xl: "160px" }}
            ml={{ base: "160px", md: "270px", lg: "470px", xl: "600px" }}
            w={"100%"}
            h={{ base: "56px", md: "80px", lg: "150px", xl: "200px" }}
            sx={{
              "@media (max-width: 371px)": {
                height: "30px",
                ml: "120px",
              },
            }}
          />
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap={32}
          rowGap={{ base: 8, md: 16 }}
        >
          {portfolioList.map((item) => (
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
                w={"100%"}
                key={item.id}
                spacing={3}
                cursor={"pointer"}
                onClick={() => (window.location.href = `/item/${item.id}`)}
                justify={"space-between"}
              >
                <AspectRatio ratio={16 / 10} style={{ overflow: "hidden" }}>
                  <Image
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "all 0.2s ease-in-out",
                    }}
                    objectFit={"cover"}
                    src={
                      process.env.REACT_APP_FIREBASE_STORAGE +
                      item.image +
                      "?alt=media"
                    }
                  />
                </AspectRatio>
                <Text>{item.title}</Text>
              </Stack>
            </motion.div>
          ))}
        </SimpleGrid>
      </Stack>
      {/* <Footer onFooterText={props.onFooterText} /> */}
    </Flex>
  );
};

export default Project;
