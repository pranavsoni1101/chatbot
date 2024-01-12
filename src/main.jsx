import * as React from 'react'
import Home from './App';
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
)