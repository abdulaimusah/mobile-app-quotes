import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Quote from "./quote";
import React, { useState, useEffect } from "react";

export default function App() {
	const [quote, setQuote] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((res) => setQuote(res))
			.catch((error) => setIsError(true));
	}, [toggle]);

	return (
		<View style={styles.container}>
			<Text>Random Quotes</Text>
			{data && (
				<Quote
					data={quote}
          togggle={toggle}
					setToggle={setToggle}
				/>
			)}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
