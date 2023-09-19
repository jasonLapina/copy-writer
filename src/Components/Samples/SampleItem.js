import { Box, Heading } from "@chakra-ui/react";
function SampleItem(props) {
  const { samples, niche } = props;
  return (
    <Box>
      <Heading
        bgColor='purple.200'
        w='fit-content'
        px='32px'
        py='16px'
        borderRadius='20px'
      >
        Niche: {niche}
      </Heading>
    </Box>
  );
}

export default SampleItem;
