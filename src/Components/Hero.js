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
import SectionLayout from "./Layout/SectionLayout";
function Hero() {
  return (
    <Box pt='64px'>
      <SectionLayout>
        <Grid
          h='70vh'
          maxH='900px'
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
              <Box as='span'>
                <Box color='primary' as='span' fontSize='80px'>
                  C
                </Box>
                opywriting
              </Box>{" "}
              <Box color='primary' as='span' fontSize='80px'>
                S
              </Box>
              ervices <br />
              <Text mt='16px' fontSize='24px'>
                for Agencies, Businesses, and E-commerce!
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
              <Button
                color='white'
                bgColor='primary'
                _hover={{
                  bgColor: "black",
                  color: "white",
                }}
                onClick={() =>
                  document.getElementById("samples").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Samples
              </Button>
              <Button
                _hover={{
                  bgColor: "black",
                  color: "white",
                }}
                color='primary'
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Contact me
              </Button>
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
            <Image src='/heroImg.svg' px='24px' />
          </Box>
        </Grid>
      </SectionLayout>
      <HeroMarquee />
    </Box>
  );
}

export default Hero;
