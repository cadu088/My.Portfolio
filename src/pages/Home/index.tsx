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
      <div
        style={{
          display: "inline-block",
          position: "relative",
          width: "100%",
          height: "auto",
          // paddingBottom: "100%",
          verticalAlign: "middle",
          overflow: "hidden",
          backgroundColor: "#D1D2DC",
        }}
      >
        <svg
          viewBox="0 0 500 75"
          preserveAspectRatio="xMinYMin meet"
          style={{ marginTop: "-10px" }}
        >
          <path
            d="M0,60 C150,70 350,0 500,65 L500,00 L0,0 Z"
            style={{
              stroke: "none",
              fill: "#e4e4e4",
              filter: "drop-shadow(3px 3px 4px #0000002A)",
            }}
          ></path>
        </svg>
      </div>
      <Timeline />
      <div
        style={{
          display: "inline-block",
          position: "relative",
          width: "100%",
          height: "auto",
          // paddingBottom: "100%",
          verticalAlign: "middle",
          overflow: "hidden",
          backgroundColor: "#e4e4e4",
        }}
      >
        <svg
          viewBox="0 0 500 75"
          preserveAspectRatio="xMinYMin meet"
          style={{ marginTop: "-10px" }}
        >
          <path
            d="M0,60 C150,70 350,0 500,65 L500,00 L0,0 Z"
            style={{
              stroke: "none",
              fill: "#D1D2DC",
              filter: "drop-shadow(-3px -3px -4px #0000002A)",
            }}
          ></path>
        </svg>
      </div>
      <GitHub />
      <div
        style={{
          display: "inline-block",
          position: "relative",
          marginTop: "-1px",
          width: "100%",
          height: "auto",
          // paddingBottom: "100%",
          verticalAlign: "middle",
          overflow: "hidden",
          backgroundColor: "#584098",
        }}
      >
        <svg
          viewBox="0 0 500 75"
          preserveAspectRatio="xMinYMin meet"
          style={{ marginTop: "-10px" }}
        >
          <path
            d="M0,10 C150,70 350,20 500,65 L500,00 L0,0 Z"
            style={{
              stroke: "none",
              fill: "#e4e4e4",
              filter: "drop-shadow(3px 3px 4px #0000002A)",
              marginTop: "-10px",
            }}
          ></path>
        </svg>
      </div>
      <Musics />
      <div
        style={{
          display: "inline-block",
          position: "relative",
          marginTop: "-1px",
          width: "100%",
          height: "auto",
          // paddingBottom: "100%",
          verticalAlign: "middle",
          overflow: "hidden",
          backgroundColor: "#e4e4e4",
        }}
      >
        <svg
          viewBox="0 0 500 75"
          preserveAspectRatio="xMinYMin meet"
          style={{ marginTop: "-10px" }}
        >
          <path
            d="M0,10 C150,70 350,20 500,65 L500,00 L0,0 Z"
            style={{
              stroke: "none",
              fill: "#111112",
              filter: "drop-shadow(3px 3px 4px #0000002A)",
            }}
          ></path>
        </svg>
      </div>
      <Me />
    </Box>
  );
};

export default Home;
