import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Project from "./Page/Project";
import Portfolio from "./Component/Portfolio";
import { ChakraProvider } from "@chakra-ui/react";
import ProjectItem from "./Page/ProjectItem";
import PortfolioList from "./Component/PortfolioList";

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfoliolist" element={<PortfolioList />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
