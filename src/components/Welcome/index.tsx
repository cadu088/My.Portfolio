import { Heading, Box, Text, Avatar } from "@chakra-ui/react";
import {
  animationContainer,
  itemAnimation,
  MotionBox,
} from "../../styles/animation";
import Animation from "../../assets/29522-space-tour.json";
import Lottie from "react-lottie";

export function Welcome() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
  };

  return (
    <MotionBox
      w="100%"
      // h="90vh"
      pt={[90, 90, 90, 120]}
      pb={[90, 90, 90, 100]}
      // bgGradient="linear(109.6deg, rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1%)"
      // bgImg="url(./images/giphyData.gif)"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      bg="gray.50"
      boxShadow="inner"
      alignItems={"center"}
      alignContent={"center"}
      display="flex"
      justifyContent={"center"}
      variants={animationContainer}
      initial="hidden"
      animate="visible"
      id="home"
    >
      <Box
        alignItems={"center"}
        alignContent={"center"}
        textAlign="center"
        paddingY={["0", "0", "0", "5"]}
        paddingX="5"
        // bg="gray.50"
        boxShadow="inner"
        // background="gray.800"
        // background="black"
        bgGradient="linear(310.6deg, #3D329B 10.2%, #000000 55.1%)"
        // bgImg="url(./images/giphyData.gif)"
        // bgRepeat={"no-repeat"}
        // bgSize={"100%"}
        // bgPosition={"center"}
        rounded="md"
        color="gray.50"
        w={["95%", "95%", "95%", "90%"]}
        maxH={["none", "none", "none", "600px"]}
        display={["block", "block", "flex", "flex"]}
        backdropFilter="auto"
        backdropBlur="10px"
      >
        <Box
          w={["100%", "100%", "100%", "100%"]}
          // ml={-10}
          // h={"100%"}
          // mb={["-10px", "-10px", "-10px", "0"]}
          justifyContent="left"
          // display="flex"
          // spacing={["4"]}
          // variants={itemAnimation}
          position={["relative", "relative", "fixed", "fixed"]}
          left={0}
          top={0}
          height={["100%", "100%", "120%", "120%"]}
          alignContent="start"
          display="grid"
        >
          <Lottie
            options={defaultOptions}
            style={{
              // width: "100%",
              // height: "100%",
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
        <Box w={["100%", "100%", "50%", "50%"]} h={"100%"} />
        <MotionBox
          w={["100%", "100%", "50%", "50%"]}
          h={"100%"}
          background="#0000005B"
          // background="black"
          rounded="md"
          p={5}
          boxShadow="dark-lg"
          backdropFilter="auto"
          backdropBlur="10px"
          variants={itemAnimation}
          marginY={10}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            // pt={}
            mb={2}
          >
            <Box display="flex" alignContent="center" justifyContent="center">
              <Avatar
                size="lg"
                name="Carlos Rodrigues"
                src="https://github.com/cadu088.png"
                borderWidth={1.1}
              />
              <Heading
                size="lg"
                fontSize={["20px", "20px"]}
                // mt="5"
                w="100%"
                textAlign={"left"}
                fontWeight="bold"
                alignSelf="center"
                ml={2}
                color="gray.200"
              >
                Carlos Rodrigues
                <Text
                  fontSize={["15px", "15px"]}
                  textAlign={"left"}
                  color="gray.400"
                >
                  Desenvolvedor Full Stack
                </Text>
              </Heading>
            </Box>
          </Box>
          <Heading
            size="lg"
            fontSize="30px"
            mt="5"
            w="100%"
            textAlign={"left"}
            fontWeight="bold"
          >
            Olá, seja muito bem-vindo(a) ao meu portifólio!
          </Heading>
          <Text fontSize="14px" textAlign={"justify"} mt={10}>
            Dei início na minha carreira como desenvolvedor a mais de dois anos
            onde tive a oportunidade de ingressar ainda no primeiro semestre de
            Sistemas de Informação na área. 👨‍💻
            <br />
            <br />
            Sempre em busca de novos desafios em projetos criativos e complexos,
            tenho uma ótima comunicação e pensamento analítico, além de muita
            vontade de aprender. 🚀
            <br />
            <br />
            Apaixonado por projetos que gerem impactos reais e positivos. 🌎
          </Text>
        </MotionBox>
      </Box>
    </MotionBox>
  );
}
