import { StyleSheet } from "react-native";

const loginSheet = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#5632A1",
		width: "100%",
	},
	title: {
		fontSize: 25,
		marginBottom: 20,
		color: "#fff",
		fontFamily: "Kodchasan_Bold",
	},
	input: {
		width: 250,
		height: 50,
		padding: 10,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: "#fff",
		fontSize: 18,
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		color: "#fff",
	},
	forgetPassword: {
		fontFamily: "Kodchasan_Bold",
		color: "#fff",
	},
	button: {
		backgroundColor: "#9A4CFF",
		borderRadius: 30,
		width: 130,
		height: 50,
		marginTop: 100,
	},
	buttonText: {
		marginTop: 10,
		color: "#fff",
		fontFamily: "Kodchasan_Bold",
		textAlign: "center",
		justifyContent: "center",
		fontSize: 18,
	},
});

export default loginSheet;
