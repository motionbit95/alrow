import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProjectItem = ({ ...props }) => {
  console.log(props);
  return (
    <Flex direction={"column"} flex={1}>
      <Box w="full">
        <AspectRatio ratio={16 / 7}>
          <Image src={props.image} />
        </AspectRatio>
      </Box>
      <Stack px={16} py={8} spacing={20}>
        <Text>{props.title}</Text>
        <Text>타이틀에 들어가는 아이템 이미지</Text>
      </Stack>
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

export default ProjectItem;
