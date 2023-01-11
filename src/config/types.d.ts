interface ScreenDetails {
  name: string;
  icon: string;
}

export type Navigation = {
  navigate: (scene: string) => void;
};
