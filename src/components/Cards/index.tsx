import {
  Box,
  Image,
  Stack,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { Slider } from "../Slider";

type dataInfo = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gitHub: string;
  visualData: string[];
  iframe: string;
  text: string;
  cover: string;
};

interface cardProps {
  data: dataInfo;
}

export function Cards({ data }: cardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function openLink(url: string) {
    window.open(url);
  }

  function handleCardClick() {
    if (data.visualData.length <= 0 && data.iframe === "") {
      openLink(data.gitHub);
    } else {
      onOpen();
    }
  }

  const btnRef = React.useRef(null);
  return (
    <>
      <MotionBox
        h={["auto", "auto", "200px", "200px"]}
        w={["100%", "100%", "600px", "600px"]}
        marginY={5}
        flexGrow="5"
        variants={itemAnimation}
        initial="hidden"
        animate="visible"
        // bg="red"
      >
        <Box
          borderRadius="md"
          boxShadow="lg"
          display={["block", "block", "flex", "flex"]}
          h={["auto", "auto", "200px", "200px"]}
          w={["100%", "100%", "600px", "600px"]}
          margin="auto"
          _hover={{
            boxShadow: "dark-lg",
          }}
          cursor="pointer"
          title="Saiba mais"
          onClick={() => handleCardClick()}
        >
          <Image
            src={data.cover}
            alt="Green double couch with wooden legs"
            borderTopLeftRadius="lg"
            borderTopRightRadius={["lg", "lg", "none", "none"]}
            borderBottomLeftRadius={["none", "none", "lg", "lg"]}
            h={["auto", "auto", "200px", "200px"]}
            w={["100%", "100%", "400px", "400px"]}
          />
          <Box
            h={["auto", "auto", "200px", "200px"]}
            w={["100%", "100%", "300px", "300px"]}
            borderTopRightRadius={["none", "none", "lg", "lg"]}
            borderBottomRightRadius="lg"
            borderBottomLeftRadius={["lg", "lg", "none", "none"]}
            bg="white"
            p={2}
            color="gray.800"
          >
            <Stack spacing="3" h="144px">
              <Heading size="md">{data.title}</Heading>
              <Text textAlign="justify" color="gray.600" paddingRight={2}>
                {data.description}
              </Text>
            </Stack>
            {data.technologies.length > 0 && (
              <Box
                bottom={0}
                w="100%"
                h="40px"
                bg="gray.100"
                boxShadow="inner"
                borderRadius="md"
                p={2}
                display="flex"
                justifyContent="space-evenly"
              >
                {data.technologies.map((item, index) => (
                  <Image
                    src={"./images/Logos/" + item + ".png"}
                    alt={item}
                    h="100%"
                    title={item}
                    key={index}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </MotionBox>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        isCentered
        scrollBehavior="outside"
        size="6xl"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(8px) hue-rotate(90deg)"
          title="Fechar?"
        />
        <ModalContent
          bg="blackAlpha.300"
          backdropFilter="auto"
          backdropBlur="50px"
          boxShadow="dark-lg"
          color="black"
        >
          <ModalHeader>{`Detalhes | ${data.title}`}</ModalHeader>
          <ModalCloseButton title="Fechar" />
          <ModalBody>
            <Box
              display={["block", "block", "flex", "flex"]}
              flexDirection={["column", "column", "row-reverse", "row-reverse"]}
              mb={[0, 0, 5, 5]}
            >
              <Box
                w={["100%", "100%", "35%", "35%"]}
                ml={["0px", "0px", "20px", "20px"]}
                borderRadius="8px"
                mb={["20px", "20px", "0px", "0px"]}
                h={["40vh", "40vh", "450px", "450px"]}
              >
                <Box
                  flexDirection="column"
                  display="flex"
                  justifyContent="space-between"
                  w="100%"
                  h="100%"
                >
                  <Stack spacing="3">
                    <Heading size="lg">{data.title}</Heading>
                    <Text textAlign="justify" color="gray.50" paddingRight={2}>
                      {data.description}
                    </Text>
                  </Stack>
                  <Box
                    w="100%"
                    h="40%"
                    bgImg={`url(${data.cover})`}
                    bgRepeat={"no-repeat"}
                    bgSize={"cover"}
                    bgPosition={"center"}
                    borderRadius="md"
                    boxShadow="inner"
                    title="Repositorio GitHub"
                    cursor="pointer"
                  >
                    <Flex
                      bg="blackAlpha.300"
                      backdropFilter="auto"
                      backdropBlur="2px"
                      w="100%"
                      h="100%"
                      borderRadius="md"
                      boxShadow="inner"
                      color="gray.50"
                      justifyContent="center"
                      alignItems="center"
                      _hover={{
                        bg: "blackAlpha.500",
                      }}
                      title="Repositorio GitHub"
                      cursor="pointer"
                      as="a"
                      onClick={() => openLink(data.gitHub)}
                    >
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                      >
                        <VscGithub size="20%" />
                        <Text color="gray.100">
                          {data.gitHub.slice(19, data.gitHub.length)}
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  {data.technologies.length > 0 && (
                    <Box
                      bottom={0}
                      w="100%"
                      h="40px"
                      bg="gray.100"
                      boxShadow="inner"
                      borderRadius="md"
                      p={2}
                      display="flex"
                      justifyContent="space-evenly"
                    >
                      {data.technologies.map((item, index) => (
                        <Image
                          src={"./images/Logos/" + item + ".png"}
                          alt={item}
                          h="100%"
                          title={item}
                          key={index}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
              <Box
                w={["100%", "100%", "65%", "65%"]}
                h={[
                  data.visualData.length > 0 ? "auto" : "35vh",
                  data.visualData.length > 0 ? "auto" : "35vh",
                  "450px",
                  "450px",
                ]}
                borderRadius="md"
                // p={3}
                boxShadow="inner"
                mb={[5, 5, 0, 0]}
              >
                {data.visualData.length > 0 ? (
                  <Box w="100%" height="100%">
                    <Slider data={data.visualData} />
                  </Box>
                ) : (
                  <iframe
                    src={data.iframe}
                    // allowFullScreen=""
                    title="Publicação incorporada"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ borderRadius: "8px" }}
                  ></iframe>
                )}
              </Box>
            </Box>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
