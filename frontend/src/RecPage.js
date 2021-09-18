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
	];

	return (
		<PageWrapper>
			<Header />
			<Text align="center" fontSize="xl" mt="20">
				{" "}
				Here's what we recommend:{" "}
			</Text>
			<RecCard></RecCard>
			<RecCard></RecCard>
			<RecCard></RecCard>
			<VStack mt="10" spacing="3">
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
