import {
  Box,
  Text,
  Heading,
  Image,
  Grid,
  Icon,
  Button,
  Center,
} from "@chakra-ui/react";
import { TbBusinessplan } from "react-icons/tb";
function About() {
  return (
    <Box fontSize='24px' minH='100vh'>
      <Heading
        data-aos='fade-down'
        fontSize='64px'
        textAlign='center'
        mb='40px'
      >
        A Little About Me
      </Heading>
      <Box textAlign='center' maxW='1200px' m='auto'>
        <Text data-aos='fade-right'>
          Over the past year, I've worked with a variety of e-commerce brands
          across industries ranging from Health and Beauty, Apparel and Jewelry,
          Sporting Goods, Food and Beverages, and more!
        </Text>
        <br />
        <Text data-aos='fade-left'>
          With each having their own brand personality and voice.
        </Text>
        <br />
        <Text fontSize='24px' data-aos='fade-up'>
          The only similarity?{" "}
          <Box as='span' fontWeight='bold' color='purple.600'>
            ME.
          </Box>
        </Text>
      </Box>
      <Grid
        gap='54px'
        alignItems='center'
        gridTemplateColumns='1fr 1fr'
        mt='40px'
      >
        <Image
          aspectRatio='1/1'
          borderRadius='full'
          justifySelf='end'
          src='/jelanie.png'
          maxW='400px'
          data-aos='zoom-in'
        />
        <Box data-aos='zoom-in-down' fontSize='24px' justifySelf='start'>
          <Text>With me, they all got pieces of copy that:</Text>
          <Text>
            <Box color='purple.600' fontWeight='bold' fontSize='32px' as='span'>
              R
            </Box>
            esonated with their audience
          </Text>
          <Text>
            <Box color='purple.600' fontWeight='bold' fontSize='32px' as='span'>
              O
            </Box>
            vercame pain points
          </Text>
          <Text>
            <Box color='purple.600' fontWeight='bold' fontSize='32px' as='span'>
              I
            </Box>
            nvoked urgency to take action
          </Text>
        </Box>
      </Grid>
      <Text data-aos='fade-right' mt='40px' fontSize='48px' textAlign='center'>
        Take it from them, it was easy{" "}
        <Box as='span' fontWeight='bold' color='purple.600'>
          ROI
        </Box>{" "}
        <Icon transform='translateY(4px)' as={TbBusinessplan} />
      </Text>
      <Center mt='40px'>
        <Button
          as='a'
          href='Jelanie Gapas - Copywriter Resume.docx.pdf'
          variant='outline'
          borderColor='purple.600'
          download
        >
          Download Resume
        </Button>
      </Center>
    </Box>
  );
}

export default About;
