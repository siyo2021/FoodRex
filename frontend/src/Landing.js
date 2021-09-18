
//TODO: Add the logo and header (curve) images in the title div!

import { FormControl, Input } from "@chakra-ui/react";

import RecCard from "./components/RecCard";

function Landing() {
    return (

        <div>

            <RecCard />
            <div className="title">
                <!-- TODO: Add dino image -->
                <h1>Food Rex</h1>
                <h5>Don’t know what to eat?  We got you!</h5>
                <!-- TODO: Add curved image -->
            </div>
            <div className="tacoSection">
                <!-- TODO: Add taco image -->
            </div>

            <div className="postalCodeEntry">
                <FormControl id="postalCode">
                    <Input placeholder="Enter your postal code to get recommendations" />
                </FormControl>
            </div>

            <div className="aboutUs">
                <h3>About Us</h3>
                <p>Food Rex (short for “food recommendations”) is a free, AI-powered recommendation engine that enables you to find your next meal with just a few swipes. Enter your postal code to see it in action!</p>
            </div>

        </div>


    )
}

export default Landing;