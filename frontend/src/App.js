import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import RecPage from "./RecPage";
import Footer from "./components/Footer";
import theme from "./theme.js";
import "@fontsource/alegreya-sans";
import "@fontsource/alegreya-sans-sc";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<RecPage />
			<Footer />
		</ChakraProvider>
	);
}

export default App;
