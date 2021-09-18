import RecCard from "./components/RecCard";
import { Button, VStack, Text } from "@chakra-ui/react";
import PageWrapper from "./components/PageWrapper";

function RecPage() {
	return (
		<PageWrapper>
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
