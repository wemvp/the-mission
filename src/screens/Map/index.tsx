import * as React from "react";
import { Text, View } from "react-native";

export const MapScreenDetails: ScreenDetails = { name: "Town", icon: "map", noHeader: true };

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

export default MapScreen;
