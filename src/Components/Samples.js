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
  Skeleton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionLayout from "./Layout/SectionLayout";
import MyHeading from "./UI/MyHeading";

function Samples() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSample, setModalSample] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const sampleCopy = [
    "/sample/BedBugs.jpg",
    "/sample/Apparel.jpg",
    "/sample/SweetDreams.jpg",
    "/sample/BuzzBud.jpg",
    "/sample/Gassy.jpg",
    "/sample/fruits.jpg",
  ];

  const openModalHandler = (sampleSrc) => {
    setModalSample(sampleSrc);
    onOpen();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

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
        <MyHeading>Samples</MyHeading>
        <Grid
          gap='16px'
          gridTemplateColumns={{ base: "1fr 1fr", lg: "repeat(3,1fr)" }}
        >
          {sampleCopy.map((item) => (
            <Skeleton isLoaded={isLoaded} borderRadius='20px'>
              <Box
                as={motion.div}
                cursor='pointer'
                borderRadius='20px'
                key={item}
                maxW='640px'
                maxH={{ base: "200px", lg: "600px" }}
                overflow='hidden'
                pos='relative'
                role='group'
                onClick={() => openModalHandler(item)}
                boxShadow='0 2px 8px #0066FF'
              >
                <Image
                  loading='lazy'
                  alt='sample copy for client'
                  src={item}
                  _groupHover={{
                    filter: "brightness(.2)",
                  }}
                  transition='all .4s'
                />
                <Text
                  py='16px'
                  px={{ base: "0px", lg: "32px" }}
                  pos='absolute'
                  bottom='-100%'
                  left='50%'
                  transform='translateX(-50%)'
                  color='white'
                  transition='all .4s'
                  opacity={0}
                  _groupHover={{
                    bottom: "40px",
                    opacity: 1,
                  }}
                  fontSize={{ base: "16px", lg: "24px" }}
                >
                  Click to view
                </Text>
              </Box>
            </Skeleton>
          ))}
        </Grid>
      </SectionLayout>
    </>
  );
}

export default Samples;
