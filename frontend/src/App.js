import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import RecPage from "./RecPage";
import theme from "./theme.js";
import "@fontsource/raleway/400.css";
import "@fontsource/alegreya-sans";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<RecPage />
		</ChakraProvider>
	);
}

export default App;
