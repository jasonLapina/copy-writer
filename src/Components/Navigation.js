import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

function Navigation() {
  const sections = [
    {
      text: "You Get",
      link: "youget",
    },
    {
      text: "About Me",
      link: "about",
    },
    {
      text: "Results",
      link: "testimonial",
    },
    {
      text: "Samples",
      link: "samples",
    },
    {
      text: "Contact",
      link: "contact",
    },
  ];

  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bgGradient='linear( to bottom right, rgba(0,0,0,.2) ,rgba(0,105,255,0.6) 90%)'
      backdropFilter='auto'
      backdropBlur='20px'
      zIndex={99}
      fontSize='18px'
      py='16px'
      pos='fixed'
      top='0'
      w='100%'
      transition='all .4s'
      _hover={{
        opacity: 1,
      }}
    >
      {/* DRAWER NAV */}
      {isSmallScreen && (
        <>
          <Button pl='16px' colorScheme='secondary' onClick={onOpen}>
            <HamburgerIcon fontSize='32px' />
          </Button>
          <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent maxW='fit-content'>
              <DrawerCloseButton color='red' />
              <DrawerHeader mb='80px'>Navigate</DrawerHeader>
              <DrawerBody>
                <VStack gap='16px' alignItems='start' justify='end'>
                  <Button
                    letterSpacing='widest'
                    fontSize='24px'
                    color='secondary'
                    variant='link'
                    _hover={{
                      color: "secondary",
                    }}
                    onClick={() => {
                      window.scrollTo({
                        behavior: "smooth",
                        top: 0,
                      });
                      onClose();
                    }}
                  >
                    Back to top
                  </Button>
                  {sections.map((item) => (
                    <Button
                      letterSpacing='widest'
                      fontSize='24px'
                      color='secondary'
                      key={item.link}
                      variant='link'
                      _hover={{
                        color: "secondary",
                      }}
                      onClick={() => {
                        document.getElementById(item.link).scrollIntoView({
                          behavior: "smooth",
                        });
                        onClose();
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}

      {!isSmallScreen && (
        <HStack
          justifyContent='space-between'
          alignItems='center'
          alignContent='center'
          justifyItems='center'
          maxW='1800px'
          mx='auto'
          px='16px'
        >
          <Button
            _hover={{
              color: "primary",
            }}
            color='white'
            variant='link'
            pl={{ base: "0px", lg: "120px" }}
            onClick={() => {
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
            letterSpacing='widest'
          >
            Home
          </Button>
          <HStack
            alignItems='center'
            alignContent='center'
            gap='32px'
            justifyContent='end'
          >
            {sections.map((item) => (
              <Button
                letterSpacing='widest'
                color='white'
                // color='primary'
                key={item.link}
                variant='link'
                _hover={{
                  color: "primary",
                }}
                onClick={() => {
                  document.getElementById(item.link).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.text}
              </Button>
            ))}
          </HStack>
        </HStack>
      )}
    </Box>
  );
}

export default Navigation;
