import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./features/Login/presentation/Login";
import { globalSheet } from "./globalSheet";
import {
	useFonts,
	Kodchasan_400Regular,
	Kodchasan_700Bold,
} from "@expo-google-fonts/kodchasan";

export default function App() {
	let [fontsLoaded] = useFonts({
		Kodchasan_Regular: Kodchasan_400Regular,
		Kodchasan_Bold: Kodchasan_700Bold,
	});

	return (
		<View style={globalSheet.container}>
			<Login />
			<StatusBar style="auto" />
		</View>
	);
}
