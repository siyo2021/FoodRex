//TODO: Add the logo and header (curve) images in the title div!

import {
	FormControl,
	Input,
	Button,
	Text,
	Image,
	Heading,
	Box,
	HStack,
	Center,
} from "@chakra-ui/react";

function Landing() {
	return (
		<div>
			<Box bg="orange" width="100%" textAlign="center" pt="70px">
				<HStack width="44%" margin="auto" mb="40px">
					<Image src="../Dino.png" alt="A dinosaur" boxSize="70px" />
					<Heading
						fontSize="3.2rem"
						fontFamily="heading"
						color="gray.500"
					>
						Food Rex
					</Heading>
				</HStack>
				<Text fontSize="2rem" color="white" mb="">
					Don’t know what to eat? We got you!
				</Text>
			</Box>
			<Box bg="gray.300" width="100%" textAlign="center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#fca008"
						fill-opacity="1"
						d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
					></path>
				</svg>

				<Image
					src="../Taco.jpg"
					alt="A taco"
					boxSize="466px"
					margin="0 auto"
				/>
			</Box>

			<Box bg="brownGray" padding="90px 0 75px" textAlign="center">
				<form>
					<FormControl id="postalCode">
						<Input
							placeholder="Enter your postal code to get recommendations"
							width="70%"
							height="60px"
							borderRadius="full"
							bg="white"
							mb="30px"
							fontSize="xl"
						/>
					</FormControl>
					<Button
						type="submit"
						bg="red"
						color="white"
						borderRadius="full"
						width="25%"
						height="50px"
						fontSize="xl"
					>
						Go!
					</Button>
				</form>
			</Box>
			<Box pt="35px" pb="30px" width="100%" pl="55px" pr="25px">
				<Text fontSize="35px">About Us</Text>
				<Text fontSize="md">
					Food Rex (short for “food recommendations”) is a free,
					AI-powered recommendation engine that enables you to find
					your next meal with just a few swipes. Enter your postal
					code to see it in action!
				</Text>
			</Box>
		</div>
	);
}

export default Landing;
