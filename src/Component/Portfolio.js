import {
  AddIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
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
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Wrap,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  addDocument,
  deleteDocument,
  searchDocument,
  updateDocument,
  uploadFile,
} from "../Firebase/firebase-func";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase/firebase-conf";

const Portfolio = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const [formdata, setFormdata] = useState();
  const [portfolioList, setPortfolioList] = useState([]);
  const [detailImages, setDetailImages] = useState([]);
  const [editType, setEditType] = useState("add");

  useEffect(() => {
    const getProjects = async () => {
      const q = query(collection(db, "Product"), orderBy("createdAt", "desc"));
      searchDocument(q).then(async (data) => {
        setPortfolioList(data);
      });
    };

    getProjects();

    let unsubscribe = onSnapshot(collection(db, "Product"), (snapshot) => {
      setPortfolioList(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 필수 정보가 입력되었을 때
    console.log("모든 정보가 입력되었습니다!!", formdata);
  };

  useEffect(() => {
    document.title = "프로젝트 관리";
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "main_image") {
      setFormdata({ ...formdata, [event.target.name]: event.target.files[0] });
    } else if (event.target.name === "detail_images") {
      if (formdata.detail_images) {
        setFormdata({
          ...formdata,
          detail_images: [...formdata.detail_images, event.target.files[0]],
        });
      } else {
        setFormdata({
          ...formdata,
          detail_images: [event.target.files[0]],
        });
      }
    } else {
      setFormdata({ ...formdata, [event.target.name]: event.target.value });
    }
  };

  // 이미지 선택 시 아래의 함수를 사용
  const imageRef = useRef();
  const detailImageRef = useRef();
  const [previewImage, setPreviewImage] = useState();
  const handleFileChange = (event, division) => {
    // 파일 정보를 product 정보에 저장합니다.
    handleChange(event);
    console.log(division);

    if (event.target.files[0]) {
      // 파일을 Blob으로 변환하여 미리보기 이미지 설정
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileAsBlob = new Blob([reader.result], {
          type: event.target.files[0].type,
        }); // Blob로 저장
        if (division === "main_image") {
          setPreviewImage(URL.createObjectURL(fileAsBlob)); // URL로 이미지 보여주기
        }
        if (division === "detail_images") {
          setDetailImages([...detailImages, URL.createObjectURL(fileAsBlob)]);
        }
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    } else {
      // 파일이 선택되지 않은 경우 미리보기 이미지 초기화
      // if (division === "main_image") {
      //   setPreviewImage(null);
      // }
      // if (division === "detail_images") {
      //   setDetailImages([]);
      // }
    }
  };

  function onDeleteImage() {
    // 파일 ui 에 담긴 정보도 지워줘야한다.
    imageRef.current.value = "";
    setPreviewImage(null);
  }

  function onEdit(item) {
    console.log(item);
    setEditType("edit");

    setFormdata({
      id: item.id,
      title: item.title,
    });

    setPreviewImage(
      process.env.REACT_APP_FIREBASE_STORAGE +
        item.image.split("?")[0].split("/").pop() +
        "?alt=media"
    );

    if (item.detail_images) {
      setDetailImages(
        item.detail_images?.map(
          (item) => process.env.REACT_APP_FIREBASE_STORAGE + item + "?alt=media"
        )
      );
    } else setDetailImages([]);

    onOpen();
  }

  function onDeleteDetailImage(index) {
    // 파일 ui 에 담긴 정보도 지워줘야한다.
    detailImageRef.current.value = "";
    setDetailImages(detailImages.filter((_, i) => i !== index));
  }

  function addProject() {
    if (!formdata) {
      alert("프로젝트 정보를 입력해주세요.");
      return;
    }
    if (formdata?.title === null) {
      alert("프로젝트 제목을 입력해주세요.");
      return;
    }
    if (formdata?.main_image === null || previewImage === null) {
      alert("프로젝트 메인 이미지는 필수입니다.");
      return;
    }

    console.log(formdata);

    // console.log({
    //   createdAt: new Date(),
    //   image: formdata?.main_image.name,
    //   title: formdata?.title,
    //   detail_images: formdata?.detail_images.map((element) => element.name),
    // });

    if (editType === "add") {
      // 이미지를 저장합니다.
      uploadFile("", formdata?.main_image);

      formdata?.detail_images?.forEach((element) => {
        // console.log(element);
        uploadFile("", element);
      });

      addDocument("Product", {
        createdAt: new Date(),
        image: formdata?.main_image.name,
        title: formdata?.title,
        detail_images: formdata?.detail_images.map((element) => element.name),
      }).then(() => {
        onClose();
        // window.location.reload();
      });
    } else if (editType === "edit") {
      console.log(formdata);

      if (previewImage.includes(process.env.REACT_APP_FIREBASE_STORAGE))
        console.log(previewImage);
      else uploadFile("", formdata?.main_image);

      formdata?.detail_images?.forEach(async (element) => {
        // console.log(element);
        await uploadFile("", element);
      });

      const existArray = detailImages?.filter((element) => {
        if (element.includes(process.env.REACT_APP_FIREBASE_STORAGE)) {
          return element;
        }
      });

      // console.log(existArray);

      const newArray = [];
      existArray?.forEach((element) => {
        // console.log(
        //   element
        //     .replace(process.env.REACT_APP_FIREBASE_STORAGE, "")
        //     .split("?")[0]
        // );
        newArray.push(
          element
            .replace(process.env.REACT_APP_FIREBASE_STORAGE, "")
            .split("?")[0]
        );
      });

      // console.log(formdata.detail_images);

      formdata?.detail_images?.map((element) => {
        newArray.push(element.name);
      });

      // console.log(newArray);

      console.log(
        formdata?.main_image ? formdata?.main_image.name : previewImage,
        formdata?.id
      );
      updateDocument("Product", formdata.id, {
        title: formdata?.title,
        image: formdata?.main_image
          ? formdata?.main_image.name
          : previewImage.split("?")[0].split("/").pop(),
        detail_images: newArray,
      }).then(() => {
        onClose();
        // window.location.reload();
      });
    }
  }

  function deleteProject(id) {
    if (window.confirm("프로젝트를 삭제하시겠습니까?")) {
      deleteDocument("Product", id).then(async () => {
        // window.location.reload();
      });
    }
  }

  return (
    <>
      <Container maxW={"5xl"} py={{ base: 5, md: 10 }}>
        <Stack>
          <HStack justify={"space-between"}>
            <Text fontWeight={"bold"} fontSize={{ base: "xl", md: "2xl" }}>
              프로젝트 관리
            </Text>
            <Button
              onClick={() => {
                onOpen();
                setEditType("add");
                setFormdata({});
              }}
            >
              프로젝트 등록
            </Button>
          </HStack>

          <SimpleGrid gap={{ base: 4, md: 8 }} columns={{ base: 1, md: 2 }}>
            {portfolioList.map((item) => (
              <GridItem>
                <Box>
                  <ButtonGroup position={"absolute"} mt={4} ml={4}>
                    <IconButton
                      onClick={() => onEdit(item)}
                      icon={<EditIcon />}
                    />
                    <IconButton
                      onClick={() => deleteProject(item.id)}
                      icon={<DeleteIcon />}
                    />
                  </ButtonGroup>
                  <Image
                    src={
                      item.image.includes(
                        process.env.REACT_APP_FIREBASE_STORAGE
                      )
                        ? ""
                        : process.env.REACT_APP_FIREBASE_STORAGE +
                          item.image +
                          "?alt=media"
                    }
                  />
                </Box>
                <Text>{item.title}</Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Stack>

        <Modal
          size={{ base: "full", md: "lg" }}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              프로젝트 {editType === "add" ? "등록" : "수정"}
              <Text fontSize={"sm"} color={"gray.500"}>
                등록을 위해 아래 정보를 입력해 주세요.
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                {/* <FormControl>
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
                  </FormControl> */}
                <FormControl isRequired>
                  <FormLabel>프로젝트 제목</FormLabel>
                  <Input
                    defaultValue={formdata?.title}
                    name="title"
                    type="text"
                    placeholder="프로젝트 제목을 입력해주세요."
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>메인 이미지</FormLabel>
                  <Stack direction={"row"}>
                    <InputGroup w={"100px"}>
                      <Input
                        type="file"
                        name="main_image"
                        onChange={(e) => handleFileChange(e, "main_image")}
                        display={"none"}
                        ref={imageRef}
                        accept="image/*"
                      />
                      <Stack
                        border={"1px dashed #d9d9d9"}
                        borderRadius={"10px"}
                        onClick={() => imageRef.current.click()}
                        w={"100px"}
                        h={"100px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        spacing={1}
                        pt={4}
                      >
                        <AddIcon fontSize={"lg"} onClick={onDeleteImage} />
                        <Text fontSize={"xs"}>
                          {previewImage ? "1" : "0"}/1
                        </Text>
                      </Stack>
                    </InputGroup>
                    <InputGroup w={"100px"}>
                      {previewImage && (
                        <>
                          <Image
                            onClick={() => imageRef.current.click()}
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
                    <Wrap>
                      <InputGroup w={"100px"}>
                        <Input
                          type="file"
                          name="detail_images"
                          onChange={(e) => handleFileChange(e, "detail_images")}
                          display={"none"}
                          ref={detailImageRef}
                          accept="image/*"
                        />
                        <Stack
                          border={"1px dashed #d9d9d9"}
                          borderRadius={"10px"}
                          onClick={() => detailImageRef.current.click()}
                          w={"100px"}
                          h={"100px"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={1}
                          pt={4}
                        >
                          <AddIcon fontSize={"lg"} onClick={onDeleteImage} />
                          <Text fontSize={"xs"}>{detailImages?.length}/10</Text>
                        </Stack>
                      </InputGroup>
                      {detailImages?.map((image, index) => (
                        <InputGroup w={"100px"} key={index}>
                          <Image
                            src={image}
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
                            onClick={() => onDeleteDetailImage(index)}
                          />
                        </InputGroup>
                      ))}
                    </Wrap>
                    {/* <InputGroup w={"100px"}>
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
                    </InputGroup> */}
                  </Stack>
                </FormControl>
                {/* <FormControl>
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
                  <FormLabel>프로젝트 설명</FormLabel>
                  <Textarea
                    h={100}
                    name="portfolio_Description"
                    typeof="text"
                    placeholder="프로젝트 목적/주요기능/주요메뉴 등을 상세히 입력해 주세요."
                    onChange={handleChange}
                    size={"md"}
                    resize={"none"}
                  />
                  <Text textAlign={"right"} color={"gray.500"} fontSize={"xs"}>
                    {value.length}/500
                  </Text>
                </FormControl> */}
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                {editType === "edit" ? "수정" : "등록"} 취소
              </Button>
              <Button colorScheme="blue" onClick={addProject}>
                {editType === "edit" ? "수정" : "등록"} 완료
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default Portfolio;
