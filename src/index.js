import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Custom } from './Components/Context';

const root = createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <Custom>
      <div style={{ backgroundColor: "lightsteelblue" }}>
        <App/>
      </div>
    </Custom>
  </ChakraProvider>
);
