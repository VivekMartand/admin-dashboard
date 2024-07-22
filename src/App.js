// Import necessary components and hooks
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { ColorModeSwitcher, useMode } from './theme';
import Navbar from './scenes/global/Navbar';
import { ColorModeScript } from "@chakra-ui/react";

function App() {
    const [theme] = useMode();

    return (
        <ChakraProvider theme={theme}>
            {/* Ensure the color mode matches the system preference or user choice */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <CSSReset />
            <div className='app'>
                <div className='content'>
                    <Navbar />
                </div>
            </div>
        </ChakraProvider>
    );
}

export default App;
