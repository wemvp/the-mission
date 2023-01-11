import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginHomeScreen from "../../screens/LoginHome";
import LoginScreen from "../../screens/Login";
import Register from "../../screens/Register";

const Stack = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="LoginHome" component={LoginHomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={Register} />
    </Stack.Navigator>
  );
}
