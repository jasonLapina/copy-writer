import { Box, Button, HStack } from "@chakra-ui/react";
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
      <HStack
        justifyContent='space-between'
        alignItems='center'
        alignContent='center'
        justifyItems='center'
        maxW='1800px'
        mx='auto'
      >
        <Button
          _hover={{
            color: "secondary",
          }}
          color='white'
          variant='link'
          pl='120px'
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
    </Box>
  );
}

export default Navigation;
