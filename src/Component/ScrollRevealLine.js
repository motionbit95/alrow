import { useEffect, useState } from "react";
import { motion, useViewportScroll, useAnimation } from "framer-motion";
import { Text } from "@chakra-ui/react";

const ScrollAnimation = ({ index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const historyArea = document.getElementById("historyArea");

      const scrollPosition = window.innerHeight * 0.75;
      const elementTop = document
        .getElementById(`scrollLine${index}`)
        .getBoundingClientRect().top;

      console.log(scrollPosition, elementTop);
      if (elementTop < scrollPosition && !triggered) {
        controls.start({ width: "100%" });
        setTriggered(true);
      } else if (elementTop >= scrollPosition && triggered) {
        controls.start({ width: 0 });
        setTriggered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, triggered]);

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        id={`scrollLine${index}`}
        initial={{ width: 0 }} // 초기 위치를 오른쪽 끝으로 설정
        animate={{ width: "100%" }} // 애니메이션 적용
        transition={{ duration: 1.5, ease: "easeInOut" }} // 애니메이션 설정
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "1px",
          backgroundColor: "#d9d9d9",
        }}
      ></motion.div>
    </div>
  );
};

export default ScrollAnimation;
