import {
  Box,
  Flex,
  Progress,
  Spinner,
  Stack,
  Text,
  useToast,
  Heading,
  Image,
  Button,
  Avatar,
} from "@chakra-ui/react";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import history from "../../routes/history";

import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
  MotionButton,
} from "../../styles/animation";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { MdArrowForwardIos } from "react-icons/md";

const Hub: React.FC = () => {
  function openLink(url: string) {
    window.open(url);
  }
  return (
    <Box
      justifyContent="center"
      w="100vw"
      h="100vh"
      bgGradient="linear(109.6deg, rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1%)"
      alignContent="center"
      alignItems="center"
      display="grid"
    >
      <MotionBox
        display="grid"
        boxShadow="dark-lg"
        backdropFilter="auto"
        backdropBlur="6px"
        background="#0000005B"
        p={5}
        borderRadius={8}
        ml={3}
        mr={3}
        variants={animationContainer}
        initial="hidden"
        animate="visible"
      >
        <MotionBox
          display="flex"
          alignContent="center"
          justifyContent="center"
          mb={10}
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
        >
          <Avatar
            size="xl"
            name="Carlos Rodrigues"
            src="https://github.com/cadu088.png"
            borderWidth={1.1}
          />
          <Heading
            size="lg"
            fontSize={["22px", "30px"]}
            mt="5"
            w="100%"
            textAlign={"left"}
            fontWeight="bold"
            alignSelf="center"
            ml={5}
          >
            Carlos Rodrigues
            <Text fontSize={["sm", "md"]} textAlign={"left"} color="gray.900">
              Desenvolvedor Full Stack
            </Text>
          </Heading>
        </MotionBox>
        <MotionButton
          borderColor="white"
          color="black"
          _hover={{
            color: "black",
            borderColor: "black",
            bgGradient:
              "linear(209.6deg, rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1%)",
            boxShadow: "dark-lg",
          }}
          borderRadius={8}
          variant="solid"
          onClick={() => openLink("https://github.com/cadu088")}
          mb={3}
          leftIcon={<AiFillGithub size={20} />}
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
        >
          GitHub
        </MotionButton>
        <MotionButton
          borderColor="white"
          color="black"
          _hover={{
            color: "black",
            borderColor: "black",
            bgGradient:
              "linear(209.6deg, rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1%)",
            boxShadow: "dark-lg",
          }}
          borderRadius={8}
          variant="solid"
          onClick={() =>
            openLink("https://www.linkedin.com/in/carlosrodrigues088/")
          }
          mb={3}
          leftIcon={<AiFillLinkedin size={20} />}
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
        >
          LinkedIn
        </MotionButton>
        <MotionButton
          borderColor="white"
          color="black"
          _hover={{
            color: "black",
            borderColor: "black",
            bgGradient:
              "linear(209.6deg, rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1%)",
            boxShadow: "dark-lg",
          }}
          borderRadius={8}
          variant="solid"
          onClick={() =>
            openLink(
              "https://instagram.com/carlosrs088?igshid=MzNlNGNkZWQ4Mg=="
            )
          }
          leftIcon={<AiFillInstagram size={20} />}
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
        >
          Instagram
        </MotionButton>

        <MotionButton
          borderColor="gray.800"
          color="white"
          bg="gray.800"
          _hover={{
            color: "black",
            borderColor: "black",
            bgGradient: "linear(to-r, #EBD235, #FF2525)",
            boxShadow: "dark-lg",
          }}
          borderRadius={8}
          variant="solid"
          onClick={() => history.push("/")}
          mt={10}
          rightIcon={<MdArrowForwardIos />}
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
        >
          Portfólio
        </MotionButton>
      </MotionBox>
    </Box>
  );
};

export default Hub;
// background-image: linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );
