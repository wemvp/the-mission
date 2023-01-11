import MapScreen, { MapScreenDetails } from "../../screens/Map";
import TrophiesScreen, { TrophiesScreenDetails } from "../../screens/Trophies";
import EventScreen, { EventScreenDetails } from "../../screens/Events";
import AccountScreen, { AccountScreenDetails } from "../../screens/Account";
import OverheardScreen, { OverheardScreenDetails } from "../../screens/Overheard";
import { ScreenDetails } from "../../config/types";

export const Tabs: { component: () => JSX.Element; details: ScreenDetails }[] = [
  { component: MapScreen, details: MapScreenDetails },
  { component: EventScreen, details: EventScreenDetails },
  { component: AccountScreen, details: AccountScreenDetails },
  { component: TrophiesScreen, details: TrophiesScreenDetails },
  { component: OverheardScreen, details: OverheardScreenDetails },
];

export const getName = (name: string, focused: boolean) => {
  for (let sd of Tabs) {
    if (sd.details.name === name) {
      return focused ? sd.details.icon : `${sd.details.icon}-outline`;
    }
  }
  return "";
};
