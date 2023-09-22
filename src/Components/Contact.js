import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import SectionLayout from "./Layout/SectionLayout";
import MyHeading from "./UI/MyHeading";
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
    <SectionLayout mb='0px'>
      <MyHeading>You can reach me @</MyHeading>
      <HStack pb='40px' justify='center' gap='80px' mt='40px'>
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
          </Box>
        ))}
      </HStack>
    </SectionLayout>
  );
}

export default Contact;
