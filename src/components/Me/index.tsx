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
} from "@chakra-ui/react";

import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import astronaut from "../../assets/110798-space.json";
import Lottie from "react-lottie";
import { Cards } from "../Cards";
import { IoOpenOutline } from "react-icons/io5";

export function Me() {
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
      pb={50}
      pt={50}
      // bgGradient="linear(to-r, #434343, #000000)"
      // bgGradient="linear(to-t, #584098,gray.800)"
      bgColor="gray.50"
      // boxShadow="inner"
      alignItems={"center"}
      alignContent={"center"}
      display="flex"
      justifyContent={"center"}
      // mt={10}
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
              width: "70%",
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
            fontSize={["35px", "42px", "80px", "80px"]}
            fontWeight="800"
            fontFamily="Inter, sans-serif"
            textShadow="dark-lg"
            letterSpacing="10px"
            mt={["-30px", "-50px", "-100px", "-100px"]}
            color="gray.800"
          >
            SOBRE MIM
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
            justifyContent="space-between"
            w={["100%", "80%", "80%", "80%"]}
            // h="100%"
            // bg="#584098"
            bg="gray.800"
            //bgGradient="linear(to-t, #584098,gray.800)"
            boxShadow="inner"
            borderRadius="12px"
            p={5}
          >
            <Box
              display="flex"
              alignContent="center"
              justifyContent="center"
              // position={["fixed", "relative"]}
              // visibility={["hidden", "visible"]}
              // left={5}
              // bg="gray.50"
              // p={2}
              // borderRadius={8}
              // mt={4}
              as="a"
              href="#home"
            >
              <Avatar
                size="lg"
                name="Carlos Rodrigues"
                src="https://github.com/cadu088.png"
                // borderWidth={1.1}
              />
              <Heading
                size="lg"
                fontSize={["15px", "15px"]}
                // mt="5"
                w="100%"
                textAlign={"left"}
                fontWeight="bold"
                alignSelf="center"
                ml={2}
                color="gray.100"
              >
                Carlos Rodrigues
                <Text
                  fontSize={["15px", "10px"]}
                  textAlign={"left"}
                  color="gray.200"
                >
                  Desenvolvedor Full Stack
                </Text>
              </Heading>
            </Box>
            <Box color="gray.50" fontFamily="Inter, sans-serif">
              <Divider mt={5} />
              <Text fontSize="14px" textAlign={"justify"} mt={5}>
                Me chamo Carlos e tenho 20 anos. Atualmente, sou estudante de
                Sistemas de Informação no UNIARAXA (2021-2024). Foi durante o
                primeiro período da faculdade que tive meu primeiro contato com
                o desenvolvimento. Ao final desse período, fui selecionado para
                uma vaga de estágio em desenvolvimento. Após seis meses de
                estágio, fui contratado como desenvolvedor, e desde então atuo
                nessa área.{" "}
              </Text>
              <Text fontSize="14px" textAlign={"justify"} mt={5}>
                Sou uma pessoa dinâmica que sempre teve interesse em tecnologia
                e inovação. Sou daquele tipo de pessoa que prefere tentar ao
                invés de dizer que não consegue, sempre buscando maneiras de
                agregar valor em tudo o que faço.{" "}
              </Text>
              <Text fontSize="14px" textAlign={"justify"} mt={5}>
                Acredito que a tecnologia e a educação são os pilares para o
                avanço da sociedade, e um dos motivos pelos quais escolhi essa
                área. Além disso, também não podemos negar os outros benefícios
                que ela oferece.{" "}
              </Text>
              <Text fontSize="14px" textAlign={"justify"} mt={5}>
                Sou uma pessoa proativa, capaz de compreender problemas
                independentemente do seu nível de complexidade. Sou apaixonado
                por lógica e desenvolvimento, e possuo habilidades de
                comunicação e aprendizado rápido.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
// rgba(61,245,167,1) 11.2%, rgba(9,111,224,1)
