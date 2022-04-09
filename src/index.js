import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);


//7f3028bade7c761d8026fb76fe57289beceebfce