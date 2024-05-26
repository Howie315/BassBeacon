import loginSheet from "./LoginSheet";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import Logo from "../../../assets/logo.png";
import Logo from "../../../assets/logo.png";
import background1 from "../../../assets/login-background1.png";
import background2 from "../../../assets/login-background2.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    console.log("Login attempt with:", username, password);
    // Implement your login logic here
  }, [username, password]);

  return (
    <LinearGradient
      colors={["#000000", "#3B20A8"]} // Gradient colors
      style={loginSheet.container}
      start={{ x: 0, y: 0 }} // Start of gradient
      end={{ x: 0, y: 1 }} // End of gradient
    >
      <Image
        source={background1}
        resizeMode="contain" // or 'cover' depending on your need
        style={loginSheet.backgroundImage}
      />
      <Image
        source={background2}
        resizeMode="contain" // or 'cover' depending on your need
        style={loginSheet.backgroundImage2}
      />
      <Text style={loginSheet.title}>Welcome Back!</Text>
      <View style={loginSheet.modalContainer}>
        <TextInput
          style={loginSheet.input}
          placeholder="Username.."
          placeholderTextColor="#E0E0E0"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={loginSheet.input}
          placeholder="Password.."
          placeholderTextColor="#E0E0E0"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginSheet.forgetPassword}>Forgot Password?</Text>
        <Image source={Logo} style={{}} />
        <TouchableOpacity style={loginSheet.button} onPress={handleLogin}>
          <Text style={loginSheet.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default React.memo(Login);
