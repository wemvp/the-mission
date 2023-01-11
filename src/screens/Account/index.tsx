import { signOut } from "firebase/auth/react-native";
import * as React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import { fbAuth } from "../../services/firebase";

export const AccountScreenDetails: ScreenDetails = {
  name: "Account",
  icon: "happy",
};

const _logoutUser = () => {
  signOut(fbAuth);
};

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account!</Text>
      <Button onPress={_logoutUser}>Logout</Button>
    </View>
  );
}

export default AccountScreen;
