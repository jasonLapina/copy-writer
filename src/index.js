import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AOS from "aos";

import "aos/dist/aos.css";
import "@fontsource/sriracha";

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
  fonts: {
    heading: `'Sriracha', sans-serif`,
    body: `'Sriracha', sans-serif`,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
