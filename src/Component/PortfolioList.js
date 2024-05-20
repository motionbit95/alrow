import { DragHandleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const PortfolioList = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isMobile ? (
        <Stack
          position={"relative"}
          height={window.innerHeight}
          overflow={"auto"}
        >
          <Flex
            justify={"center"}
            align={"center"}
            w={"100%"}
            bgColor={"white"}
            p={4}
            position={"sticky"}
            top={0}
            zIndex={20}
            borderBottom={"1px solid #E5E5E5"}
          >
            <Text fontSize={"lg"} fontWeight={"bold"}>
              나의 프로젝트
            </Text>
          </Flex>
          <Stack>
            <Stack p={4} spacing={4}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Flex
                  h={100}
                  gap={2}
                  key={item}
                  onClick={onOpen}
                  cursor={"pointer"}
                >
                  <Box
                    w={100}
                    h={"full"}
                    borderRadius={"xl"}
                    bgColor={"gray"}
                  />
                  <Stack direction={"row"} justify={"space-between"} flex={1}>
                    <Stack>
                      <Text fontWeight={"bold"}>#CODE</Text>
                      <Text>프로젝트 제목</Text>
                    </Stack>
                    <Stack justify={"space-between"} align={"end"}>
                      <Icon as={DragHandleIcon} />
                      <Button variant={"ghost"}>더보기</Button>
                    </Stack>
                  </Stack>
                </Flex>
              ))}
            </Stack>
            <Flex
              id="button"
              align={"center"}
              justify={"center"}
              w={"100%"}
              bgColor={"white"}
              position={"sticky"}
              bottom={"0"}
              p={"20px"}
              borderTop={"1px solid #E5E5E5"}
            >
              <Button w={"100%"} bgColor={"gray.200"} type="submit">
                등록완료
              </Button>
            </Flex>
          </Stack>
        </Stack>
      ) : (
        <>
          <Button onClick={onOpen}>Test Button</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>프로젝트 등록</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>등록을 위해 아래 정보를 입력해 주세요.</Text>
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  등록 취소
                </Button>
                <Button colorScheme="blue">등록 완료</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default PortfolioList;
