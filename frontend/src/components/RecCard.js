import { Box, Center, Image, Text, Tag, Grid, GridItem } from "@chakra-ui/react";

function RecCard() {
	return (
		<Center>
			<Box w="70%" bg="gray.100" borderRadius="xl" boxShadow="md" mt="30">
				<Grid templateColumns="repeat(5, 1fr)" gap={3}>
					<GridItem colSpan={1}>
						<Image
							borderTopRadius="xl"
							borderBottomLeftRadius="xl"
							boxSize="100px"
							objectFit="cover"
							src="https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza3+srgb..jpg"
							alt="Pizza"
						/>
					</GridItem>
					<GridItem colStart={2} colEnd={6}>
						<Text fontSize="xl" fontWeight="bold">
							Pepperoni Pizza
						</Text>
						<Text fontSize="md" fontFamily="Alegreya Sans SC">
							Pizza Pizza, 30 Financial Drive
						</Text>
						<Tag size="md" key="md" variant="solid" bg="green">
							$32
						</Tag>
					</GridItem>
				</Grid>
			</Box>
		</Center>
	);
}

export default RecCard;
