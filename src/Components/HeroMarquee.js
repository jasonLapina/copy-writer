import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
function HeroMarquee() {
  const logos = [
    "/client-logos/bonsai.webp",
    "/client-logos/bruteForce.png",
    "/client-logos/buzzbud.png",
    "/client-logos/Cru.png",
    "/client-logos/dnd.jpg",
    "/client-logos/homi.png",
    "/client-logos/lavish.webp",
    "/client-logos/realTakai.png",
    "/client-logos/gassy.png",
    "/client-logos/nola.webp",
    "/client-logos/supervibe.webp",
    "/client-logos/sd.png",
  ];
  return (
    <Box
      mt={{ base: "-180px", lg: "-120px" }}
      pb='48px'
      mb={{ base: "64px", lg: "0px" }}
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 1.5,
        },
      }}
    >
      <Text
        textAlign='center'
        mb='16px'
        letterSpacing='tight'
        fontWeight='bold'
        fontSize='20px'
        color='blackAlpha.600'
      >
        Some of my clientele:
      </Text>
      <Box
        display='flex'
        alignContent='center'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
        as={Marquee}
        autoFill
        gradient
      >
        {logos.map((item) => (
          <Image
            mx='40px'
            w='90px'
            src={item}
            filter={item.includes("homi") ? "brightness(.4)" : ""}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HeroMarquee;
