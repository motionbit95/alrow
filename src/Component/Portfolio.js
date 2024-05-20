import { AddIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const Portfolio = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const [formdata, setFormdata] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 필수 정보가 입력되었을 때
    console.log("모든 정보가 입력되었습니다!!", formdata);
  };

  const handleChange = (event) => {
    if (event.target.name === "main_image") {
      setFormdata({ ...formdata, [event.target.name]: event.target.files[0] });
    } else if (event.target.name === "detail_images") {
      setFormdata({ ...formdata, [event.target.name]: [event.target.files] });
    } else {
      setFormdata({ ...formdata, [event.target.name]: event.target.value });
    }
  };

  // 이미지 선택 시 아래의 함수를 사용
  const imageRef = useRef();
  const [previewImage, setPreviewImage] = useState();
  const handleFileChange = (event) => {
    // 파일 정보를 product 정보에 저장합니다.
    handleChange(event);

    if (event.target.files[0]) {
      // 파일을 Blob으로 변환하여 미리보기 이미지 설정
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileAsBlob = new Blob([reader.result], {
          type: event.target.files[0].type,
        }); // Blob로 저장
        setPreviewImage(URL.createObjectURL(fileAsBlob)); // URL로 이미지 보여주기
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    } else {
      // 파일이 선택되지 않은 경우 미리보기 이미지 초기화
      setPreviewImage(null);
    }
  };

  function onImageUpload() {
    if (imageRef) {
      imageRef.current.click();
    }
  }

  function onDeleteImage() {
    // 파일 ui 에 담긴 정보도 지워줘야한다.
    imageRef.current.value = "";
    setPreviewImage(null);
  }

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
              포트폴리오 등록
            </Text>
          </Flex>
          <form onSubmit={handleSubmit}>
            <Stack>
              <Box px={4}>
                <Text fontSize={"2xl"} fontWeight={"extrabold"}>
                  등록을 위해 아래 정보를 입력해 주세요.
                </Text>
              </Box>
              <Stack bgColor={"gray.200"} spacing={3} mt={6}>
                <Stack bgColor={"white"} p={4} spacing={6}>
                  <Text fontWeight={"bold"}>필수 정보</Text>
                  <FormControl>
                    <FormLabel>카테고리 선택</FormLabel>
                    <Select
                      placeholder="카테고리 선택"
                      name="category"
                      onChange={handleChange}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>포트폴리오 제목</FormLabel>
                    <Input
                      name="portfolio_Title"
                      type="text"
                      placeholder="포트폴리오 제목을 입력해주세요."
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>메인 이미지</FormLabel>
                    <Stack direction={"row"}>
                      <InputGroup w={"100px"}>
                        <Input
                          type="file"
                          name="main_image"
                          onChange={handleFileChange}
                          display={"none"}
                          ref={imageRef}
                          accept="image/*"
                        />
                        <Stack
                          border={"1px dashed #d9d9d9"}
                          borderRadius={"10px"}
                          onClick={onImageUpload}
                          w={"100px"}
                          h={"100px"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={1}
                          pt={4}
                        >
                          <AddIcon fontSize={"lg"} onClick={onDeleteImage} />
                          <Text fontSize={"xs"}>0/1</Text>
                        </Stack>
                      </InputGroup>
                      <InputGroup w={"100px"}>
                        {previewImage && (
                          <>
                            <Image
                              onClick={onImageUpload}
                              src={previewImage}
                              w={"100px"}
                              h={"100px"}
                              borderRadius={"xl"}
                            />
                            <IconButton
                              size={"xs"}
                              borderRadius={"full"}
                              colorScheme="blackAlpha"
                              position={"absolute"}
                              top={-2}
                              right={-2}
                              icon={<CloseIcon />}
                              onClick={onDeleteImage}
                            />
                          </>
                        )}
                      </InputGroup>
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <FormLabel>상세 이미지</FormLabel>
                    <Stack direction={"row"}>
                      <InputGroup w={"100px"}>
                        <Input
                          type="file"
                          name="detail_images"
                          onChange={handleFileChange}
                          display={"none"}
                          ref={imageRef}
                          accept="image/*"
                        />
                        <Stack
                          border={"1px dashed #d9d9d9"}
                          borderRadius={"10px"}
                          onClick={onImageUpload}
                          w={"100px"}
                          h={"100px"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={1}
                          pt={4}
                        >
                          <AddIcon fontSize={"lg"} onClick={onDeleteImage} />
                          <Text fontSize={"xs"}>/10</Text>
                        </Stack>
                      </InputGroup>
                      <InputGroup w={"100px"}>
                        {previewImage && (
                          <>
                            <Image
                              src={previewImage}
                              w={"100px"}
                              h={"100px"}
                              borderRadius={"xl"}
                            />
                            <IconButton
                              size={"xs"}
                              borderRadius={"full"}
                              colorScheme="blackAlpha"
                              position={"absolute"}
                              top={-2}
                              right={-2}
                              icon={<CloseIcon />}
                              onClick={onDeleteImage}
                            />
                          </>
                        )}
                      </InputGroup>
                    </Stack>
                  </FormControl>
                </Stack>
                <Stack bgColor={"white"} p={4} spacing={6}>
                  <Stack>
                    <Text fontWeight={"bold"}>추가 정보</Text>
                    <Text fontSize={"sm"} color={"rgba(0,0,0,0.5)"}>
                      상세히 입력하시면 유사한 프로젝트를 찾는 고객에게 쉽게
                      노출되며, 프로젝트에 대한 신뢰도를 높일 수 있습니다.
                    </Text>
                  </Stack>
                  <FormControl>
                    <FormLabel>참여기간</FormLabel>
                    <InputGroup alignItems={"center"} gap={2}>
                      <Input
                        type="date"
                        name="start_date"
                        onChange={handleChange}
                      />
                      <MinusIcon fontSize={"sm"} />
                      <Input
                        type="date"
                        name="end_date"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>고객사</FormLabel>
                    <Input
                      placeholder="고객사 명을 입력해주세요."
                      name="customer_name"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>포트폴리오 설명</FormLabel>
                    <Textarea
                      h={100}
                      name="portfolio_Description"
                      typeof="text"
                      placeholder="프로젝트 목적/주요기능/주요메뉴 등을 상세히 입력해 주세요."
                      onChange={handleChange}
                      size={"md"}
                      resize={"none"}
                    />
                    <Text
                      textAlign={"right"}
                      color={"gray.500"}
                      fontSize={"xs"}
                    >
                      {value.length}/500
                    </Text>
                  </FormControl>
                </Stack>
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
          </form>
        </Stack>
      ) : (
        <>
          <Button onClick={onOpen}>Test Button</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>포트폴리오 등록</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>등록을 위해 아래 정보를 입력해 주세요.</Text>
                <Stack>
                  <FormControl>
                    <FormLabel>카테고리 선택</FormLabel>
                    <Select
                      placeholder="카테고리 선택"
                      name="category"
                      onChange={handleChange}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>포트폴리오 제목</FormLabel>
                    <Input
                      name="portfolio_Title"
                      type="text"
                      placeholder="포트폴리오 제목을 입력해주세요."
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>메인 이미지</FormLabel>
                    <Stack direction={"row"}>
                      <InputGroup w={"100px"}>
                        <Input
                          type="file"
                          name="main_image"
                          onChange={handleFileChange}
                          display={"none"}
                          ref={imageRef}
                          accept="image/*"
                        />
                        <Stack
                          border={"1px dashed #d9d9d9"}
                          borderRadius={"10px"}
                          onClick={onImageUpload}
                          w={"100px"}
                          h={"100px"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={1}
                          pt={4}
                        >
                          <AddIcon fontSize={"lg"} onClick={onDeleteImage} />
                          <Text fontSize={"xs"}>0/1</Text>
                        </Stack>
                      </InputGroup>
                      <InputGroup w={"100px"}>
                        {previewImage && (
                          <>
                            <Image
                              onClick={onImageUpload}
                              src={previewImage}
                              w={"100px"}
                              h={"100px"}
                              borderRadius={"xl"}
                            />
                            <IconButton
                              size={"xs"}
                              borderRadius={"full"}
                              colorScheme="blackAlpha"
                              position={"absolute"}
                              top={-2}
                              right={-2}
                              icon={<CloseIcon />}
                              onClick={onDeleteImage}
                            />
                          </>
                        )}
                      </InputGroup>
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <FormLabel>상세 이미지</FormLabel>
                    <Stack direction={"row"}>
                      <InputGroup w={"100px"}>
                        <Input
                          type="file"
                          name="detail_images"
                          onChange={handleFileChange}
                          display={"none"}
                          ref={imageRef}
                          accept="image/*"
                        />
                        <Stack
                          border={"1px dashed #d9d9d9"}
                          borderRadius={"10px"}
                          onClick={onImageUpload}
                          w={"100px"}
                          h={"100px"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={1}
                          pt={4}
                        >
                          <AddIcon fontSize={"lg"} onClick={onDeleteImage} />
                          <Text fontSize={"xs"}>/10</Text>
                        </Stack>
                      </InputGroup>
                      <InputGroup w={"100px"}>
                        {previewImage && (
                          <>
                            <Image
                              src={previewImage}
                              w={"100px"}
                              h={"100px"}
                              borderRadius={"xl"}
                            />
                            <IconButton
                              size={"xs"}
                              borderRadius={"full"}
                              colorScheme="blackAlpha"
                              position={"absolute"}
                              top={-2}
                              right={-2}
                              icon={<CloseIcon />}
                              onClick={onDeleteImage}
                            />
                          </>
                        )}
                      </InputGroup>
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <FormLabel>참여기간</FormLabel>
                    <InputGroup alignItems={"center"} gap={2}>
                      <Input
                        type="date"
                        name="start_date"
                        onChange={handleChange}
                      />
                      <MinusIcon fontSize={"sm"} />
                      <Input
                        type="date"
                        name="end_date"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>고객사</FormLabel>
                    <Input
                      placeholder="고객사 명을 입력해주세요."
                      name="customer_name"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>포트폴리오 설명</FormLabel>
                    <Textarea
                      h={100}
                      name="portfolio_Description"
                      typeof="text"
                      placeholder="프로젝트 목적/주요기능/주요메뉴 등을 상세히 입력해 주세요."
                      onChange={handleChange}
                      size={"md"}
                      resize={"none"}
                    />
                    <Text
                      textAlign={"right"}
                      color={"gray.500"}
                      fontSize={"xs"}
                    >
                      {value.length}/500
                    </Text>
                  </FormControl>
                </Stack>
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

export default Portfolio;
