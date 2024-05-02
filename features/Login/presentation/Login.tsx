import styles from "./LoginSheet";
import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		console.log("Login attempt with:", username, password);
		// Implement your login logic here
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign In</Text>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				secureTextEntry={true}
				onChangeText={setPassword}
			/>
			<Text style={styles.forgetPassword}>Forgot Password?</Text>
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
