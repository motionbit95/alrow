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
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "AWESOME POOL VILLA",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "REDTONGUE BOUTIQUE KAKKO",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "KG ENGINEERING & ARCHITECTURE",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "SAMSUNG DIGITAL PLAZA HOMEPLUS BUCHEONSANGDONG",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    title: "SEONGBOK LIBRARY",
    image: "https://picsum.photos/200",
  },
  {
    id: 7,
    title: "블라 블라",
    image: "https://picsum.photos/200",
  },
  {
    id: 8,
    title: "블라 블라",
    image: "https://picsum.photos/200",
  },
];
