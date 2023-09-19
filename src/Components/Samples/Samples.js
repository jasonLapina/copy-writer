import { Box, Heading } from "@chakra-ui/react";
import SampleItem from "./SampleItem";

function Samples() {
  const healthArr = Array.from({ length: 5 });

  return (
    <Box mt='120px' minH='100vh'>
      <Heading fontSize='64px' textAlign='center' mb='40px'>
        Samples
      </Heading>
      <Box>
        <SampleItem niche='Health & Beauty' />
      </Box>
    </Box>
  );
}

export default Samples;
