import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import ArlowLogo1 from "../Asset/Logo/ArlowLogo1.svg";

export const Footer = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      px={{ base: 8, md: 16 }}
      zIndex={111}
      py={8}
      bgColor={"#1f45fc"}
      justify={"space-between"}
      align={"center"}
    >
      <Box w={300}>
        <Image src={ArlowLogo1} boxSize={"full"} />
      </Box>
      <Stack justify={"end"} align={"end"} h={{ base: 6, md: 12 }}>
        <Text fontSize={{ base: "2xs", md: "xs" }} textAlign={"end"}>
          COPYRIGHT(C) {new Date().getFullYear()} ARTBRICK ALL RIGHTS RESERVED.
        </Text>
      </Stack>
    </Flex>
  );
};
