import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
function About() {
  const youGet = [
    "Market & Competitor Research",
    "Content Strategy",
    "Short/Long-form Copy",
    "Proofreading/Editing",
    "Unlimited Revisions",
  ];

  return (
    <Box minH='100vh'>
      <Heading
        data-aos='fade-right'
        fontSize='64px'
        textAlign='center'
        mb='40px'
      >
        What You'll Get
        <Text data-aos='fade-left' fontSize='32px'>
          Track record of excellent copywriting leading to an increase in sales
        </Text>
      </Heading>
      <Box>
        <Grid
          alignItems='center'
          justifyItems='center'
          gridTemplateColumns='1fr 1fr'
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
                  <CheckIcon color='purple.600' mr='8px' /> {item}
                </Text>
              ))}
            </VStack>
          </Box>
          <Image data-aos='fade-up' src='/saleBoost.png' />
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
