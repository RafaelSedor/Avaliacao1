import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import IconButton from "./IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const router = useRouter();
  const { loading, user, login, logout } = useAuth();

  // const exemplo = async () => {r
  //   await AsyncStorage.setItem()
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (loading) return <Text>Loading...</Text>;
try{
    await login("rafaelsedor@alunos.utfpr.edu.br", "Enkawp89");
    router.push("/main");

} catch(error) {
 console.log(error)
 alert("Login/Senha incorretos!");
}
    // if (username != "teste" && password != "123") {
    //   {
    //     alert("Login/Senha incorretos!");
    //   }
    // } else {
    //   router.push("/main");
    // }

    // console.log("Username:", username);
    // console.log("Password:", password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome de usuário"
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Digite sua senha"
      />
      <IconButton
        style={styles.buttom}
        iconName="location-enter"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 250,
    backgroundColor: "#7Fa653",
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
  },

  text: {
    alignContent: "flex-start",
    paddingTop: 20,
    fontSize: 24,
    fontWeight: "600",
    color: "#ffff",
    textShadowColor: "black", // Cor da borda
    textShadowOffset: { width: 1, height: 1 }, // Tamanho da sombra
    textShadowRadius: 2, // Raio da sombra
  },

  buttom: {
    paddingTop: 15,
    paddingLeft: 155,
  },
});
