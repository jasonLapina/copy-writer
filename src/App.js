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

      <Box
        mt='-120px'
        aspectRatio='960/100'
        w='100%'
        bgRepeat='no-repeat'
        bgPos='center'
        bgSize='cover'
        bgImage="linear-gradient(to bottom, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 85%),
        url('/layered-waves-haikei.svg');"
      />

      <YouGet />

      <Box
        aspectRatio='960/100'
        w='100%'
        bgRepeat='no-repeat'
        bgPos='center'
        bgSize='cover'
        bgImage="url('/wave-haikei.svg');"
        maxH='100px'
        mt='-80px'
      />

      <About />
      <Box
        aspectRatio='960/540'
        maxH='900px'
        w='100%'
        bgRepeat='no-repeat'
        bgPos='center'
        bgSize='cover'
        bgImage="url('/circle-scatter-haikei.svg');"
      >
        <Box
          aspectRatio='960/100'
          w='100%'
          bgRepeat='no-repeat'
          bgPos='center'
          bgSize='cover'
          bgImage="url('/wave-haikei.svg');"
          maxH='100px'
          mt='-80px'
        />

        <Samples />
        <Testimonials />
      </Box>

      <Box
        aspectRatio='960/100'
        w='100%'
        bgRepeat='no-repeat'
        bgPos='center'
        bgSize='cover'
        bgImage="url('/wave-haikei.svg');"
        maxH='100px'
        mt='-120px'
      />
      <Contact />
      <Box
        aspectRatio='960/120'
        w='100%'
        bgRepeat='no-repeat'
        bgPos='center'
        bgSize='cover'
        bgImage="linear-gradient(to bottom, rgba(255, 255, 255, 0)1%, rgba(255, 255, 255, 1) 99%),
        url('/bottom-wave.svg');"
        mt='-120px'
      />
    </>
  );
}

export default App;
