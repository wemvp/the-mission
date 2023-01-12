import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderer";
import { MoveFinger } from "./systems";

export const MapScreenDetails: ScreenDetails = { name: "Map", icon: "map", noHeader: true };

export default class BestGameEver extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          0: { position: [40, 200], renderer: <Finger /> },
          1: { position: [100, 200], renderer: <Finger /> },
          2: { position: [160, 200], renderer: <Finger /> },
          3: { position: [220, 200], renderer: <Finger /> },
          4: { position: [280, 200], renderer: <Finger /> },
        }}
      ></GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
