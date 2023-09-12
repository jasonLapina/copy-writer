import { Box } from "@chakra-ui/react";
import Hero from "./Components/Hero";

function App() {
  return (
    <Box>
      <Box as='main' maxW='1640px' mx='auto'>
        <Hero />
      </Box>
    </Box>
  );
}

export default App;
