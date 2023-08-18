import { BentoTokens } from "./bentoTokens";

const remBaseSize = 16;
const pixelToRem = (px: number) => `${px / remBaseSize}rem`;

const colors = {
  white: "#FFFFFF",
  white_80: "rgba(255, 255, 255, 0.8)",
  black: "#000000",
  black_16: "rgba(0, 0, 0, 0.16)",
  bentoViolet10: "#B3BEFF",
  bentoViolet20: "#7F77FF",
  bentoViolet40: "#5C17E5",
  neutral01: "#F6F8FB",
  neutral05: "#ECEFF4",
  neutral10: "#DEE4ED",
  neutral20: "#CBD4E1",
  neutral20_20: "rgba(203, 212, 225, 0.2)",
  neutral20_40: "rgba(203, 212, 225, 0.4)",
  neutral30: "#B6C2D3",
  neutral40: "#9AA8BC",
  neutral40_30: "rgba(154, 168, 188, 0.3)",
  neutral50: "#728197",
  neutral60: "#525E6F",
  neutral80: "#27313F",
  neutral90: "#1A212B",
  neutral90_60: "rgba(26, 33, 43, 0.6)",
  informative05: "#E0EDFF",
  informative30: "#5598F6",
  informative50: "#105FCE",
  positive05: "#E1FCDE",
  positive50: "#17BF33",
  positive70: "#016A1C",
  warning05: "#FFF2D2",
  warning40: "#F2930D",
  warning60: "#BA5900",
  negative05: "#FFD4D8",
  negative30: "#F14A58",
  negative40: "#E42131",
  negative40_10: "rgba(228, 33, 49, 0.1)",
  negative60: "#B1000F",
  interactive05: "#D0DCFF",
  interactive10: "#B3BEFF",
  interactive10_40: "rgba(179, 190, 255, 0.4)",
  interactive40: "#5C17E5",
  interactive60: "#360090",
  red10: "#FFBDCB",
  red30: "#FC5275",
  orange10: "#FFD4BC",
  orange30: "#FB8951",
  yellow10: "#FFF4B2",
  yellow30: "#FFD439",
  green10: "#DBF1BC",
  green30: "#A3D65C",
  jade10: "#B7F6D7",
  jade30: "#51E098",
  blue10: "#BCF2FF",
  blue30: "#51D0FB",
  indigo10: "#C0D3F9",
  indigo30: "#5F8CE6",
  violet10: "#DABEEA",
  violet30: "#A463C7",
  pink10: "#F8B0DA",
  pink30: "#E648A4",
};

export const defaultTokens: BentoTokens = {
  fontFamily: {
    default: "Lexend, Arial, sans-serif",
  },
  fontSize: {
    bodySmall: pixelToRem(12),
    bodyMedium: pixelToRem(14),
    bodyLarge: pixelToRem(16),
    headlineSmall: pixelToRem(32),
    headlineMedium: pixelToRem(36),
    headlineLarge: pixelToRem(40),
    displaySmall: pixelToRem(44),
    displayMedium: pixelToRem(52),
    displayLarge: pixelToRem(64),
    labelSmall: pixelToRem(12),
    labelMedium: pixelToRem(14),
    labelLarge: pixelToRem(16),
    titleSmall: pixelToRem(14),
    titleMedium: pixelToRem(16),
    titleLarge: pixelToRem(22),
  },
  lineHeight: {
    bodySmall: pixelToRem(18),
    bodyMedium: pixelToRem(20),
    bodyLarge: pixelToRem(24),
    headlineSmall: pixelToRem(36),
    headlineMedium: pixelToRem(40),
    headlineLarge: pixelToRem(44),
    displaySmall: pixelToRem(50),
    displayMedium: pixelToRem(58),
    displayLarge: pixelToRem(72),
    labelSmall: pixelToRem(18),
    labelMedium: pixelToRem(20),
    labelLarge: pixelToRem(24),
    titleSmall: pixelToRem(16),
    titleMedium: pixelToRem(18),
    titleLarge: pixelToRem(24),
  },
  fontWeight: {
    body: "400",
    bodyStrong: "600",
    display: "600",
    headline: "600",
    label: "500",
    title: "600",
  },
  letterSpacing: {
    1: "0",
    2: "0",
  },
  space: {
    0: "0",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
    32: "32px",
    40: "40px",
    80: "80px",
  },
  negativeSpace: {
    0: "0",
    negative4: "-4px",
    negative8: "-8px",
    negative12: "-12px",
    negative16: "-16px",
    negative24: "-24px",
    negative32: "-32px",
    negative40: "-40px",
    negative80: "-80px",
  },
  radius: {
    4: "4px",
    8: "8px",
    16: "16px",
  },
  brandColor: {
    brandPrimary: colors.bentoViolet40,
    brandSecondary: colors.bentoViolet20,
    brandTertiary: colors.bentoViolet10,
  },
  backgroundColor: {
    backgroundPrimary: colors.white,
    backgroundSecondary: colors.neutral01,
    backgroundOverlay: colors.neutral20_40,
    backgroundPrimaryInverse: colors.neutral90,
    backgroundSecondaryInverse: colors.neutral80,
    backgroundInteractive: colors.interactive40,
    backgroundInteractiveOverlay: colors.interactive10_40,
    backgroundInformative: colors.informative05,
    backgroundPositive: colors.positive05,
    backgroundWarning: colors.warning05,
    backgroundNegative: colors.negative05,
    backgroundLightScrim: colors.white_80,
    backgroundDarkScrim: colors.neutral90_60,
  },
  foregroundColor: {
    foregroundPrimary: colors.neutral90,
    foregroundSecondary: colors.neutral50,
    foregroundPrimaryInverse: colors.white,
    foregroundSecondaryInverse: colors.neutral30,
    foregroundInteractive: colors.interactive40,
    foregroundInformative: colors.informative30,
    foregroundPositive: colors.positive50,
    foregroundWarning: colors.warning40,
    foregroundNegative: colors.negative30,
    foregroundDisabled: colors.neutral40_30,
  },
  textColor: {
    textPrimary: colors.neutral90,
    textSecondary: colors.neutral50,
    textPrimaryInverse: colors.neutral01,
    textSecondaryInverse: colors.neutral30,
    textInteractive: colors.interactive40,
    textInformative: colors.informative50,
    textPositive: colors.positive70,
    textWarning: colors.warning60,
    textNegative: colors.negative60,
    textDisabled: colors.neutral40_30,
  },
  interactiveBackgroundColor: {
    primarySolidEnabledBackground: colors.interactive40,
    primarySolidHoverBackground: colors.interactive60,
    primarySolidFocusBackground: colors.interactive60,
    primaryTransparentEnabledBackground: "transparent",
    primaryTransparentHoverBackground: colors.interactive10_40,
    primaryTransparentFocusBackground: colors.interactive10_40,
    secondarySolidEnabledBackground: colors.neutral05,
    secondarySolidHoverBackground: colors.neutral20,
    secondarySolidFocusBackground: colors.neutral20,
    secondaryTransparentEnabledBackground: "transparent",
    secondaryTransparentHoverBackground: colors.neutral20_40,
    secondaryTransparentFocusBackground: colors.neutral20_40,
    dangerSolidEnabledBackground: colors.negative40,
    dangerSolidHoverBackground: colors.negative60,
    dangerSolidFocusBackground: colors.negative60,
    dangerTransparentEnabledBackground: "transparent",
    dangerTransparentHoverBackground: colors.negative40_10,
    dangerTransparentFocusBackground: colors.negative40_10,
    disabledSolidBackground: colors.neutral20_20,
    disabledTransparentBackground: "transparent",
  },
  interactiveForegroundColor: {
    primarySolidEnabledForeground: colors.white,
    primarySolidHoverForeground: colors.white,
    primarySolidFocusForeground: colors.white,
    primaryTransparentEnabledForeground: colors.interactive40,
    primaryTransparentHoverForeground: colors.interactive60,
    primaryTransparentFocusForeground: colors.interactive60,
    secondarySolidEnabledForeground: colors.neutral90,
    secondarySolidHoverForeground: colors.neutral90,
    secondarySolidFocusForeground: colors.neutral90,
    secondaryTransparentEnabledForeground: colors.neutral80,
    secondaryTransparentHoverForeground: colors.black,
    secondaryTransparentFocusForeground: colors.black,
    dangerSolidEnabledForeground: colors.white,
    dangerSolidHoverForeground: colors.white,
    dangerSolidFocusForeground: colors.white,
    dangerTransparentEnabledForeground: colors.negative40,
    dangerTransparentHoverForeground: colors.negative60,
    dangerTransparentFocusForeground: colors.negative60,
    disabledSolidForeground: colors.neutral40_30,
    disabledTransparentForeground: colors.neutral40_30,
    linkEnabled: colors.interactive40,
    linkHover: colors.interactive60,
    linkFocus: colors.interactive60,
    linkDisabled: colors.neutral40_30,
    linkEnabledInverse: colors.interactive10,
    linkHoverInverse: colors.interactive05,
    linkFocusInverse: colors.interactive05,
    linkDisabledInverse: colors.neutral60,
  },
  outlineColor: {
    outlineInteractive: colors.interactive40,
    outlineInteractivePrimaryEnabled: colors.interactive40,
    outlineInteractivePrimaryFocus: colors.interactive60,
    outlineInteractivePrimaryHover: colors.interactive60,
    outlineInteractiveSecondaryEnabled: colors.neutral80,
    outlineInteractiveSecondaryFocus: colors.black,
    outlineInteractiveSecondaryHover: colors.black,
    outlineInteractiveDangerEnabled: colors.negative40,
    outlineInteractiveDangerFocus: colors.negative60,
    outlineInteractiveDangerHover: colors.negative60,
    outlineInteractiveDisabled: colors.neutral40_30,
    outlineDecorative: colors.neutral20,
    outlineContainer: colors.neutral05,
    outlineInputEnabled: colors.neutral40,
    outlineInputHover: colors.neutral60,
    outlineInputFocus: colors.interactive40,
    outlineInputDisabled: colors.neutral40_30,
    outlineInformative: colors.informative30,
    outlinePositive: colors.positive50,
    outlineWarning: colors.warning40,
    outlineNegative: colors.negative30,
  },
  dataVisualizationColor: {
    softGrey: colors.neutral10,
    softRed: colors.red10,
    softOrange: colors.orange10,
    softYellow: colors.yellow10,
    softGreen: colors.green10,
    softJade: colors.jade10,
    softBlue: colors.blue10,
    softIndigo: colors.indigo10,
    softViolet: colors.violet10,
    softPink: colors.pink10,
    brightGrey: colors.neutral30,
    brightRed: colors.red30,
    brightOrange: colors.orange30,
    brightYellow: colors.yellow30,
    brightGreen: colors.green30,
    brightJade: colors.jade30,
    brightBlue: colors.blue30,
    brightIndigo: colors.indigo30,
    brightViolet: colors.violet30,
    brightPink: colors.pink30,
  },
  boxShadow: {
    outlineInteractive: `inset 0px 0px 0px 1px ${colors.interactive40}`,
    outlineInteractiveBottom: `inset 0px -1px 0px ${colors.interactive40}`,
    outlineInteractivePrimaryEnabled: `inset 0px 0px 0px 1px ${colors.interactive40}`,
    outlineInteractivePrimaryFocus: `inset 0px 0px 0px 1px ${colors.interactive60}`,
    outlineInteractivePrimaryHover: `inset 0px 0px 0px 1px ${colors.interactive60}`,
    outlineInteractiveSecondaryEnabled: `inset 0px 0px 0px 1px ${colors.neutral80}`,
    outlineInteractiveSecondaryFocus: `inset 0px 0px 0px 1px ${colors.black}`,
    outlineInteractiveSecondaryHover: `inset 0px 0px 0px 1px ${colors.black}`,
    outlineInteractiveDangerEnabled: `inset 0px 0px 0px 1px ${colors.negative40}`,
    outlineInteractiveDangerFocus: `inset 0px 0px 0px 1px ${colors.negative60}`,
    outlineInteractiveDangerHover: `inset 0px 0px 0px 1px ${colors.negative60}`,
    outlineInteractiveDisabled: `inset 0px 0px 0px 1px ${colors.neutral40_30}`,
    outlineDecorative: `inset 0px 0px 0px 1px ${colors.neutral20}`,
    outlineDecorativeBottom: `inset 0px -1px 0px ${colors.neutral20}`,
    outlineContainer: `inset 0px 0px 0px 1px ${colors.neutral05}`,
    outlineInputEnabled: `inset 0px 0px 0px 1px ${colors.neutral40}`,
    outlineInputHover: `inset 0px 0px 0px 1px ${colors.neutral60}`,
    outlineInputFocus: `inset 0px 0px 0px 2px ${colors.interactive40}`,
    outlineInputDisabled: `inset 0px 0px 0px 1px ${colors.neutral40_30}`,
    outlineInformative: `inset 0px 0px 0px 1px ${colors.informative30}`,
    outlinePositive: `inset 0px 0px 0px 1px ${colors.positive50}`,
    outlineWarning: `inset 0px 0px 0px 1px ${colors.warning40}`,
    outlineNegative: `inset 0px 0px 0px 1px ${colors.negative30}`,
    outlineNegativeStrong: `inset 0px 0px 0px 2px ${colors.negative30}`,
    elevationSmall: `0px 4px 8px ${colors.black_16}`,
    elevationMedium: `0px 8px 16px ${colors.black_16}`,
    elevationLarge: `0px 16px 32px ${colors.black_16}`,
  },
};