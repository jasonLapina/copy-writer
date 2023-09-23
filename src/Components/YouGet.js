import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import SectionLayout from "./Layout/SectionLayout";
import MyHeading from "./UI/MyHeading";
function YouGet() {
  const youGet = [
    "Market & Competitor Research",
    "Content Strategy",
    "Short/Long-form Copy",
    "Proofreading/Editing",
    "Unlimited Revisions",
  ];

  return (
    <SectionLayout>
      <MyHeading>What You'll Get</MyHeading>
      <Text textAlign='center' data-aos='fade-left' fontSize='24px'>
        Track record of excellent copywriting leading to an increase in sales
      </Text>
      <Box>
        <Grid
          alignItems='center'
          justifyItems='center'
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        >
          <Box data-aos='fade-up'>
            <Text
              fontWeight='bold'
              mb='24px'
              fontSize='32px'
              textAlign='center'
            >
              Results-driven process
            </Text>
            <VStack justify='center' alignItems='left' gap='24px' h='100%'>
              {youGet.map((item, i) => (
                <Text key={i} fontSize='24px'>
                  <CheckIcon color='primary' mr='8px' /> {item}
                </Text>
              ))}
            </VStack>
          </Box>
          <Image data-aos='fade-up' p='16px' mt='8px' src='/youGetImg.svg' />
        </Grid>
      </Box>
      <Center mt='56px'>
        <Button
          onClick={() => {
            document.getElementById("samples").scrollIntoView({
              behavior: "smooth",
            });
          }}
          p='24px'
          fontSize='32px'
          color='primary'
          variant='link'
        >
          See samples &rarr;
        </Button>
      </Center>
    </SectionLayout>
  );
}

export default YouGet;
