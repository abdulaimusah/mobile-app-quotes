import React from "react";
import { Text, Button, View } from "react-native";

const Quote = ({ data, setToggle, toggle }) => {
	return (
		<View>
			<Text>{data.content}</Text>
			<Text>by: {data.author}</Text>
			<Button
				title="Next"
				onPress={() => setToggle(!toggle)}
			/>
		</View>
	);
};
export default Quote;
