import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import RecPage from "./RecPage";
import theme from "./theme.js";
import "@fontsource/alegreya-sans";
import "@fontsource/alegreya-sans-sc";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<RecPage />
		</ChakraProvider>
	);
}

export default App;
