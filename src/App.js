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
import { useState } from "react";

function App() {
  const [isOnFooterText, setIsOnFooterText] = useState(false);
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
      <MouseControl visible={!isOnFooterText} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <Contact onFooterText={(flag) => setIsOnFooterText(flag)} />
            }
          />
          <Route path="/project" element={<Project />} />
          <Route path="/project/*" element={<ProjectItem />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
