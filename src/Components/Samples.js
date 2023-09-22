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
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionLayout from "./Layout/SectionLayout";

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

      <SectionLayout>
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
                  filter: "brightness(.2)",
                }}
                transition='all .4s'
              />
              <Text
                py='16px'
                px='32px'
                pos='absolute'
                top='-100%'
                left='50%'
                transform='translateX(-50%)'
                color='white'
                transition='all .4s'
                opacity={0}
                _groupHover={{
                  top: "40px",
                  opacity: 1,
                }}
                fontSize='24px'
              >
                Click to view
              </Text>
            </Box>
          ))}
        </Grid>
      </SectionLayout>
    </>
  );
}

export default Samples;
