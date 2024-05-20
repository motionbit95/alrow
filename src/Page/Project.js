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
      <Box px={16} py={16} mt={8}>
        <Text fontSize={{ base: "6xl", md: "200px" }} fontWeight={"bold"}>
          PROJECTS
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap={32}
          rowGap={{ base: 8, md: 16 }}
        >
          {portfolioList.map((item) => (
            <Stack
              key={item.id}
              spacing={3}
              onClick={() => Nav(`/project/${item.id}`)}
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  w={"full"}
                  src={
                    process.env.REACT_APP_FIREBASE_STORAGE +
                    item.image +
                    "?alt=media"
                  }
                />
              </AspectRatio>
              <Text>{item.title}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Project;
