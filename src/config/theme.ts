import { createTheme } from "baseui";
import { ThemePrimitives } from "baseui/themes";

const fontFamily = "Red Hat Display";

const primitives = {
  primaryFontFamily: fontFamily,
  primary: "#49CD5E",

  accent: "#223CC7",
} as ThemePrimitives;

const overrides = {
  colors: {
    primaryA: "#49CD5E",
    primaryB: "#223CC7",

    backgroundPrimary: "#EEEEEE",
    backgroundSecondary: "white",

    textPrimary: "black",
    textSecondary: "#9C9C9C",
    textPrimaryContrast: "white",
    textSecondaryContrast: "black",

    borderSelected: "#49CD5E",
    inputBorder: "#E0E0E0",
    inputFill: "transparent",
    inputFillActive: "transparent",
    inputPlaceholder: "#9C9C9C",

    buttonPrimaryFill: "#49CD5E",
    buttonPrimaryFillDisabled: "#E1E8ED",
    buttonPrimaryFillHover: "#1B31A8",
    buttonPrimaryHover: "#223CC7",
    buttonPrimaryBorder: "#49CD5E",
    buttonPrimaryBorderDisabled: "#E1E8ED",
    buttonPrimaryBorderHover: "transparent",
    buttonPrimaryTextDisabled: "#FFFFFF",

    buttonSecondaryFill: "transparent",
    buttonSecondaryFillDisabled: "transparent",
    buttonSecondaryBorder: "#6581A3",
    buttonSecondaryBorderHover: "transparent",
    buttonSecondaryBorderDisabled: "#E1E8ED",
    buttonSecondaryFillHover: "#6581A3",
    buttonSecondaryText: "#1B31A8",
    buttonSecondaryTextDisabled: "#AAB8C2",
    buttonSecondaryTextHover: "white",

    menuFillHover: "#EEEEEE",

    calendarHeaderForeground: "black",
    calendarDayBackgroundSelectedHighlighted: "black",
    calendarDayForegroundSelectedHighlighted: "white",
  },
  typography: {
    LabelSmall: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
    },
    LabelMedium: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "18px",
    },
    LabelLarge: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "18px",
    },

    HeadingSmall: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "27px",
    },
    HeadingMedium: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "30px",
    },
    HeadingLarge: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "37px",
    },
  },
};

export default createTheme(primitives, overrides);
