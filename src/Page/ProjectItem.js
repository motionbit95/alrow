import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Footer } from "../Component/Footer";

const ProjectItem = ({ data }) => {
  // 안가져 와져서 포기
  console.log("프로젝트에서 가져온 아이템정보", data);
  return (
    <Flex direction={"column"} flex={1}>
      <Box w="full">
        <AspectRatio ratio={16 / 7}>
          <Image
            src={require("../Asset/Image/bannerImage1.png")}
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Stack p={16} spacing={16}>
        <Text fontSize={"5xl"}>MACAMOYE BREADBAR</Text>
        <SimpleGrid px={32} columns={1} spacing={16}>
          <AspectRatio ratio={16 / 9}>
            <Image src={require("../Asset/Image/DetailImage1.png")} />
          </AspectRatio>
          <AspectRatio ratio={16 / 9}>
            <Image src={require("../Asset/Image/DetailImage2.png")} />
          </AspectRatio>
          <AspectRatio ratio={16 / 9}>
            <Image src={require("../Asset/Image/DetailImage3.png")} />
          </AspectRatio>
        </SimpleGrid>
      </Stack>
      <Footer />
    </Flex>
  );
};

export default ProjectItem;
