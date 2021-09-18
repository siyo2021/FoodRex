import RecCard from "./components/RecCard";
import { Button, VStack, Text } from "@chakra-ui/react";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function RecPage() {
	const history = useHistory();

	const [recs, setRecs] = useState([]);

	useEffect(() => {
		const headers = {
			"Content-Type": "application/json",
		};
		axios
			.get(`https://htn-foodrex.uc.r.appspot.com/recommendations/1`, {
				headers,
			})
			.then(async (result) => {
				console.log(result);
				if (result.status === 200) {
					setRecs(await result.data);
					console.log(result.data);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const handleReset = async function (event) {
		event.preventDefault();
		const path = "/";
		history.push(path);
	};

	const handleContinue = async function (event) {
		event.preventDefault();
		const path = "/";
		history.push(path);
	};

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
						link={rec["link"]}
					/>
				);
			})}
			<VStack mt="20" spacing="3">
				<Button
					w="60%"
					bg="orange"
					color="white"
					borderRadius="full"
					onClick={handleReset}
				>
					Reset
				</Button>
				<Button
					w="60%"
					bg="orange"
					color="white"
					borderRadius="full"
					onClick={handleContinue}
				>
					Keep swiping
				</Button>
			</VStack>
		</PageWrapper>
	);
}

export default RecPage;
