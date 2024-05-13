import { Flex, Stack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
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
  );
};
