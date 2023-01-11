import * as React from "react";
import { Button, Text, View } from "react-native";

export const HomeScreenDetails: ScreenDetails = { name: "Home", icon: "ios-information-circle" };

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

export default DetailsScreen;
