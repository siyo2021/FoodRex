import { Button, VStack, Text, Circle } from "@chakra-ui/react";

function Dots() {
	var indents = [];
	for (var i = 0; i < 10; i++) {
		indents.push(<Circle bg="tomato"/>);
	}
	return indents;
}

function ProgressBar() {
	return <div>{Dots()}</div>;
}

export default ProgressBar;
