import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#3f88c5",
      400: "#65a0d1",
      700: "#326d9e",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
