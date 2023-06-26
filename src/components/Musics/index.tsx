import {
  Alert,
  Heading,
  Box,
  Flex,
  Image,
  Stack,
  Button,
  Text,
  ButtonGroup,
  TabPanel,
  TabPanels,
  Tab,
  TabList,
  Tabs,
  Link,
} from "@chakra-ui/react";

import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import astronaut from "../../assets/127848-happy-spaceman.json";
import Lottie from "react-lottie";
import { Cards } from "../Cards";
import { IoOpenOutline } from "react-icons/io5";

export function Musics() {
  const defaultOptions = {
    loop: true,

    autoplay: true,

    animationData: astronaut,
  };

  return (
    <Box
      w="100%"
      // h="90vh"
      // pt={["20px", "20px", "20px", 50]}
      pb={[0, 0, 0, 50]}
      // bgGradient="linear(to-r, #434343, #000000)"
      bg="gray.50"
      // boxShadow="inner"
      alignItems={"center"}
      alignContent={"center"}
      display="flex"
      justifyContent={"center"}
    >
      <Box
        w={["100%", "100%", "100%", "90%"]}
        display={["block", "block", "block", "flex"]}
        justifyContent="space-between"
        p={5}
      >
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
        >
          <Lottie
            options={defaultOptions}
            style={{
              width: "60%",
              // height: "100%",
              cursor: "auto",
              top: 0,
              // backgroundColor: "red",

              // boxShadow: "10px 5px 5px black",
              // marginTop: "11%",
              margin: "auto",
              alignSelf: "center",
            }}
          />
          <Flex
            mt={["-30px", "-50px", "-50px", "-50px"]}
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            p={[2, 2, 2, 5]}
          >
            <Text
              fontSize={["45px", "70px", "80px", "80px"]}
              bgGradient="linear(310.6deg, #3D329B 10.2%, #000000 55.1%)"
              bgClip="text"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              textShadow="dark-lg"
              letterSpacing="10px"
            >
              MÚSICA?
            </Text>
            <Text
              fontSize="15px"
              textAlign={"center"}
              color="gray.800"
              letterSpacing="0px"
              fontWeight="500"
            >
              Enquanto você desce, por que não ouvir uma musiquinha para
              relaxar? 🤔 Na verdade, talvez eu seja um pouco viciado em música
              (🫥) e só queira mostrar isso, mas isso a gente vê depois. Põe para
              tocar e bora continuar o tour! 😝
            </Text>
          </Flex>
        </Flex>
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          h={["600px", "600px", "600px", "auto"]}
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          mt={[-10, -10, 5, 0]}
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/2t1d4ijnQecbOXBbY7oAdW?utm_source=generator"
            width="100%"
            height="80%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Flex>
      </Box>
    </Box>
  );
}
// rgba(61,245,167,1) 11.2%, rgba(9,111,224,1)
