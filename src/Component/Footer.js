import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import ArlowLogo1 from "../Asset/Logo/ArlowLogo1.svg";

export const Footer = () => {
  return (
    <Flex
      px={16}
      py={8}
      bgColor={"#1f45fc"}
      justify={"space-between"}
      align={"center"}
    >
      <Box w={300}>
        <Image src={ArlowLogo1} boxSize={"full"} />
      </Box>

      <Stack justify={"end"} align={"end"}>
        <Text fontSize={"xs"}>
          COPYRIGHT(C) {new Date().getFullYear()} DAWON CORP ALL RIGHTS
          RESERVED.
        </Text>
      </Stack>
    </Flex>
  );
};
