import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Image,
  HStack,
  Avatar,
  Text,
  Heading,
} from "@chakra-ui/react";

export function Header() {
  function scroll(selector: string) {
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <Flex
      w={["100vw"]}
      // h="6vh"
      bg="gray.50"
      alignContent="center"
      justifyContent="center"
      // borderBottomLeftRadius={[0, 100]}
      // borderBottomRightRadius={[0, 100]}
      alignSelf="center"
      margin="auto"
      position="fixed"
      zIndex="999"
      top={0}
      boxShadow="md"
      // paddingX={10}
      paddingY={3}
    >
      <Box
        display="flex"
        // bg="red"
        w={["95%", "90%"]}
        justifyContent="space-between"
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
          as="button"
          onClick={() => scroll("#home")}
        >
          <Avatar
            size="md"
            name="Carlos Rodrigues"
            src="https://github.com/cadu088.png"
            borderWidth={1.1}
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
            position={["fixed", "relative"]}
            visibility={["hidden", "visible"]}
            color="gray.700"
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
        <HStack
          as="header"
          h={"60%"}
          // w={"90%"}
          //bg="blue"
          alignSelf="center"
          alignContent="space-between"
          alignItems="center"
          spacing={["4", "6"]}
          fontWeight="light"
          fontSize="smaller"
          color="gray.800"
          mr={5}
        >
          <Box as="button" onClick={() => scroll("#me")}>
            Sobre mim
          </Box>
          <Box as="button" onClick={() => scroll("#timeline")}>
            Projetos
          </Box>
          <Box as="a" href="/hub">
            Contato
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}
