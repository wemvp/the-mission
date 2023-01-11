import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../../config/theme";
import { getName, Tabs } from "./getTabs";

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const name = getName(route.name, focused);
          return <Ionicons name={name} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
      })}
    >
      {Tabs.map((aTab) => (
        <Tab.Screen
          options={{ headerShown: !aTab.details.noHeader }}
          key={aTab.details.name}
          name={aTab.details.name}
          component={aTab.component}
        />
      ))}
    </Tab.Navigator>
  );
}
