import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import IconButton from "./IconButton";
import { Redirect, useRouter } from "expo-router";
import useAuth from "../../hooks/useAuth";

interface MenuComponentProps {
  onMain: () => void;
}

export default function MenuComponent({ onMain }: MenuComponentProps) {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
 const { loading, user, login, logout } = useAuth();


  const options = ["About", "Logout", "Cancel", "main"];
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 2;

  const handlePress = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      async (pressedId) => {
        switch (pressedId) {
          case 0:
            router.push("/about");
            console.log("About");
            break;

          case destructiveButtonIndex:
            //  router.replace("..")
            await logout();
            console.log("Logout");
            break;

          case cancelButtonIndex:
            console.log("Canceled");
            // Canceled
            break;

          case 3:
            onMain();
            break;
        }
      }
    );
  };

  return <IconButton iconName="bars" onPress={handlePress} />;
}

const styles = StyleSheet.create({});
