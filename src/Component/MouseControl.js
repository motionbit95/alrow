import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const MouseControl = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 100); // 100ms 후에 마우스 위치를 업데이트
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <Box
      zIndex={99999}
      position="fixed"
      left={position.x}
      top={position.y}
      transform="translate(-50%, -50%)"
      boxSize={10}
      borderRadius="full"
      border="1px solid white"
    />
  );
};

export default MouseControl;
