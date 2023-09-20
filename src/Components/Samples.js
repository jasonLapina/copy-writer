import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

function Samples() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSample, setModalSample] = useState("");

  const sampleCopy = [
    "/sample/BedBugs.jpg",
    "/sample/Apparel.jpg",
    "/sample/SweetDreams.jpg",
    "/sample/BuzzBud.jpg",
    "/sample/Gassy.jpg",
  ];

  const openModalHandler = (sampleSrc) => {
    setModalSample(sampleSrc);
    onOpen();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalOverlay />
        <ModalContent mt='16px'>
          <ModalBody>
            <Image loading='lazy' alt='sample copy' src={modalSample} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box my='120px' minH='100vh'>
        <Heading textAlign='center' mb='40px'>
          Samples
        </Heading>
        <Grid data-aos='fade-up' gap='16px' gridTemplateColumns='repeat(3,1fr)'>
          {sampleCopy.map((item) => (
            <Box
              as={motion.div}
              cursor='pointer'
              borderRadius='20px'
              key={item}
              maxW='640px'
              maxH='600px'
              overflow='hidden'
              pos='relative'
              role='group'
              onClick={() => openModalHandler(item)}
            >
              <Image
                alt='sample copy for client'
                loading='lazy'
                src={item}
                _groupHover={{
                  filter: "brightness(.4)",
                }}
                transition='all .4s'
              />
              <Button
                py='16px'
                px='32px'
                pos='absolute'
                top='100%'
                left='50%'
                transform='translate(-50%,-50%)'
                bgColor='purple.600'
                color='white'
                transition='all .4s'
                opacity={0}
                _groupHover={{
                  top: "80%",
                  opacity: 1,
                }}
                onClick={() => openModalHandler(item)}
              >
                View
              </Button>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Samples;
