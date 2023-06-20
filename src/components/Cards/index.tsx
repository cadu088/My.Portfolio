import { Box, Image, Stack, Text, Heading } from "@chakra-ui/react";
import {
  animationContainer,
  itemAnimation,
  MotionFlex,
  MotionStack,
  MotionBox,
} from "../../styles/animation";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

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
  return (
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
          bg="gray.50"
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
  );
}
