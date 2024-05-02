import loginSheet from "./LoginSheet";
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
		<View style={loginSheet.container}>
			<Text style={loginSheet.title}>Sign In</Text>
			<TextInput
				style={loginSheet.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={loginSheet.input}
				placeholder="Password"
				value={password}
				secureTextEntry={true}
				onChangeText={setPassword}
			/>
			<Text style={loginSheet.forgetPassword}>Forgot Password?</Text>
			<TouchableOpacity style={loginSheet.button} onPress={handleLogin}>
				<Text style={loginSheet.buttonText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
