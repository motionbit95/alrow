import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Topbar } from "../Component/Topbar";
import { Footer } from "../Component/Footer";
import { motion } from "framer-motion";
import ScrollFillText from "../Component/ScrollRevealText";
import ScrollFillLine from "../Component/ScrollRevealLine";
import ScrollAnimation from "../Component/ScrollRevealLine";

const About = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const MotionBox = ({ children, y = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: y }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        y: { duration: 2 },
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <Flex direction={"column"} flex={1} bgColor={"gray.100"}>
      {/* <Topbar whitecolor={true} onHoverEffect={props.onHoverEffect} /> */}
      <Box h={"100vh"} w={"100%"} position={"relative"}>
        <Box
          h={"100vh"}
          px={{ base: 8, md: 16 }}
          py={{ base: 8, md: 16, lg: 32 }}
          align={"center"}
          pt={{ base: 0, xl: 48 }}
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          {isMobile ? (
            <>
              <Box zIndex={111} w={"full"} h={"50%"} position={"relative"}>
                <Stack spacing={0} w={"full"} position={"relative"} top={"48%"}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeInOut",
                      duration: 1,
                      y: { duration: 1 },
                    }}
                  >
                    <Box textAlign={"end"}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={{
                          base: "100px",
                        }}
                        lineHeight={1}
                      >
                        ART
                      </Text>
                    </Box>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeInOut",
                      duration: 1,
                      y: { duration: 1 },
                    }}
                  >
                    <Box
                      gap={4}
                      display={"flex"}
                      flexDirection={"column"}
                      textAlign={"end"}
                      fontWeight={"semibold"}
                    >
                      <Text fontSize={"11px"} pr={1}>
                        규정할수 없는, 규정 되어지지 않음을 인지하고 탐미한다
                      </Text>
                      <Text fontSize={"xs"} fontWeight={"600"}>
                        ARTBRICK은 예술과 기술의 원활한 통합을 내포하며,
                        <br />
                        인테리어/건축의 영역에서 미학과 기능 사이의 균형을
                        <br />
                        찾기 위한 우리의 은유적 약속과 헌신을 상징합니다.
                        <br />
                        우리의 미션은 고객의 기능적인 요구를 충족시키는 것 뿐 만
                        <br />
                        아니라 예술적공간의 표현을 조력하는 것입니다.
                      </Text>
                    </Box>
                  </motion.div>
                </Stack>
              </Box>
              <Box zIndex={111} w={"full"} h={"50%"} position={"relative"}>
                <Stack w={"full"} position={"relative"} top={"25%"} spacing={0}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      y: { duration: 1.5 },
                    }}
                  >
                    <Box textAlign={"start"}>
                      <Text
                        fontWeight={"bold"}
                        fontSize={{
                          base: "100px",
                        }}
                        lineHeight={1}
                      >
                        BRICK
                      </Text>
                    </Box>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      y: { duration: 1.5 },
                    }}
                  >
                    <Box
                      gap={4}
                      display={"flex"}
                      flexDirection={"column"}
                      textAlign={"start"}
                      pl={1}
                      fontWeight={"semibold"}
                    >
                      <Text fontSize={"11px"}>
                        인간이 구현하는 건축의 태초적이고, 인공적인 기초 단위를
                        추종한다
                      </Text>
                      <Text fontSize={"xs"} fontWeight={"600"}>
                        Atypical | Genuine | Classical to Contemporary
                        <br />
                        우리는, 우리의 디자인을 규정하지 않습니다. 전문적이고
                        <br />
                        명쾌한 방식으로 진정성에 집중하고,
                        <br />
                        다양한 현재를 제안하고, 클래식을 존중합니다.
                      </Text>
                    </Box>
                  </motion.div>
                </Stack>
              </Box>
            </>
          ) : (
            <>
              <Grid
                display={{ base: "none", lg: "grid" }}
                zIndex={111}
                h={"full"}
                gap={{ base: 4, md: 16 }}
                templateColumns={"1fr 1fr"}
                templateRows={"1fr 1fr"}
              >
                <GridItem w={"full"} h={"full"}>
                  <Stack
                    alignItems={{ base: "flex-start", lg: "flex-end" }}
                    justifyContent={{ base: "flex-end", lg: "flex-start" }}
                    pb={{ base: 10, lg: 16, xl: 28, "2xl": 40 }}
                    h={"full"}
                    flexDirection={{ base: "column", lg: "row" }}
                  >
                    <Text
                      textAlign={"start"}
                      fontWeight={"bold"}
                      fontSize={{
                        base: "160px",
                        lg: "180px",
                        xl: "200px",
                        "2xl": "240px",
                      }}
                      lineHeight={0.9}
                      whiteSpace={"nowrap"}
                    >
                      ART
                    </Text>
                    <Text
                      ml={{ base: 0, lg: -6 }}
                      mb={{ base: 0, lg: 3 }}
                      fontSize={{
                        base: "xs",
                        lg: "sm",
                        "2xl": "md",
                      }}
                      whiteSpace={"nowrap"}
                      fontWeight={"semibold"}
                    >
                      규정할수 없는, 규정 되어지지 않음을 인지하고 탐미한다
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem w={"full"} h={"full"}>
                  <Stack
                    alignItems={"flex-start"}
                    justifyContent={"center"}
                    h={"full"}
                    minW={"660px"}
                    mt={{ md: "104px", lg: 4, xl: "-6", "2xl": "2" }}
                  >
                    <Text
                      fontSize={{
                        base: "lg",
                        lg: "2xl",
                        "2xl": "4xl",
                      }}
                      textAlign={"start"}
                      fontWeight={"600"}
                    >
                      ARTBRICK은 예술과 기술의 원활한{" "}
                      <strong style={{ fontWeight: "900" }}>
                        해체와 통합의 재구성
                      </strong>
                      을 내포하며, 인테리어/건축의 영역에서 미학과 기능 사이의
                      균형을 찾기 위한 우리의 은유적 약속과 헌신을 상징합니다.
                      우리의 미션은 고객의 기능적인 요구를 충족시키는 것 뿐만
                      아니라 예술적 공간의 표현을 조력하는 것입니다.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem w={"full"} h={"full"}>
                  <Stack
                    alignItems={"flex-start"}
                    justifyContent={"flex-start"}
                    h={"full"}
                  >
                    <Text
                      fontWeight={"bold"}
                      fontSize={{
                        base: "160px",
                        lg: "180px",
                        xl: "200px",
                        "2xl": "240px",
                      }}
                      lineHeight={0.9}
                      whiteSpace={"nowrap"}
                      pt={{ base: 10, "2xl": 20 }}
                    >
                      BRICK
                    </Text>
                    <Text
                      fontSize={{
                        base: "xs",
                        lg: "sm",
                        "2xl": "md",
                      }}
                      ml={{ base: "0.5vw", lg: 2 }}
                      whiteSpace={"nowrap"}
                      fontWeight={"semibold"}
                    >
                      인간이 구현하는 건축의 태초적이고, 인공적인 기초 단위를
                      추종한다
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem w={"full"} h={"full"} justifyContent={"flex-end"}>
                  <Stack
                    alignItems={"flex-start"}
                    justifyContent={"flex-end"}
                    h={"full"}
                    minW={"660px"}
                  >
                    <Text
                      whiteSpace={"pre-line"}
                      fontSize={{
                        base: "lg",
                        lg: "2xl",
                        "2xl": "4xl",
                      }}
                      fontWeight={"600"}
                      textAlign={"start"}
                    >
                      <strong
                        style={{ fontWeight: "900" }}
                      >{`Atypical | Genuine | Classical to Contemporary\n`}</strong>
                      {`우리는, 우리의 디자인을 규정하지 않습니다.\n`}
                      {`전문적이고 명쾌한 방식으로 진정성에 집중하고,\n 다양한 현재를 제안하고, `}
                      {`클래식을 존중합니다.`}
                    </Text>
                  </Stack>
                </GridItem>
              </Grid>
              <Stack display={{ md: "flex", lg: "none" }}>
                <Box
                  zIndex={111}
                  w={"full"}
                  position={"relative"}
                  h={"50%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeInOut",
                      duration: 1,
                      y: { duration: 1 },
                    }}
                  >
                    <Stack h={"full"}>
                      <Box w={"full"} position={"relative"}>
                        <Box
                          display={"flex"}
                          alignSelf={"flex-start"}
                          flexDirection={"column"}
                          pt={{ base: 64, lg: 0 }}
                        >
                          <Text
                            textAlign={"start"}
                            fontWeight={"bold"}
                            fontSize={"160px"}
                            lineHeight={0.9}
                            whiteSpace={"nowrap"}
                          >
                            ART
                          </Text>
                          <Box display={"flex"} alignSelf={"flex-start"}>
                            <Text
                              fontSize={"xs"}
                              whiteSpace={"nowrap"}
                              fontWeight={"semibold"}
                            >
                              규정할수 없는, 규정 되어지지 않음을 인지하고
                              탐미한다
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        alignSelf={"flex-end"}
                        fontSize={"xl"}
                        textAlign={"start"}
                        maxW={"70%"}
                        flexDirection={"column"}
                        fontWeight={"600"}
                      >
                        <Text>
                          ARTBRICK은 예술과 기술의 원활한 통합을 내포하며,
                          인테리어/건축의 영역에서 미학과 기능 사이의 균형을
                          찾기 위한 우리의 은유적 약속과 헌신을 상징합니다.
                          우리의 미션은 고객의 기능적인 요구를 충족시키는 것 뿐
                          만아니라 예술적공간의 표현을 조력하는 것입니다.
                        </Text>
                      </Box>
                    </Stack>
                  </motion.div>
                </Box>
                <Box zIndex={111} w={"full"} position={"relative"} h={"50%"}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeInOut",
                      duration: 1,
                      delay: 0.5,
                      y: { duration: 1.5 },
                    }}
                  >
                    <Stack>
                      <Box
                        w={"full"}
                        h={"40%"}
                        position={"relative"}
                        display={"flex"}
                        flexDirection={"column"}
                        pt={24}
                      >
                        <Box display={"flex"} alignSelf={"flex-start"}>
                          <Text
                            fontWeight={"bold"}
                            fontSize={"160px"}
                            lineHeight={0.9}
                            whiteSpace={"nowrap"}
                          >
                            BRICK
                          </Text>
                        </Box>
                        <Box display={"flex"} alignSelf={"flex-start"}>
                          <Text
                            fontSize={"xs"}
                            ml={"0.5vw"}
                            whiteSpace={"nowrap"}
                            fontWeight={"semibold"}
                          >
                            인간이 구현하는 건축의 태초적이고, 인공적인 기초
                            단위를 추종한다
                          </Text>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        alignSelf={"flex-end"}
                        fontSize={"xl"}
                        textAlign={"start"}
                        maxW={"70%"}
                        flexDirection={"column"}
                        fontWeight={"600"}
                      >
                        <Text>
                          {`Atypical | Genuine | Classical to Contemporary`}
                        </Text>
                        <Text>
                          {`우리는, 우리의 디자인을 규정하지 않습니다. `}
                          {`전문적이고 명쾌한 방식으로 진정성에 집중하고, 다양한 현재를 제안하고, `}
                          {`클래식을 존중합니다.`}
                        </Text>
                      </Box>
                    </Stack>
                  </motion.div>
                </Box>
              </Stack>
            </>
          )}
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1,
            y: { duration: 1 },
          }}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            w={"full"}
            h={"36%"}
            position={"absolute"}
            top={"32%"}
            bgColor={"#1f45fc"}
          />
        </motion.div>
      </Box>
      <Box w={"100%"}>
        <Stack p={{ base: 8, md: 16 }}>
          <Stack>
            <MotionBox>
              <ScrollFillText
                index={0}
                fontWeight={"bold"}
                lineHeight={1.0}
                fontSize={{
                  base: "5xl",
                  md: "8xl",
                  lg: "160px",
                }}
              >
                HISTORY
              </ScrollFillText>
            </MotionBox>
            <Stack
              fontSize={{ base: "sm", md: "lg" }}
              pt={{ base: 4, md: 8, lg: 12 }}
            >
              <MotionBox>
                <Text>
                  2007.02 | 주식회사 아트브릭 전신인 D.B.P 개인사업 출발
                </Text>
              </MotionBox>
              <MotionBox>
                <Text>2015.07 | 주식회사 D&T 법인사업 출범</Text>
              </MotionBox>

              <MotionBox>
                <Text>2019.01 | 주식회사 아트브릭 법인사업 출범</Text>
              </MotionBox>

              <MotionBox>
                <Text>2019.01 | 주식회사 아트브릭 서울사무소 설립</Text>
              </MotionBox>

              <MotionBox>
                <Text>2019.03 | 주식회사 아트브릭 실내건축공사업 취득</Text>
              </MotionBox>

              <MotionBox>
                <Text>2019.04 | 주식회사 아트브릭 디자인전문회사 취득</Text>
              </MotionBox>
            </Stack>
          </Stack>
        </Stack>
        <Stack p={{ base: 8, md: 16 }}>
          <MotionBox>
            <Stack position={"relative"}>
              <Box
                h={{ base: 24, md: 180, lg: 320 }}
                w={"full"}
                display={"flex"}
                alignItems={"end"}
                justifyContent={"end"}
                pb={{ base: 2, md: 2, lg: 8 }}
                pr={{ base: 200, md: 400, lg: 660 }}
              >
                <Box w={"70%"} h={"50%"} bgColor={"#1f45fc"} />
              </Box>
              <Stack
                align={"end"}
                textAlign={"end"}
                fontWeight={"bold"}
                lineHeight={0.9}
                fontSize={{
                  base: "5xl",
                  md: "8xl",
                  lg: "160px",
                }}
                zIndex={1}
                spacing={0}
                position={"absolute"}
                right={0}
              >
                <ScrollFillText index={1} textAlign={"end"}>
                  FEATURE
                </ScrollFillText>
                <ScrollFillText index={1} textAlign={"end"}>
                  PROJECTS
                </ScrollFillText>
              </Stack>
            </Stack>
          </MotionBox>
          <Stack
            id="historyArea"
            py={{ base: 8, md: 16, lg: 32 }}
            px={{ base: 0, md: 16 }}
            fontSize={{ base: "xs", md: "md", lg: "lg" }}
          >
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              columnGap={{ base: 16, lg: 32 }}
              rowGap={{ base: 8, lg: 16 }}
            >
              {years.map((year) => (
                <Stack key={year}>
                  <MotionBox>
                    <Text
                      fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                      fontWeight={"bold"}
                    >
                      {year}
                    </Text>
                  </MotionBox>

                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeInOut",
                      duration: 2,
                      x: { duration: 3 },
                    }}
                  >
                    <Box
                      w={"100%"}
                      borderBottom={"1px"}
                      borderColor={"gray.300"}
                    />
                  </motion.div>

                  <Stack pt={{ base: 2, lg: 4 }}>
                    {projects[year].map((project) => (
                      <MotionBox>
                        <Text key={project}>- {project}</Text>
                      </MotionBox>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Box>
      {/* <Footer onFooterText={props.onFooterText} /> */}
    </Flex>
  );
};

export default About;

const years = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2010 ~ 2011",
  "2007 ~ 2009",
];

const projects = {
  2024: [
    "BBQ 잠실롯데월드 매직아일랜드점 인테리어",
    "뚜레쥬르 부산남산점 인테리어",
    "엔젤리너스 커피 해운대백병원점 전면 개보수 공사",
    "RIS 자율과제-AI 국립한국해양대학교 메이커스페이스실 건축공사",
    "RIS 스마트항만물류사업단 사무공간 구축 및 환경개선 공사",
    "해운대형 공공 키즈카페 조성 공사",
    "봉천동 마카모예 브레디바 인테리어",
    "강릉 유천동 주택 인테리어",
    "태종대중학교 교문앞조성 및 기타공사",
    "경남DX사업단 거제DX센터 실습실 환경개선 공사 및 건축 공사",
    "경남DX사업단 동원DX센터 교육환경개선 건축 공사",
  ],
  2023: [
    "더현대 서울 꼬네 팝업스토어 조성 공사",
    "깔라마리 리모델링",
    "광안어썸 인테리어",
    "뚜레쥬르 울산매곡점 인테리어",
    "뚜레쥬르 창원대동백화점점 인테리어",
    "마카모 잠실 롯데백화점 팝업스토어 조성 공사",
    "공릉동 마카모예 브레드바 인테리어",
    "안동의료원장례식장점 인테리어",
    "매곡 호림 인테리어",
    "태종대중학교 바닥보수 및 기타 공사",
    "해동고등학교 체력단련실 개선 건축 공사",
    "사상구 화가마을 미술학원 인테리어",
    "칙바이직 서면점 인테리어",
    "칙바이칙 가야대역점 인테리어",
    "HiVE 지역특화분야 학과 운영을 위한 스터디룸 구축 공사 2차",
    "HiVE 지역특화분야 학과 운영을 위한 강의실 개선 공사 1차",
    "덕포시 경로당 설치를 위한 주택 리모델링",
    "동성초등학교 행정사무실 환경개선 공사",
    "사상구 다함께돌봄센터 5호점 리모델링 공사",
    "다함께돌봄센터 금빛아이꿈마당 인테리어",
    "우동 다함께돌봄센터 조성 공사",
  ],
  2022: [
    "죠스푸드 복합직영논현점 0프로젝트 조성 공사",
    "거제대학교 혁신지원사업 자율학습공간 구축 공사",
    "동성초등학교 미술실 내부 환경개선 공사",
    "랑랑키즈카페 놀이체험실 조성 공사",
    "상문건설 부산역 사무실 인테리어",
    "사상구 다함께돌봄센터 리모델링",
    "신원레저산업 사무실 인테리어",
    "국립수산과학원 청정실 조성 공사",
    "에그드랍 범일동타워점 인테리어",
    "에그드랍 창원유니시티점 인테리어",
    "연제구 다함께돌봄센터 아이사랑뜰굼터 인테리어",
    "광교 오로라 발레학원 인테리어",
    "벡스코 코리아빌드 2022/ KCMT 홍보관 조성 공사",
    "해동고등학교 환경구축사업 및 사회중점학교 건축 공사",
    "EMB 영어유치원 인테리어",
  ],
  2021: [
    "교동 롯데캐슬아파트 인테리어",
    "수지 성복동 어린이청소년도서관 리모델링",
    "대진전자통신고등학교 카페조성사업 공사",
    "대광고등학교 혁신 및 개선 인테리어",
    "좌동 다함께돌봄센터 조성 공사",
    "인제대학교 대학교육혁신사업 원격강의실 및 실험실습실 건축 공사",
    "이태원 예거 매장 인테리어",
    "거학초등학교 1학년 5반 교실개선사업 실내 건축 공사",
    "물금 현진에버빌아파트 102, 105동 인테리어",
    "수영구 육아종합지원센터 놀이체험실 조성 공사",
    "강서구 다함께돌봄센터 3호점 리모델링",
    "트롤비즈 서면점 인테리어",
    "국립수산과학원 독성평가실 리모델링",
    "송도중학교 학교공간혁신사업 조성 공사",
    "해운대 브래드네요 베이커리 인테리어",
    "대광고등학교 지능형 과학실 기반시설 구축 공사",
    "삼성디지털프라자 홈플러스 부천상동점 인테리어",
    "삼성 B2B_네오정보 주식회사 사무실 인테리어",
  ],
  2020: [
    "동탄 튼튼한방병원 인테리어",
    "동국대학교 의료원 푸드코트 인테리어",
    "논개시장 면 특화거리 조성 공사",
    "관광기업지원센터 로비 기념품 전시장 인테리어",
    "선박 MARUKO호_2차 인테리어",
    "대진전자통신고등학교 실습실 리모델링",
    "오븐베이커리 앤 인테리어",
    "거학초등학교 1학년 교실개선 공사",
  ],
  2019: [
    "영도 라발스호텔 사우나 인테리어",
    "대진동 주택&게스트하우스 리모델링",
    "용산 이마트 마켓로커스 인테리어",
    "청담파라곤2 1단지 리모델링",
    "유신건축종합건축사사무소 인테리어",
    "명동 롯데백화점 하늘하늘 인테리어",
    "왕의길 프로젝트 조성 공사",
    "명동 롯데백화점 하늘하늘 인테리어",
    "초량동 사우나 인테리어 설계",
    "장림동 지원시티파크 사우나 인테리어 설계",
    "스마트W사우나, 휘트니스 대티점 인테리어",
    "레이어스 호텔 사우나 인테리어 설계 감리",
    "초량 YMCA 수영장 인테리어",
    "교원위즈 더퍼스트캠퍼스 아카데미 해운대점 인테리어",
    "교원위즈 더퍼스트캠퍼스 아카데미 평택점 인테리어",
  ],
  2018: [
    "덕천동 주택 리모델링",
    "동해기정떡 중앙시장점 인테리어",
    "동해 망상주택 인테리어",
    "홍대 츄 플래그쉽스토어 인테리어",
    "강릉 커피축제 전시 부스 조성 공사",
    "홍대 -5kg Jean 인테리어",
    "창원 퀸즈오피스 인테리어",
    "명동 롯데백화점 하늘하늘 인테리어",
    "동해기정떡 본점 인테리어",
    "스마트W사우나, 휘트니스 시청점 인테리어",
    "스마트W사우나, 휘트니스 장림점 인테리어",
    "진주시장 청년몰 조성 공사",
  ],
  2017: [
    "주례 공린미방 중식당 인테리어",
    "남포동 육객 고기집 인테리어",
    "온천장 베이커스 비앙 인테리어",
    "동양미래대학 창업지원공간 인테리어",
    "명동 편강한의원 인테리어",
    "송파파크하비오 착한식당촌 11개소 인테리어",
    "정관 미역국전문점 & 카페 인테리어",
    "남천동 무슈뱅상 인테리어",
    "뺑드메르 베이커리 인테리어",
    "오죽헌 카페 인테리어",
    "휴빈커피 인테리어",
    "압구정 갤러리아백화점 루프탑바이류니끄 인테리어",
    "수지 강남빌리지 아파트 인테리어",
    "벡스코 균형발전박람회 전시 부스 조성 공사",
    "종로 부영태평빌딩 식객촌 25개소 리모델링",
  ],
  2016: [
    "안락동 송가면옥 인테리어",
    "동해, 천안 육객 2개점 인테리어",
    "중앙동 팬스타 사옥 인테리어",
    "논현 TOCTOC BAR 인테리어",
    "신촌 곱다 곱창 인테리어",
    "역삼동 AI PET CAFE 인테리어",
    "파주 CANTEEN CAFE 인테리어",
    "신사동 CHAPTER ONE BAR 인테리어",
    "창업진흥센터 사인물 공사",
    "대치동 마리아칼리스홀 리모델링",
    "전국 따호카스테라 10개점 인테리어",
    "연천 근린생활시설 인테리어 및 건축 설계",
  ],
  2015: [
    "구서동 몽쉐리 베이커리 인테리어",
    "서면 동래통닭 인테리어",
    "서면 도네누 신규 시안 및 인테리어",
    "해운대 빈스버거 인테리어",
    "전국 대왕해물문어보쌈 11개점 인테리어",
    "JCF 김해 공장 조성 공사",
    "JCF 해운대 사무실 인테리어",
    "학동역 브레이브 팩토리 사무실 인테리어",
    "상암동 식객촌 사무실 인테리어",
    "면목동 칠칠켄터키 인테리어",
    "마포 구스 이자까야 인테리어",
    "중국 상하이 고기고기 계획, 감리",
    "삼성동 ALBEMARLE 사무실 인테리어",
  ],
  2014: [
    "대연동 신협 칼리버 인테리어",
    "명장동 주택 인테리어",
    "북정 비오크라상 인테리어",
    "서면 동래통닭 인테리어",
    "서면 편안애 인테리어",
    "쉐프의꿈 2호점 인테리어",
    "초읍동 주형환 베이커리 인테리어",
    "개금동 신동석 베이커리 인테리어",
    "당감동 도네누 인테리어",
    "정관 라미 커피전문점 인테리어",
    "하단동 고기집 인테리어",
    "신천 하래 이자카야 인테리어",
    "장안동 칠칠켄터키 인테리어",
    "압구정 트레이닝센터 인테리어",
    "수원 롯데백화점 부산어묵 인테리어",
    "IT EXPO BUSAN 전체 총괄 관리",
    "가락렛츠런파크 홍보관 조성 공사",
    "부산 제2시립미술관 #2 내부 실시 설계",
  ],
  2013: [
    "광안리 가십걸 인테리어",
    "광안리 청춘 인테리어",
    "대연동 전야제 인테리어",
    "동래 이가 인테리어",
    "서면 비오크라상 인테리어",
    "서면 짬뽕면가 인테리어",
    "중앙동 KT 사무실 인테리어",
    "중앙동 광복맥주 인테리어",
    "쉐프의꿈 1호점 인테리어",
    "광안리 DIVO 인테리어",
    "해운대 스몰비어 인테리어",
    "양산 해플 인테리어",
    "화명동 코오롱하늘채 아파트 인테리어",
    "개금동 휴대폰 판매점 인테리어",
    "세진기술산업 SHOW ROOM 해체 공사",
    "사직동 라인만화학원 인테리어",
  ],
  2012: [
    "경성대 뚱보네 돼지갈비 인테리어",
    "용인 어린이집 인테리어",
    "당리동 반도보라 아파트 인테리어",
    "부민동 분식집 인테리어",
    "부산대 꼬지야 인테리어",
    "학장동 3R E&C 공장동 인테리어",
    "부암동 베니마타르 인테리어",
    "경성대 R+CALL 인테리어",
    "대신동 남성한빛가든 리모델링",
    "남포동 남포육면 인테리어",
    "울산 바보밥나무 인테리어",
    "서면 센트럴스퀘어 Sunken 조경 계획",
    "경성대 COFFEE SQUARE 리모델링",
    "비오크라상 남산직영점 인테리어",
    "부산족발 김해점 인테리어",
    "부산 제2시립미술관 내부 실시 설계",
    "부산 해운대 이안 아파트 환경 설계",
  ],
  "2010 ~ 2011": [
    "서면 INOTEN 인테리어",
    "개금동 반도보라 아파트 인테리어",
    "당감동 전자담배 개인샵 인테리어",
    "아산 PAIN DE MARE 인테리어",
    "민락동 빌라 리모델링",
    "연산동 텀블랜드 인테리어",
    "초량 혜광고등학교 공공미술 프로젝트 조성 공사",
    "장전동 학원 인테리어",
    "개금동 학원 인테리어",
    "과천 공장 인테리어",
    "대신동 문화아파트 인테리어",
    "부산대 비오크라상 인테리어",
    "해운대 삼환아파트 인테리어",
    "남포동 THE PUB 인테리어",
    "모라 PC방 리모델링",
    "서면 인해 인테리어",
    "중앙동 크레이지밥 인테리어",
  ],
  "2007 ~ 2009": [
    "해운대 SFUNZ 네일샵 인테리어",
    "서면 Tea Spoon 인테리어",
    "서면 버팔로 체인 초안 및 본점 인테리어",
    "거제 삼성병원 인테리어",
    "창원 용원 삼성병원 인테리어",
    "양산 K 치과 인테리어",
    "평택 동아아파트 인테리어",
    "진주 신장내과 인테리어",
    "경성대 메생이 인테리어",
    "경성대 GELETERIA 인테리어",
    "쿠쿠 창원점, 마산점 감리",
    "서면 마루 커피 인테리어",
    "팬스타 패리(써니) 쇼핑몰 가구 제작",
    "진영 시칠리아 인테리어",
    "초량 영화고등학교 입구 작업",
    "경성대 The Black 리모델링",
    "경성대 드렁큰고양이 리모델링",
    "서면 LOVE 인테리어",
  ],
};
