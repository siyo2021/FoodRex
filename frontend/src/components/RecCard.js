import { Box, Center, Image, Text, Tag, Grid, GridItem } from "@chakra-ui/react";

function RecCard(props) {
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
							src={props.pic}
							alt="Food"
						/>
					</GridItem>
					<GridItem colStart={2} colEnd={6}>
						<Text fontSize="xl" fontWeight="bold">
							{props.title}
						</Text>
						<Text fontSize="md" fontFamily="Alegreya Sans SC">
							{props.restaurant}, {props.location}
						</Text>
						<Tag size="md" key="md" variant="solid" bg="green">
							{props.price}
						</Tag>
					</GridItem>
				</Grid>
			</Box>
		</Center>
	);
}

export default RecCard;
