import * as React from "react";
import { Text, View } from "react-native";

export const AccountScreenDetails: ScreenDetails = {
  name: "Account",
  icon: "happy",
};

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account!</Text>
    </View>
  );
}

export default AccountScreen;
