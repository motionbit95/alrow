import React, { useEffect, useRef, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const MouseControl = ({ footerRef, hoverdRef }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorRef = useRef();

  useEffect(() => {
    setVisible(!footerRef.current);
  }, [footerRef.current]);

  useEffect(() => {
    setHovered(hoverdRef.current);
  }, [hoverdRef.current]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      // if (position.x === e.clientX && position.y === e.clientY) return;

      setTimeout(() => {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        setPosition({ x: e.clientX, y: e.clientY });
      }, 100); // 100ms 후에 마우스 위치를 업데이트
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // useEffect(() => {
  //   console.log(position.x, position.y);
  // }, [position]);

  return (
    <Box
      ref={cursorRef}
      display={visible && !isMobile ? "block" : "none"}
      zIndex={99999}
      position="fixed"
      // left={position.x}
      // top={position.y}
      transform="translate(-50%, -50%)"
      boxSize={hovered ? 24 : 10}
      borderRadius="full"
      bgColor={hovered ? "rgba(158, 158, 158, 0.3)" : "none"}
      border={hovered ? "none" : "1px solid #707070"}
      pointerEvents="none" // 마우스 이벤트가 이 요소를 뚫고 나머지 요소로 전달되도록 함
    />
  );
};

export default MouseControl;
