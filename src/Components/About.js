import { Box, Text, Image, Grid, Icon, Button, Center } from "@chakra-ui/react";
import { TbBusinessplan } from "react-icons/tb";
import SectionLayout from "./Layout/SectionLayout";
import MyHeading from "./UI/MyHeading";

const HighLighted = ({ children }) => {
  return (
    <Box as='span' bgGradient='linear(white 60% ,yellow 40%)'>
      {children}
    </Box>
  );
};
function About() {
  return (
    <SectionLayout>
      <Box fontSize='24px'>
        <MyHeading>A Little About Me</MyHeading>

        <Box textAlign='center' maxW='1200px' m='auto'>
          <Text color='gray.500' data-aos='fade-right'>
            Over the past year, I've worked with a variety of e-commerce brands
            across industries ranging from{" "}
            <HighLighted>Health and Beauty</HighLighted>,{" "}
            <HighLighted>Apparel and Jewelry</HighLighted>,{" "}
            <HighLighted>Sporting Goods</HighLighted>,{" "}
            <HighLighted>Food and Beverages</HighLighted> , and more!
          </Text>
          <br />
          <Text color='gray.500' data-aos='fade-left'>
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
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          mt='40px'
        >
          <Box
            data-aos='fade-right'
            bgImage='linear-gradient(to top left, secondary, white)'
            justifySelf={{ base: "center", lg: "end" }}
            borderRadius='full'
            overflow='hidden'
            boxShadow='4px 4px 8px rgba(0,0,0,.4)'
          >
            <Image
              // aspectRatio='1/1'
              maxW='310px'
              src='/jelanie.png'
              filter='drop-shadow(4px 4px 8px white)'
            />
          </Box>
          <Box data-aos='fade-left' fontSize='24px' justifySelf='start'>
            <Text opacity={0.6}>
              With me, they all got pieces of copy that:
            </Text>
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
