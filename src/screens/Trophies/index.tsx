import * as React from "react";
import { Text, View } from "react-native";

export const TrophiesScreenDetails: ScreenDetails = { name: "Trophies", icon: "trophy" };

function TrophiesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Trophies!</Text>
    </View>
  );
}

export default TrophiesScreen;
