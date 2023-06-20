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
} from "@chakra-ui/react";

import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import astronaut from "../../assets/91574-astronaut-illustration.json";
import Lottie from "react-lottie";
import { Cards } from "../Cards";
import dataProjects from "../../assets/data/projects.json";

export function Timeline() {
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
      display="block"
      justifyContent={"center"}
    >
      <Box w="100vw" pt={20} id="timeline" />
      <MotionBox
        w="100%"
        justifyContent="center"
        display="grid"
        variants={itemAnimation}
        initial="hidden"
        animate="visible"
      >
        <Box
          w={"250px"}
          margin="auto"
          mb={["-90px", "-100px", "-110px", "-110px"]}
          mt="-100px"
        >
          <Lottie
            options={defaultOptions}
            style={{
              height: "100%",
              width: "100%",
              cursor: "auto",
              top: 0,
              marginLeft: "5px",
              // backgroundColor: "red",

              // boxShadow: "10px 5px 5px black",
              // marginTop: "11%",
              alignSelf: "left",
            }}
          />
        </Box>
        <Text
          fontSize={["45px", "70px", "80px", "80px"]}
          bgGradient="linear(310.6deg, #3D329B 10.2%, #000000 55.1%)"
          bgClip="text"
          fontWeight="800"
          fontFamily="Inter, sans-serif"
          textShadow="dark-lg"
          letterSpacing="10px"
        >
          PROJETOS
        </Text>
      </MotionBox>
      <Box w="100%" display="inline-flex" justifyContent="center" mt={10}>
        <Flex maxW={["95%", "95%", "95%", "90%"]} justifyContent="space-around">
          <MotionBox
            bg="gray.100"
            // w="100%"
            borderRadius="md"
            boxShadow="inner"
            backdropFilter="auto"
            backdropBlur="10px"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            p={[3, "none", "none", "none"]}
            paddingBottom="none"
            variants={animationContainer}
            initial="hidden"
            animate="visible"
          >
            {dataProjects.map((item, index) => (
              <Cards key={index} data={item} />
            ))}
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  );
}
// rgba(61,245,167,1) 11.2%, rgba(9,111,224,1)
