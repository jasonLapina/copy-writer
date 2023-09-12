import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import HeroMarquee from "./HeroMarquee";
function Hero() {
  return (
    <Box minH='100vh'>
      <Grid
        h='80vh'
        alignContent='center'
        gridTemplateColumns='1fr 1fr'
        justifyItems='center'
        alignItems='center'
        pb='80px'
      >
        <Box textAlign='center'>
          <Heading
            as={motion.div}
            initial={{
              opacity: 0,
              transform: "translateX(-80px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0)",
              transition: {
                duration: 1.5,
              },
            }}
            fontSize='64px'
          >
            <Box as='span'>Copywriting</Box> services <br />
            <Text mt='16px' fontSize='24px'>
              for agencies, businesses, and e-commerce!
            </Text>
          </Heading>
          <HStack
            as={motion.div}
            initial={{
              opacity: 0,
              transform: "translateY(-80px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
              transition: {
                duration: 1.5,
              },
            }}
            mt='40px'
            justify='center'
            gap='48px'
          >
            <Button>Contact</Button>
            <Button>Pricing</Button>
          </HStack>
        </Box>
        <Box
          as={motion.div}
          initial={{
            opacity: 0,
            transform: "translateX(80px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateX(0)",
            transition: {
              duration: 1.5,
            },
          }}
        >
          <Image src='/heroImg.png' />
        </Box>
      </Grid>
      <HeroMarquee />
    </Box>
  );
}

export default Hero;
