
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
    Center
} from "@chakra-ui/react";

import RecCard from "./components/RecCard";

function Landing() {
    return (

        <div>
            <Box bg="orange" align-items="center">
                <HStack>
                    <Image src="../Dino.png" alt="A dinosaur" boxSize="80px" />
                    <Heading>Food Rex</Heading>
                </HStack>
                <Text fontSize="md" color="white">Don’t know what to eat?  We got you!</Text>
            </Box>

            <Box bg="gray.300">
                <Image src="../Taco.jpg" alt="A taco" />
            </Box>

            <Box bg="brownGray" padding="90px 0 75px" alignItems="center">
                <form>
                    <FormControl id="postalCode">
                        <Input placeholder="Enter your postal code to get recommendations" width="45%" borderRadius="full" bg="white" mb="30px"/>
                    </FormControl>
                    <Button type="submit" bg="red" color="white" borderRadius="full" width="17%">Go!</Button>
                </form>
            </Box>
            <Box>
                <Text fontSize="xl">About Us</Text>
                <Text>Food Rex (short for “food recommendations”) is a free, AI-powered recommendation engine that enables you to find your next meal with just a few swipes. Enter your postal code to see it in action!</Text>
            </Box>
        </div>

    )
}

export default Landing;