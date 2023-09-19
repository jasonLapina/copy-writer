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
    <Box>
      {/* <Navigation /> */}
      <Box as='main' maxW='1640px' mx='auto' py='80px'>
        <Hero />
        <YouGet />
        <About />
        <Samples />
        <Testimonials />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
