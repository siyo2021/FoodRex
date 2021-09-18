import { Box, Text, HStack, Image, Heading } from "@chakra-ui/react";

function Header() {
	return (
		<>
			<Box bg="orange" width="100%" textAlign="center" pt="70px">
				<HStack width="44%" margin="auto">
					<Image src="../Dino.png" alt="A dinosaur" boxSize="70px" />
					<Heading
						fontSize="3.2rem"
						fontFamily="heading"
						color="gray.500"
					>
						Food Rex
					</Heading>
				</HStack>
			</Box>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#fca008"
					fill-opacity="1"
					d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
				></path>
			</svg>
		</>
	);
}

export default Header;
