import * as React from "react";
import { Text, View } from "react-native";

export const EventScreenDetails: ScreenDetails = { name: "Events", icon: "calendar" };

function EventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events!</Text>
    </View>
  );
}

export default EventScreen;
