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
import React, { useEffect, useState } from "react";
import { Footer } from "../Component/Footer";
import { getDocument } from "../Firebase/firebase-func";

const ProjectItem = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const pid = window.location.pathname.split("/").pop();
    getDocument("Product", pid).then((data) => {
      setData(data);
    });
    // getDocument("Product", data.id);
  }, []);
  return (
    <Flex direction={"column"} flex={1}>
      <Box w="full">
        <AspectRatio ratio={16 / 7}>
          <Image
            src={
              process.env.REACT_APP_FIREBASE_STORAGE + data.image + "?alt=media"
            }
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Stack p={16} spacing={16}>
        <Text fontSize={"5xl"}>{data.title}</Text>
        <SimpleGrid px={32} columns={1} spacing={16}>
          {data.detail_images?.map((element) => (
            <AspectRatio ratio={16 / 9}>
              <Image
                src={
                  process.env.REACT_APP_FIREBASE_STORAGE +
                  element +
                  "?alt=media"
                }
              />
            </AspectRatio>
          ))}
        </SimpleGrid>
      </Stack>
      <Footer />
    </Flex>
  );
};

export default ProjectItem;
