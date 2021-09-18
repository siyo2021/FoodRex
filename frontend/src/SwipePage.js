import {
	Box,
	Button,
	Flex,
	Text,
	Circle,
	HStack,
	Image,
	Spacer,
} from "@chakra-ui/react";
import PageWrapper from "./components/PageWrapper";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import dislike from "./assets/dislike.png";
import like from "./assets/like.png";

function SwipePage() {
	const [pic, setPic] = useState(
		"https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza3+srgb..jpg"
	);
	const [description, setDescription] = useState("Placeholder text");
	const [swipes, setSwipes] = useState("1");

	const handlePicChange = (e) => setPic(e.target.value);
	const handleDescriptionChange = (e) => setDescription(e.target.value);
	const handleSwipeChange = (e) => setSwipes(swipes+1);
	let circs = [];

	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
		console.log(swipes);
		handleSwipeChange(swipes + 1);
		console.log(swipes);
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + " left the screen");
	};

	circs = [];
	let notdone = 10 - swipes;
	for (var i = 0; i < swipes; i++) {
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
					src={pic}
					alt="Pizza"
					mt={30}
				/>
			</TinderCard>
			<Box bg="gray.300" mb={30} w="500px" borderBottomRadius="md" p="3">
				{description}
			</Box>
			<HStack spacing="3">{circs}</HStack>
			<Flex w="500px">
				<Button borderRadius="full" h="120px" w="120px" bg="#f59681">
					<Image
						src={dislike}
						alt="Dislike"
						boxSize="90px"
						m={2}
						p={2}
					/>
				</Button>
				<Spacer />
				<Button borderRadius="full" h="120px" w="120px" bg="#89c58b">
					<Image src={like} alt="Like" boxSize="90px" m={2} p={2} />
				</Button>
				<Button onClick={handleSwipeChange}>Hi</Button>
			</Flex>
		</PageWrapper>
	);
}
export default SwipePage;
