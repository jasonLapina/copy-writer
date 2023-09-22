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
import SectionLayout from "./Layout/SectionLayout";
import MyHeading from "./UI/MyHeading";
function About() {
  return (
    <SectionLayout>
      <Box fontSize='24px'>
        <MyHeading>A Little About Me</MyHeading>

        <Box textAlign='center' maxW='1200px' m='auto'>
          <Text data-aos='fade-right'>
            Over the past year, I've worked with a variety of e-commerce brands
            across industries ranging from Health and Beauty, Apparel and
            Jewelry, Sporting Goods, Food and Beverages, and more!
          </Text>
          <br />
          <Text data-aos='fade-left'>
            With each having their own brand personality and voice.
          </Text>
          <br />
          <Text fontSize='24px' data-aos='fade-up'>
            The only similarity?{" "}
            <Box as='span' fontWeight='bold' color='primary'>
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
          <Box
            data-aos='zoom-in'
            bgImage='linear-gradient(to bottom left, secondary 40% ,primary 60% )'
            justifySelf='end'
            borderRadius='full'
            overflow='hidden'
            boxShadow='4px 4px 8px rgba(0,0,0,.4)'
          >
            <Image
              aspectRatio='1/1'
              maxW='310px'
              src='/jelanie.png'
              transition='all .4s'
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Box>
          <Box data-aos='zoom-in-down' fontSize='24px' justifySelf='start'>
            <Text>With me, they all got pieces of copy that:</Text>
            <Text>
              <Box color='primary' fontWeight='bold' fontSize='32px' as='span'>
                R
              </Box>
              esonated with their audience
            </Text>
            <Text>
              <Box color='primary' fontWeight='bold' fontSize='32px' as='span'>
                O
              </Box>
              vercame pain points
            </Text>
            <Text>
              <Box color='primary' fontWeight='bold' fontSize='32px' as='span'>
                I
              </Box>
              nvoked urgency to take action
            </Text>
          </Box>
        </Grid>
        <Text
          data-aos='fade-right'
          mt='40px'
          fontSize='48px'
          textAlign='center'
        >
          Take it from them, it was easy{" "}
          <Box as='span' fontWeight='bold' color='primary'>
            ROI
          </Box>{" "}
          <Icon transform='translateY(4px)' as={TbBusinessplan} />
        </Text>
        <Center mt='40px'>
          <Button
            as='a'
            href='Jelanie Gapas - Copywriter Resume.docx.pdf'
            variant='outline'
            borderColor='primary'
            download
            _hover={{
              color: "white",
              bgColor: "secondary",
            }}
          >
            Download Resume
          </Button>
        </Center>
      </Box>
    </SectionLayout>
  );
}

export default About;
