import { StarIcon } from "@chakra-ui/icons";
import { Box, Grid, HStack, Heading, Text } from "@chakra-ui/react";
function Testimonials() {
  const reviews = [
    {
      client: "Mint Avenue",
      text: "We couldn't be happier with the quality. I had no idea what to expect and was a bit apprehensive at first, but I am glad I hired her.",
    },
    {
      client: "Mint Avenue",
      text: "We couldn't be happier with the quality. I had no idea what to expect and was a bit apprehensive at first, but I am glad I hired her.",
    },
    {
      client: "Mint Avenue",
      text: "We couldn't be happier with the quality. I had no idea what to expect and was a bit apprehensive at first, but I am glad I hired her.",
    },
    {
      client: "Mint Avenue",
      text: "We couldn't be happier with the quality. I had no idea what to expect and was a bit apprehensive at first, but I am glad I hired her.",
    },
  ];

  return (
    <Box minH='100vh'>
      <Heading fontSize='64px' textAlign='center' mb='40px'>
        Feedback and Results
      </Heading>
      <Grid
        alignItems='start'
        gridTemplateColumns='1fr 1fr'
        columnGap='16px'
        rowGap='32px'
      >
        {reviews.map((item) => (
          <Box px='24px' py='48px' key={item.client}>
            <HStack mb='24px' gap='16px'>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon color='gold' fontSize='32px' key={i} />
              ))}
            </HStack>
            <Text mb='16px' fontSize='24px' fontWeight='bold'>
              {item.client}
            </Text>
            <Text maxW='640px'>{item.text}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;
