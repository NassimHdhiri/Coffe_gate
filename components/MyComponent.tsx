import React from "react";
import { View,Text } from "react-native";
import { makeStyles, useThemeMode,Button } from "@rneui/themed";

export default function App() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <View className="flex-1 flex-col bg-black items-center justify-center">
      <Text className=" text-amber-400 text-2xl">Start Using RNE </Text>
      <Text className=" text-amber-400 text-base" >
        Open up App.tsx to start working on your app!
      </Text>
      <Button onPress={handleOnPress}  >Switch Theme</Button>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
