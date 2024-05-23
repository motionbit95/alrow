import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Topbar } from "../Component/Topbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Component/Footer";
import { searchDocument } from "../Firebase/firebase-func";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase/firebase-conf";
import { motion } from "framer-motion";

const Project = () => {
  const Nav = useNavigate();

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
    <Flex direction={"column"} flex={1} bgColor={"gray.100"}>
      <Topbar />
      <Stack spacing={4} px={{ base: 8, md: 16 }} py={16} mt={8}>
        <Text
          fontSize={{ base: "6xl", md: "8xl", lg: "200px" }}
          fontWeight={"bold"}
        >
          PROJECTS
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap={32}
          rowGap={{ base: 16, md: 24 }}
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
                onClick={() => Nav(`/project/${item.id}`)}
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
      <Footer />
    </Flex>
  );
};

export default Project;
