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
import Header from "./components/Header";
import RecFooter from "./components/RecFooter";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import dislike from "./assets/dislike.png";
import like from "./assets/like.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SwipePage(props) {
	const history = useHistory();
	const [swipes, setSwipes] = useState(1);
	const [items, setItems] = useState([]);

	let circs = [];

	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
		console.log(swipes);
		// left = -1, right = 1
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + " left the screen");
		console.log(swipes)
		setSwipes((swipes) => swipes + 1);
		if (swipes === 10) {
			const path = "/recommendation";
			console.log(path);
			history.push(path);
		}
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


	useEffect(() => {
		const headers = {
			"Content-Type": "application/json",
		};
		axios
			.get(`https://htn-foodrex.uc.r.appspot.com/items`, { headers })
			.then(async (result) => {
				console.log(result);
				if (result.status === 200) {
					setItems(await result.data);
					console.log(result.data);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<PageWrapper>
			<Header />
			<Text align="center" fontSize="xl" mt="0">
				Swipe left if you like the food, or swipe right if you don't.
			</Text>
			<Text align="center" fontSize="xl" mb="45px">
				Swipe through at least 10 images to get your recommendation!
			</Text>
			<Box width="100%" mb="33px">
				<Box className="cardContainer">
					{items.map((item) => (
						<TinderCard
							onSwipe={onSwipe}
							onCardLeftScreen={() =>
								onCardLeftScreen(item.categories)
							}
							preventSwipe={["up", "down"]}
						>
							<Image
								boxSize="500px"
								objectFit="cover"
								src={item?.link}
								alt="Pizza"
								mt={30}
								margin="auto"
							/>
						</TinderCard>
					))}
				</Box>
				<Box
					bg="gray.300"
					mb={30}
					w="500px"
					borderBottomRadius="md"
					p="3"
					fontSize="md"
					margin="auto"
				>
					<Flex justifyContent="spaceBetween">
						<Text>Placeholder text</Text>
						<Image
							src="../arrow.png"
							alt="An arrow pointing downwards"
							boxSize="8"
							ml="auto"
							mr="0"
						/>
					</Flex>
				</Box>
			</Box>
			<Box width="100%" textAlign="center">
				<Box width="258px" margin="auto" mb="50px">
					<HStack spacing="3">{circs}</HStack>
				</Box>
				<Flex w="500px" margin="auto">
					<Button
						borderRadius="full"
						h="120px"
						w="120px"
						bg="#f59681"
						ml="63px"
						onClick={() =>
							onCardLeftScreen(items[swipes-1].categories)
						}
					>
						<Image
							src={dislike}
							alt="Dislike"
							boxSize="90px"
							m={2}
							p={2}
						/>
					</Button>
					<Spacer />
					<Button
						borderRadius="full"
						h="120px"
						w="120px"
						bg="#89c58b"
						mr="63px"
						onClick={() =>
							onCardLeftScreen(items[swipes-1].categories)
						}
					>
						<Image
							src={like}
							alt="Like"
							boxSize="90px"
							m={2}
							p={2}
						/>
					</Button>
				</Flex>
			</Box>
			<RecFooter />
		</PageWrapper>
	);
}
export default SwipePage;
