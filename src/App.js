import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Project from "./Page/Project";
import { ChakraProvider } from "@chakra-ui/react";
import ProjectItem from "./Page/ProjectItem";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/*" element={<ProjectItem />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
