import * as React from "react";
import { Text, View } from "react-native";

export const OverheardScreenDetails: ScreenDetails = { name: "Overheard", icon: "ear" };

function OverheardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events!</Text>
    </View>
  );
}

export default OverheardScreen;
