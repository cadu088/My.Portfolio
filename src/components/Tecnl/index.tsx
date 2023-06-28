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
  Avatar,
  Divider,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";

import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import astronaut from "../../assets/128778-space.json";
import Lottie from "react-lottie";
import { Cards } from "../Cards";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { AiFillBulb, AiOutlineHeatMap } from "react-icons/ai";
export function Tecnl() {
  const defaultOptions = {
    loop: true,

    autoplay: true,

    animationData: astronaut,
  };

  return (
    <Box
      w="100%"
      pb={50}
      // pt={50}
      bgGradient="linear(to-t, gray.800, blue.500)"
      alignItems={"center"}
      alignContent={"center"}
      display="flex"
      justifyContent={"center"}
    >
      <Box
        w={["100%", "100%", "100%", "90%"]}
        display={["block", "block", "block", "flex"]}
        justifyContent="space-between"
        flexDirection={["row", "row", "row", "row-reverse"]}
        p={5}
      >
        <Flex
          w={["100%", "100%", "100%", "60%"]}
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          mt={[10, 10, 10, 0]}
        >
          <Flex
            flexDirection="column"
            display="flex"
            justifyContent="space-between"
            w={["100%", "80%", "80%", "80%"]}
            // h="100%"
            // bg="#584098"
            bg="gray.50"
            //bgGradient="linear(to-t, #584098,gray.800)"
            boxShadow="md"
            borderRadius="12px"
            p={5}
          >
            <Text
              fontSize={["35px", "42px", "80px", "80px"]}
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              textShadow="dark-lg"
              letterSpacing="10px"
              color="gray.800"
            >
              TECH
            </Text>
            <Box color="gray.800" fontFamily="Inter, sans-serif">
              <Text fontSize="14px" textAlign={"justify"} mt={5}>
                Durante a minha experiência na faculdade, pude explorar uma
                ampla gama de tecnologias e frameworks. Acredito firmemente que
                um sólido conhecimento em lógica e programação orientada a
                objetos é fundamental, pois a escolha da linguagem de
                programação adequada depende das necessidades específicas,
                permitindo uma transição mais suave de acordo com a semântica
                adotada. A seguir, apresento algumas das tecnologias com as
                quais tive maior uso até o momento.
              </Text>
            </Box>
            <Box
              color="gray.800"
              fontFamily="Inter, sans-serif"
              fontWeight="800"
              mt={5}
            >
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={AiOutlineHeatMap} color="blue.500" />
                  React, React Native e Next
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineHeatMap} color="blue.500" />
                  .NET e ASP.NET
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineHeatMap} color="blue.500" />
                  NodeJS
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineHeatMap} color="blue.500" />
                  SQL
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Flex>
        <Flex
          w={["100%", "100%", "100%", "40%"]}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
          mt={[10, 10, 10, 0]}
        >
          <Lottie
            options={defaultOptions}
            style={{
              width: "90%",
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
        </Flex>
      </Box>
    </Box>
  );
}
// rgba(61,245,167,1) 11.2%, rgba(9,111,224,1)
