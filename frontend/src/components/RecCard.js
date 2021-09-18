import { Box, Center, Image, Text, Tag } from "@chakra-ui/react";

function RecCard() {
	return (
		<Center>
			<Box w="70%" bg="green" borderRadius="xl">
				<Image
					borderTopRadius="xl"
					borderBottomLeftRadius="xl"
					boxSize="100px"
					objectFit="cover"
					src="https://bit.ly/sage-adebayo"
					alt="Segun Adebayo"
				/>
				<Text>Hi</Text>
				<Text>Hi</Text>
				<Tag>Sample Tag</Tag>
			</Box>
		</Center>
	);
}

export default RecCard;
