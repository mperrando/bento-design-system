import { ComponentProps, FunctionComponent } from "react";
import {
  ActionsProps,
  Body,
  ButtonProps,
  Children,
  Display,
  Headline,
  LocalizedString,
  TextChildren,
} from "..";

import { BentoSprinkles, Box, Stack } from "../internal";

type Props = {
  children: Children;
  title?: LocalizedString;
  description?: TextChildren;
  submitButton?: Omit<ButtonProps, "kind">;
  secondaryButton?: Omit<ButtonProps, "kind">;
};

export type FormConfig = {
  headerTitleSize: {
    desktop: ComponentProps<typeof Display>["size"];
    mobile: ComponentProps<typeof Headline>["size"];
  };
  headerDescriptionSize: ComponentProps<typeof Body>["size"];
  formSpacing: BentoSprinkles["gap"];
  headerSpacing: BentoSprinkles["gap"];
  actionsSize: ActionsProps["size"];
};

export function createForm(Actions: FunctionComponent<ActionsProps>, config: FormConfig) {
  return function Form({ title, description, children, submitButton, secondaryButton }: Props) {
    return (
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
        <Stack space={config.formSpacing}>
          {(title || description) && (
            <Stack space={config.headerSpacing}>
              {/** TODO: Headline se da mobile */}
              {title && <Display size={config.headerTitleSize.desktop}>{title}</Display>}
              {description && <Body size={config.headerDescriptionSize}>{description}</Body>}
            </Stack>
          )}
          {children}
          {(submitButton || secondaryButton) && (
            <Actions
              size={config.actionsSize}
              primaryAction={submitButton}
              secondaryAction={secondaryButton}
            />
          )}
        </Stack>
      </Box>
    );
  };
}
