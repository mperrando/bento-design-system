import { ComponentProps, FunctionComponent } from "react";
import { IconProps } from "../Icons/IconProps";
import { Label, LocalizedString, IconButton, BoxProps, BoxType } from "..";
import { Column, Columns, BentoSprinkles, bentoSprinkles } from "../internal";
import { chip } from "./Chip.css";
import { useDefaultMessages } from "../util/useDefaultMessages";

type DismissProps =
  | {
      dismissButtonLabel?: LocalizedString;
      onDismiss: () => void;
    }
  | {
      dismissButtonLabel?: never;
      onDismiss?: never;
    };

type DefaultColor =
  | "grey"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "jade"
  | "blue"
  | "indigo"
  | "violet"
  | "pink";

export type ChipProps<CustomColor extends string> = {
  label: LocalizedString;
  color: DefaultColor | CustomColor;
} & DismissProps;

type ChipConfig<AtomsFn extends typeof bentoSprinkles, CustomColor extends string> = {
  paddingX: BentoSprinkles["paddingX"];
  paddingY: BentoSprinkles["paddingY"];
  labelSize: ComponentProps<typeof Label>["size"];
  closeIcon: FunctionComponent<IconProps>;
  closeIconSize: IconProps["size"];
  internalSpacing: BentoSprinkles["gap"];
  customColors: {
    [k in CustomColor]: BoxProps<AtomsFn>["background"];
  };
};

const defaultColorsMapping: { [k in DefaultColor]: BentoSprinkles["background"] } = {
  grey: "softGrey",
  red: "softRed",
  orange: "softOrange",
  yellow: "softYellow",
  green: "softGreen",
  jade: "softJade",
  blue: "softBlue",
  indigo: "softIndigo",
  violet: "softViolet",
  pink: "softPink",
};

export function createChip<AtomsFn extends typeof bentoSprinkles, CustomColors extends string>(
  Box: BoxType<AtomsFn>,
  config: ChipConfig<AtomsFn, CustomColors>
) {
  const colorsMapping = { ...defaultColorsMapping, ...config.customColors };

  return function Chip({ color, label, ...dismissProps }: ChipProps<CustomColors>) {
    const { defaultMessages } = useDefaultMessages();

    return (
      <Box display="flex">
        <Box
          paddingX={config.paddingX}
          paddingY={config.paddingY}
          className={chip}
          background={colorsMapping[color]}
        >
          <Columns space={config.internalSpacing} align="center" alignY="center">
            <Label size={config.labelSize}>{label}</Label>
            {dismissProps.onDismiss && (
              <Column width="content">
                <IconButton
                  icon={config.closeIcon}
                  label={dismissProps.dismissButtonLabel ?? defaultMessages.Chip.dismissButtonLabel}
                  onPress={dismissProps.onDismiss}
                  size={config.closeIconSize}
                />
              </Column>
            )}
          </Columns>
        </Box>
      </Box>
    );
  };
}
