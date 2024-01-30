import { TypographySize } from "src/Typography/TypographyProps";
import { TooltipPlacement } from "../Field/FieldProps";
import { IconProps } from "../Icons";
import { BentoSprinkles } from "../internal";
import { vars } from "../vars.css";

type CellPaddingConfig = {
  paddingX: BentoSprinkles["paddingX"];
  paddingY: BentoSprinkles["paddingY"];
};

export type TableConfig = {
  headerInfoIcon: (props: IconProps) => JSX.Element;
  emptyIcon: (props: IconProps) => JSX.Element;
  headerBackgroundColor: BentoSprinkles["background"];
  headerForegroundColor: BentoSprinkles["color"];
  footerBackgroundColor: BentoSprinkles["background"];
  footerForegroundColor: BentoSprinkles["color"];
  hintPlacement: TooltipPlacement;
  cellTooltipPlacement: TooltipPlacement;
  evenRowsBackgroundColor: BentoSprinkles["background"];
  // NOTE(gabro): not using BentoSprinkles["background"] because we only want
  // "plain" values to use directly in CSS and not conditional objects like
  // { default: ..., hover: ... }
  selectedRowBackgroundColor: keyof typeof vars.backgroundColor;
  padding: {
    header: CellPaddingConfig;
    footer: CellPaddingConfig;
    defaultCell: CellPaddingConfig;
    buttonCell: CellPaddingConfig | undefined;
    buttonLinkCell: CellPaddingConfig | undefined;
    textCell: CellPaddingConfig | undefined;
    textWithIconCell: CellPaddingConfig | undefined;
    chipCell: CellPaddingConfig | undefined;
    labelCell: CellPaddingConfig | undefined;
    linkCell: CellPaddingConfig | undefined;
    iconCell: CellPaddingConfig | undefined;
    iconButtonCell: CellPaddingConfig | undefined;
  };
  typographySize: {
    header: TypographySize;
    footer: TypographySize;
    defaultCell: TypographySize;
    buttonLinkCell: TypographySize;
    textCell: TypographySize;
    textWithIconCell: TypographySize;
    labelCell: TypographySize;
    linkCell: TypographySize;
  };
  boundaryPadding: BentoSprinkles["padding"];
  columnDividers: boolean;
};
