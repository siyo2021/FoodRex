import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import RecPage from "./RecPage";
import SwipePage from "./SwipePage";
import Landing from "./Landing.js";
import Footer from "./components/Footer";
import theme from "./theme.js";
import "@fontsource/alegreya-sans";
import "@fontsource/alegreya-sans-sc";
import "@fontsource/chau-philomene-one";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<SwipePage />
			<Footer />
		</ChakraProvider>
	);
}

export default App;
