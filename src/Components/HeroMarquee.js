import { Box, Image } from "@chakra-ui/react";
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
    "/client-logos/realTakai.png",
  ];
  return (
    <Box
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
      <Box
        display='flex'
        alignContent='center'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
        as={Marquee}
        autoFill
        pauseOnHover
        play={false}
      >
        {logos.map((item) => (
          <Image
            bgColor='red'
            mx='24px'
            w='120px'
            src={item}
            filter={item.includes("homi") ? "brightness(.4)" : ""}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HeroMarquee;
