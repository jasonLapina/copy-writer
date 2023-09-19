import { Box, Button, HStack } from "@chakra-ui/react";

function Navigation() {
  const sections = Array.from({ length: 4 });

  return (
    <Box zIndex={99} fontSize='18px' py='16px' pos='fixed' top='0' w='100%'>
      <HStack
        justifyContent='space-between'
        alignItems='center'
        alignContent='center'
        justifyItems='center'
        maxW='1640px'
        mx='auto'
      >
        <Button variant='ghost'>Home</Button>
        <HStack
          alignItems='center'
          alignContent='center'
          gap='16px'
          justifyContent='end'
        >
          {sections.map((_, i) => (
            <Button key={i} variant='ghost'>
              NavItem
            </Button>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
}

export default Navigation;
