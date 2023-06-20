import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/styles/theme";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./routes/history";

// import Error from '../pages/error';

export const App: React.FC = () => (
  <Router history={history}>
    <ChakraProvider theme={theme}>
      <Box
        // overflow="hidden"
        height="100vh"
        width="100vw"
        scrollBehavior={"smooth"}
      >
        <Routes />
      </Box>
    </ChakraProvider>
  </Router>
);
