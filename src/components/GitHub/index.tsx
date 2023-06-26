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
import astronaut from "../../assets/146073-astronaut-landing-on-the-moon.json";
import Lottie from "react-lottie";
import { Cards } from "../Cards";
import { IoOpenOutline } from "react-icons/io5";

export function GitHub() {
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
              width: "80%",
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
          <Text
            fontSize={["45px", "70px", "80px", "80px"]}
            bgGradient="linear(310.6deg, #3D329B 10.2%, #000000 55.1%)"
            bgClip="text"
            fontWeight="800"
            fontFamily="Inter, sans-serif"
            textShadow="dark-lg"
            letterSpacing="10px"
            mt={["-30px", "-50px", "-100px", "-50px"]}
          >
            GITHUB
            <Text
              fontSize="15px"
              textAlign={"center"}
              color="gray.400"
              letterSpacing="0px"
              fontWeight="500"
              as="a"
              href="https://github.com/cadu088"
            >
              github/cadu088
            </Text>
          </Text>
        </Flex>
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          mt={[10, 10, 10, 0]}
        >
          <Flex
            flexDirection="column"
            display="flex"
            justifyContent="space-around"
            w={["100%", "80%", "80%", "55%"]}
            h={["120%", "100%", "100%", "100%"]}
          >
            <Image
              src={
                "https://github-readme-streak-stats.herokuapp.com/?user=cadu088&include_all_commits=true&hide_border=true"
              }
              alt="gitHubContri"
              borderRadius="mg"
              w="100%"
            />
            <Image
              src={
                "https://github-readme-stats.vercel.app/api?username=cadu088&show_icons=true&include_all_commits=true&count_private=true&hide_border=true"
              }
              alt="gitHubContri"
              borderRadius="mg"
              w="100%"
            />
            <Image
              src={
                "https://github-readme-stats.vercel.app/api/top-langs/?username=cadu088&layout=donut"
              }
              alt="gitHubContri"
              borderRadius="mg"
              // boxShadow="md"
              w="100%"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
// rgba(61,245,167,1) 11.2%, rgba(9,111,224,1)
