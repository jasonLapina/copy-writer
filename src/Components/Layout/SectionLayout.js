import { Box } from "@chakra-ui/react";
function SectionLayout({ children }) {
  return (
    <Box maxW='1366px' mx='auto' my='120px'>
      {children}
    </Box>
  );
}

export default SectionLayout;
