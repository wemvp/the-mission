import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MapScreen, { MapScreenDetails } from "../../screens/Map";
import TrophiesScreen, { TrophiesScreenDetails } from "../../screens/Trophies";
import EventScreen, { EventScreenDetails } from "../../screens/Events";
import AccountScreen, { AccountScreenDetails } from "../../screens/Account";
import OverheardScreen, { OverheardScreenDetails } from "../../screens/Overheard";
import HomeStack, { HomeScreenDetails } from "../HomeStack";

const Tab = createBottomTabNavigator();

const screenDetails: ScreenDetails[] = [
  HomeScreenDetails,
  MapScreenDetails,
  TrophiesScreenDetails,
  EventScreenDetails,
  AccountScreenDetails,
  OverheardScreenDetails,
];

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          for (let sd of screenDetails) {
            if (sd.name === route.name) {
              return (
                <Ionicons
                  name={focused ? sd.icon : `${sd.icon}-outline`}
                  size={size}
                  color={color}
                />
              );
            }
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name={HomeScreenDetails.name}
        component={HomeStack}
      />
      <Tab.Screen name={MapScreenDetails.name} component={MapScreen} />
      <Tab.Screen name={EventScreenDetails.name} component={EventScreen} />
      <Tab.Screen name={AccountScreenDetails.name} component={AccountScreen} />
      <Tab.Screen name={TrophiesScreenDetails.name} component={TrophiesScreen} />
      <Tab.Screen name={OverheardScreenDetails.name} component={OverheardScreen} />
    </Tab.Navigator>
  );
}
