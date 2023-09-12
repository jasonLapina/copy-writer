import { Circle, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
function HeroMarquee() {
  const dummyArr = Array.from({ length: 5 });
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
      <Box as={Marquee} autoFill pauseOnHover>
        {dummyArr.map((_, i) => (
          <Circle mx='40px' key={i} bgColor='red' w='80px' h='80px' />
        ))}
      </Box>
    </Box>
  );
}

export default HeroMarquee;
