export enum themeModes {
  LIGHT_MODE = "LIGHT_MODE",
  DARK_MODE = "DARK_MODE",
}

const palettes: Record<themeModes, any> = {
  [themeModes.LIGHT_MODE]: {
    primary: {
      background: "#FFFFFF",
      text: "#242426",
      grey: "#AFB2B6",
      dark: "#000000",
      form: "#FFFFFF",
    },
  },
  [themeModes.DARK_MODE]: {
    primary: {
      background: "#000000",
      text: "#FFFFFF",
      grey: "#323537",
      dark: "#242426",
      form: "#000000",
    },
  },
};

export const createTheme = (themeMode: themeModes) => {
  return {
    palette: {
      themeMode,
      ...palettes[themeMode],
    },
  };
};
