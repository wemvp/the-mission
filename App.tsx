import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { fbAuth } from "./src/services/firebase";
import LoginStack from "./src/stacks/LoginStack";
import MainStack from "./src/stacks/MainStack";

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = fbAuth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return <NavigationContainer>{user ? <MainStack /> : <LoginStack />}</NavigationContainer>;
}
