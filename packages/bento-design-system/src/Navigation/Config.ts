import { IconProps } from "../Icons";
import { IllustrationProps } from "../Illustrations";
import { BentoSprinkles } from "../internal";
import { LabelProps } from "../Typography/Label/Label";
import { NavigationSize } from "./createNavigation";

type SizeConfig<A> = Record<NavigationSize, A>;
export type NavigationConfig = {
  destinationsSpacing: BentoSprinkles["gap"];
  destinationPaddingX: SizeConfig<BentoSprinkles["paddingX"]>;
  destinationPaddingY: SizeConfig<BentoSprinkles["paddingY"]>;
  labelSize: SizeConfig<LabelProps["size"]>;
  iconSize: SizeConfig<IconProps["size"]>;
  illustrationSize: SizeConfig<IllustrationProps["size"]>;
  internalSpacing: SizeConfig<BentoSprinkles["gap"]>;
  activeVisualElement: JSX.Element;
  uppercaseLabel: boolean;
};
