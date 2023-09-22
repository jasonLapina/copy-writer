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
    primary: "#0066FF",
    secondary: "#4790e7",
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
