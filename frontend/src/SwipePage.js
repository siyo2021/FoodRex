import {
	Box,
	Button,
	Flex,
	Text,
	Circle,
	HStack,
	Image,
    Spacer
} from "@chakra-ui/react";
import PageWrapper from "./components/PageWrapper";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import dislike from "./assets/dislike.png";
import like from "./assets/like.png";

const onSwipe = (direction) => {
	console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
	console.log(myIdentifier + " left the screen");
};

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
			<Circle size="15px" bg="gray.400" color="white">
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
			<TinderCard
				onSwipe={onSwipe}
				onCardLeftScreen={() => onCardLeftScreen("fooBar")}
				preventSwipe={["up", "down"]}
			>
				<Image
					boxSize="500px"
					objectFit="cover"
					src="https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza3+srgb..jpg"
					alt="Pizza"
					mt={30}
				/>
			</TinderCard>
			<Box bg="gray.300" mb={30} w="500px" borderBottomRadius="md" p="3">
				Placeholder text
			</Box>
			<HStack spacing="3">{circs}</HStack>
            <Flex w="500px">
			<Button borderRadius="full" h="120px" w="120px" bg="#f59681">
				<Image src={dislike} alt="Dislike" boxSize="90px" m={2} p={2} />
			</Button>
            <Spacer />
			<Button borderRadius="full" h="120px" w="120px" bg="#89c58b">
				<Image src={like} alt="Like" boxSize="90px" m={2} p={2} />
			</Button>
            </Flex>
		</PageWrapper>
	);
}
export default SwipePage;
