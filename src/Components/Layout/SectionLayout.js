import { Box } from "@chakra-ui/react";
function SectionLayout(props) {
  const { children } = props;
  return (
    <>
      <Box maxW='1366px' mx='auto' mb='120px' {...props}>
        {children}
      </Box>
    </>
  );
}

export default SectionLayout;
