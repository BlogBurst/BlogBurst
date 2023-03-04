import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ColorModeSwitcher from "./ColorModeSwitcher";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <ColorModeSwitcher/>
    </ChakraProvider>
    
  </React.StrictMode>
);
