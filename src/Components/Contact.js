import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import SectionLayout from "./Layout/SectionLayout";
function Contact() {
  const contacts = [
    {
      text: "jmgswipes@gmail.com",
      icon: "/gmail.png",
    },
    {
      text: "https://www.linkedin.com/in/jmgwrites",
      icon: "/linkedin.png",
    },
  ];
  return (
    <SectionLayout>
      <Heading>You can reach me via:</Heading>
      <HStack gap='80px' mt='40px'>
        {contacts.map((item) => (
          <Box
            as='a'
            href={item.text}
            rel='noreferrer noopener'
            target='_blank'
            key={item.text}
          >
            <Image
              w='200px'
              borderRadius='full'
              src={item.icon}
              alt={item.text}
              cursor='pointer'
            />
            <Button
              fontSize='20px'
              fontWeight='bold'
              textAlign='center'
              variant='link'
              color='blackAlpha.700'
            >
              {item.text}
            </Button>
          </Box>
        ))}
      </HStack>
    </SectionLayout>
  );
}

export default Contact;
