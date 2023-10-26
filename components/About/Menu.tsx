import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import IconButton from "../main/IconButton";
import { useRouter } from "expo-router";


export default function MenuComponent() {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();

  const logout = () => {
    //  router.replace("/");

    router.back()
    router.back()

  //   while (router.canGoBack()) {
  //     router.back()
  // }
  };

  const options = ["Logout", "Cancel"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

  const handlePress = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (pressedId) => {
        switch (pressedId) {
    
          case destructiveButtonIndex:
            logout();
            break;

          case cancelButtonIndex:
            break;
        }
      }
    );
  };

  return (
    <IconButton
      iconName="bars"
      onPress={handlePress}
    />
  );
}

const styles = StyleSheet.create({});