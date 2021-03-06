import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		orange: "#fca008",
		black: "#000000",
		white: "#ffffff",
		gray: {
			100: "#f6f6f6",
			200: "#49453c",
			300: "#f7f7f7",
			400: "#c4c4c4",
			500: "#4a443c",
		},
		green: "#c6d44c",
		red: "#ee3e17",
		brownGray: "#B5B4B1",
	},
	fonts: {
		body: "Alegreya Sans",
		heading: "Chau Philomene One",
		mono: "Menlo, monospace",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.50rem",
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	lineHeights: {
		normal: "normal",
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: "2",
		3: ".75rem",
		4: "1rem",
		5: "1.25rem",
		6: "1.5rem",
		7: "1.75rem",
		8: "2rem",
		9: "2.25rem",
		10: "2.5rem",
	},
	letterSpacings: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em",
	},
});
export default theme;
