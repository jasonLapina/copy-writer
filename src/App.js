import { Box } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import YouGet from "./Components/YouGet";
import About from "./Components/About";
import Samples from "./Components/Samples";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import Testimonials from "./Components/Testimonials";
import "./style.css";

function App() {
  return (
    <>
      <Box
        aspectRatio='960/540'
        maxH='900px'
        w='100%'
        bgRepeat='no-repeat'
        bgPos='center'
        bgSize='cover'
        bgImage="linear-gradient(to bottom, rgba(255, 255, 255, 1) 2%, rgba(255, 255, 255, 0) 98%),
        url('/divider.svg');"
      >
        <Hero />
      </Box>

      <YouGet />

      <About />

      <Samples />

      <Testimonials />

      <Contact />
    </>
  );
}

export default App;
