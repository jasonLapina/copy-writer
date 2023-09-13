import { Box } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <Box>
      <Box as='main' maxW='1640px' mx='auto'>
        <Hero />
        <About />
      </Box>
    </Box>
  );
}

export default App;
