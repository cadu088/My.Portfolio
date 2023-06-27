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
export function Footer() {
  const defaultOptions = {
    loop: true,

    autoplay: true,

    animationData: astronaut,
  };

  return (
    <Box
      w="100%"
      pb={50}
      pt={50}
      bgColor="gray.50"
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
            bg="gray.100"
            //bgGradient="linear(to-t, #584098,gray.800)"
            boxShadow="md"
            borderRadius="12px"
            p={5}
          >
            <Box display="flex" alignContent="center" justifyContent="center">
              <Avatar
                size="lg"
                name="Carlos Rodrigues"
                src="https://github.com/cadu088.png"
              />
              <Heading
                size="lg"
                fontSize={["15px", "15px"]}
                w="100%"
                textAlign={"left"}
                fontWeight="bold"
                alignSelf="center"
                ml={2}
                color="gray.800"
              >
                Carlos Rodrigues
                <Text
                  fontSize={["15px", "10px"]}
                  textAlign={"left"}
                  color="gray.400"
                >
                  Desenvolvedor Full Stack
                </Text>
              </Heading>
            </Box>
            <Divider marginY={5} />
            <Text
              fontSize="15px"
              fontWeight="800"
              fontFamily="Inter, sans-serif"
              textShadow="dark-lg"
              // letterSpacing="10px"
              textAlign="justify"
              color="gray.800"
            >
              Por enquanto, é isso. Ainda estou trabalhando em ideias para
              aprimorar esta página. Caso você tenha alguma sugestão ou queira
              compartilhar algo, fique à vontade para entrar em contato comigo
              através dos meios disponíveis na aba &quot;Contato&quot;. 🚀
              <br />
              Agradeço antecipadamente pelo seu interesse.
              <br />
              <br />
              <Text color="gray.700">Abraços, Carlos Rodrigues. 🤗</Text>
            </Text>
          </Flex>
        </Flex>
        <Flex
          w={["100%", "100%", "100%", "40%"]}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
        >
          <Text
            fontSize={["35px", "42px", "80px", "80px"]}
            fontWeight="800"
            fontFamily="Inter, sans-serif"
            textShadow="dark-lg"
            letterSpacing="10px"
            color="gray.800"
          >
            FIM.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
// rgba(61,245,167,1) 11.2%, rgba(9,111,224,1)
