import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Project from "./Page/Project";
import Portfolio from "./Component/Portfolio";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ProjectItem from "./Page/ProjectItem";
import MouseControl from "./Component/MouseControl";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./Component/Footer";
import { Topbar } from "./Component/Topbar";

function App() {
  // const [isOnFooterText, setIsOnFooterText] = useState(false);
  // const [isHoverEffect, setIsHoverEffect] = useState(false);

  const isOnFooterText = useRef(false);
  const isHoverEffect = useRef(false);

  const customTheme = extendTheme({
    breakpoints: {
      sm: "30em", // 480px
      md: "48em", // 768px
      lg: "90em", // 1440px
      xl: "120em", // 1920px
      "2xl": "160em", // 2560px
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <MouseControl footerRef={isOnFooterText} hoverdRef={isHoverEffect} />
      {!(window.location.pathname === "/portfolio") && (
        <Topbar
          whitecolor={
            !(window.location.pathname === "/") &&
            !window.location.pathname.includes("/item")
          }
          onHoverEffect={(flag) => {
            isHoverEffect.current = flag;
          }}
        />
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/item/*" element={<ProjectItem />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      {(!(window.location.pathname === "/") ||
        !(window.location.pathname === "/portfolio")) && (
        <Footer
          onFooterText={(flag) => {
            isOnFooterText.current = flag;
          }}
          onHoverEffect={(flag) => {
            isHoverEffect.current = flag;
          }}
        />
      )}
    </ChakraProvider>
  );
}

export default App;
