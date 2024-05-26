import { StyleSheet } from "react-native";

const loginSheet = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",

		width: "100%",
	},
	title: {
		fontSize: 50,
		marginBottom: 20,
		color: "#fff",
		fontFamily: "Kodchasan_Bold",
		width: "60%",
		paddingLeft: 30,
	},
	backgroundImage: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 1, // Lower zIndex means it will be 'under' the text
	},
	backgroundImage2: {
		position: "absolute",
		bottom: -400,
		right: 100,
		zIndex: 1, // Lower zIndex means it will be 'under' the text
	},
	modalContainer: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 4, // This is used for Android
		backgroundColor: "#00000040", // Semi-transparent black background
		padding: 20,
		paddingTop: 30,
		borderRadius: 30, // Rounded corners
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 30, // Adds horizontal margin
		marginVertical: 50, // Adds vertical margin, adjust as needed
	},

	input: {
		width: 300,
		height: 50,
		padding: 30,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: "#fff",
		fontSize: 18,
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		color: "#E0E0E0",
		fontFamily: "Kodchasan_Regular",
	},
	forgetPassword: {
		fontFamily: "Kodchasan_Bold",
		color: "#E0E0E0",
		fontSize: 18,
	},
	button: {
		backgroundColor: "#7339EB",
		borderRadius: 30,
		width: 180,
		height: 50,
	},
	buttonText: {
		marginTop: 8,
		color: "#fff",
		fontFamily: "Kodchasan_Bold",
		textAlign: "center",
		justifyContent: "center",
		fontSize: 24,
	},
});

export default loginSheet;
