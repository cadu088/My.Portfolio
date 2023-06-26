import { Box } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Welcome } from "../../components/Welcome";
import { Timeline } from "../../components/Timeline";
import { GitHub } from "../../components/GitHub";
import { Musics } from "../../components/Musics";
import { Me } from "../../components/Me";

const Home: React.FC = () => {
  return (
    <Box
      justifyContent="center"
      w="100vw"
      h="100vh"
      fontFamily="Inter, sans-serif"
    >
      <Header />
      <Welcome />
      <Timeline />
      <GitHub />
      <Musics />
      <Me />
    </Box>
  );
};

export default Home;
