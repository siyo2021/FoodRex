import RecCard from "./components/RecCard";
import { Button, VStack, Text } from "@chakra-ui/react";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";

function RecPage() {
	const recs = [
		{
			pic: "https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza3+srgb..jpg",
			title: "Pepperoni Pizza",
			restaurant: "Pizza Pizza",
			location: "30 Financial Drive",
			price: "$32",
		},
		{
			pic: "https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza3+srgb..jpg",
			title: "Pepperoni Pizza2",
			restaurant: "Pizza Pizza",
			location: "30 Financial Drive",
			price: "$32",
		},
		{
			pic: "https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza3+srgb..jpg",
			title: "Pepperoni Pizza3",
			restaurant: "Pizza Pizza",
			location: "30 Financial Drive",
			price: "$32",
		},
	];

	return (
		<PageWrapper>
			<Header />
			<Text align="center" fontSize="3xl" pb="8">
				{" "}
				Here's what we recommend:{" "}
			</Text>
			{recs.map((rec, index) => {
				return (
					<RecCard
						key={index}
						pic={rec["pic"]}
						title={rec["title"]}
						restaurant={rec["restaurant"]}
						location={rec["location"]}
						price={rec["price"]}
					/>
				);
			})}
			<VStack mt="20" spacing="3">
				<Button w="60%" bg="orange" color="white" borderRadius="full">
					Reset
				</Button>
				<Button w="60%" bg="orange" color="white" borderRadius="full">
					Keep swiping
				</Button>
			</VStack>
		</PageWrapper>
	);
}

export default RecPage;
