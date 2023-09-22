import { Box, Heading } from "@chakra-ui/react";
function MyHeading({ children }) {
  return (
    <Heading
      // data-aos='fade-down'
      fontSize='64px'
      textAlign='center'
      mb='40px'
      pos='relative'
      w='fit-content'
      mx='auto'
    >
      <Box
        w='300px'
        clipPath='polygon(99% 58%, 100% 16%, 0 79%)'
        pos='absolute'
        bottom='-24px'
        right='-40px'
        h='56px'
        bgColor='secondary'
      />
      {children}
    </Heading>
  );
}

export default MyHeading;
