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
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/swipe" component={SwipePage} />
				<Route exact path="/recommendation" component={RecPage} />
				<Footer />
			</Switch>
		</ChakraProvider>
	);
}

export default App;
