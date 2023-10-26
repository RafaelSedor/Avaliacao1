import { Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import firebaseConfig from "../config/firebaseConfig";
import useFirebase from "../hooks/useFirebase";

function _layout() {
  const firebaseApp = useFirebase(firebaseConfig);

  if (firebaseApp == null) return <Text>Loading...</Text>;

  return (
    <>
      <ActionSheetProvider>
        <Stack />
      </ActionSheetProvider>
    </>
  );
}

const ConnectedMain = connectActionSheet(_layout);

export default ConnectedMain;
