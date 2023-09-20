import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useStatStyles,
} from "@chakra-ui/react";
import { useState } from "react";
function Testimonials() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [resultSrc, setResultSrc] = useState("");
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

  const results = [
    "/results/Buzzbud.jpg",
    "/results/Nola.jpg",
    "/results/RealTakai.jpg",
    "/results/Supervibe.jpg",
  ];

  const showResult = (src) => {
    setResultSrc(src);
    onOpen();
  };

  return (
    <>
      <Modal size='6xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton color='red' />
          <ModalBody>
            <Image src={resultSrc} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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

        <Grid
          mt='32px'
          alignItems='start'
          justifyItems='center'
          gap='16px'
          gridTemplateColumns='1fr 1fr'
        >
          {results.map((item, i) => (
            <Box key={item} cursor='pointer'>
              <Image
                onClick={() => showResult(item)}
                src={item}
                mt={i === 4 ? "-248px" : ""}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Testimonials;
