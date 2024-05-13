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

const Project = () => {
  const Nav = useNavigate();
  return (
    <Flex direction={"column"} flex={1} bgColor={"gray.100"}>
      <Topbar />
      <Box px={16} py={16} mt={8}>
        <Text fontSize={"200px"} fontWeight={"bold"}>
          PROJECTS
        </Text>
        <SimpleGrid columns={2} columnGap={32} rowGap={16}>
          {images.map((item) => (
            <Stack spacing={3} onClick={() => Nav(`/project/${item.id}`)}>
              <AspectRatio ratio={16 / 9}>
                <Image w={"full"} src={item.image} />
              </AspectRatio>
              <Text>{item.title}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>
      <Flex
        px={16}
        py={8}
        bgColor={"#1f45fc"}
        justify={"space-between"}
        align={"center"}
      >
        <Text fontSize={"6xl"}>LOGO</Text>
        <Stack justify={"end"} align={"end"}>
          <Text fontSize={"xs"}>
            COPYRIGHT(C) {new Date().getFullYear()} DAWON CORP ALL RIGHTS
            RESERVED.
          </Text>
        </Stack>
      </Flex>
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
