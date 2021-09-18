import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import RecPage from "./RecPage";

function App() {
	return (
		<ChakraProvider>
			<RecPage />
		</ChakraProvider>
	);
}

export default App;
