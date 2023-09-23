import {
  Box,
  Button,
  HStack,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
      text: "Feedback & Results",
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

  const [isPastHero, setIsPastHero] = useState(false);

  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 100) setIsPastHero(true);
    else {
      setIsPastHero(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bgColor='blue.200'
      zIndex={99}
      fontSize='18px'
      py='16px'
      pos='fixed'
      top='0'
      w='100%'
      transition='all .4s'
      opacity={isPastHero ? 0.4 : 1}
      _hover={{
        opacity: 1,
      }}
    >
      {/* DRAWER NAV */}
      {isSmallScreen && (
        <>
          <Button pl='16px' colorScheme='secondary' onClick={onOpen}>
            Menu
          </Button>
          <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent maxW='fit-content'>
              <DrawerCloseButton color='red' />
              <DrawerHeader mb='80px'>Navigate</DrawerHeader>
              <DrawerBody>
                <VStack gap='16px' alignItems='start' justify='end'>
                  {sections.map((item) => (
                    <Button
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
              color: "secondary",
            }}
            color='white'
            variant='link'
            pl={{ base: "0px", lg: "120px" }}
            onClick={() => {
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
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
                color='white'
                key={item.link}
                variant='link'
                _hover={{
                  color: "secondary",
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
