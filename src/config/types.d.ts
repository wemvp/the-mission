interface ScreenDetails {
  name: string;
  icon: string;
  noHeader?: boolean;
}

export type Navigation = {
  navigate: (scene: string) => void;
};
