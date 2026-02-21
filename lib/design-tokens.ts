export const colors = {
  nightSky: "#0A0F23",
  deepNavy: "#0E1F2F",
  midnight: "#152A3A",
  firelight: "#FAE4CF",
  ember: "#FF5E2B",
  warmGold: "#F0B866",
  ash: "#8A9BAE",
  smoke: "#3D4F63",
  ivory: "#F4F3E1",
} as const;

export type ColorName = keyof typeof colors;
