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
import React from "react";
import { Topbar } from "../Component/Topbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Component/Footer";

const Project = () => {
  const Nav = useNavigate();
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
          {images.map((item) => (
            <Stack
              key={item.id}
              spacing={3}
              onClick={() => Nav(`/project/${item.id}`)}
            >
              <AspectRatio ratio={16 / 9}>
                <Image w={"full"} src={item.image} />
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

const images = [
  {
    id: 1,
    title: "MACAMOYE BREADBAR",
    image: require("../Asset/Image/bannerImage1.png"),
  },
  {
    id: 2,
    title: "AWESOME POOL VILLA",
    image: require("../Asset/Image/bannerImage2.png"),
  },
  {
    id: 3,
    title: "REDTONGUE BOUTIQUE KAKKO",
    image: require("../Asset/Image/bannerImage3.png"),
  },
  {
    id: 4,
    title: "KG ENGINEERING & ARCHITECTURE",
    image: require("../Asset/Image/bannerImage4.png"),
  },
  {
    id: 5,
    title: "SAMSUNG DIGITAL PLAZA HOMEPLUS BUCHEONSANGDONG",
    image: require("../Asset/Image/bannerImage5.png"),
  },
  {
    id: 6,
    title: "SEONGBOK LIBRARY",
    image: require("../Asset/Image/bannerImage6.png"),
  },
  {
    id: 7,
    title: "AWESOME POOL VILLA",
    image: require("../Asset/Image/bannerImage7.png"),
  },
  {
    id: 8,
    title: "AWESOME POOL VILLA",
    image: require("../Asset/Image/bannerImage8.png"),
  },
];
