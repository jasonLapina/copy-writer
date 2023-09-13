import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
