import { Box, Button, VStack, Text, Circle, HStack, Image } from "@chakra-ui/react";
import PageWrapper from "./components/PageWrapper";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";

function SwipePage() {
	let circs = [];
	let done = 2;
	let notdone = 10 - done;
	for (var i = 0; i < done; i++) {
		circs.push(
			<Circle size="15px" bg="green" color="white">
				{" "}
			</Circle>
		);
	}
	for (i = 0; i < notdone; i++) {
		circs.push(
			<Circle size="15px" bg="gray.300" color="white">
				{" "}
			</Circle>
		);
	}

	return (
		<PageWrapper>
			<Text align="center" fontSize="xl" mt="50">
				Swipe left if you like the food, or swipe right if you don't.
			</Text>
			<Text align="center" fontSize="xl">
				Swipe through at least 10 images to get your recommendation!
			</Text>
			<Image
				boxSize="500px"
				objectFit="cover"
				src="https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza3+srgb..jpg"
				alt="Pizza"
                mt={30}
			/>
			<Box bg="gray.300" mb={30} w="500px" borderBottomRadius="md" p="3">Placeholder text</Box>
			<HStack spacing="3">{circs}</HStack>
		</PageWrapper>
	);
}
export default SwipePage;
