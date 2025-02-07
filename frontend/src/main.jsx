
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './Context/AuthContext';

createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </AuthProvider>
    </ChakraProvider>

)
