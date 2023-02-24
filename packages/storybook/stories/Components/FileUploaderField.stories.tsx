import { StoryFn } from "@storybook/react";
import { FileUploaderField, BentoConfigProvider } from "..";
import { createComponentStories } from "../util";

const { defaultExport, createControlledStory } = createComponentStories({
  component: FileUploaderField,
  args: {},
});

export default defaultExport;

const fileUploaderProps = {
  label: "Upload a file",
  allowedFileTypes: {
    "text/csv": [".csv"],
  },
  name: "file",
  texts: {
    title: "Upload a file",
    description:
      "You can upload a file in CSV format by clicking the button below or dragging and dropping it into the box.",
    uploadAgainMessage: "Upload another file: ",
    uploadingMessage: "Uploading...",
    uploadButtonLabel: "Choose a file",
    assistiveTextFileTypes: (fileTypes?: Record<string, string[]>) =>
      fileTypes ? "Allowed file types: " + Object.values(fileTypes).flat().join(", ") : "",
    assistiveTextMaxSize: (maxSizeMb?: number) =>
      maxSizeMb ? "Max file size: " + maxSizeMb + "MB" : "",
  },
  renderIssue: () => "error",
  maxFileSize: 1000,
};

export const fileUploaderField = createControlledStory(undefined, fileUploaderProps);

export const loading = createControlledStory(undefined, {
  ...fileUploaderProps,
  isUploading: true,
});
loading.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const withOutlineButton = createControlledStory(undefined, fileUploaderProps);
withOutlineButton.decorators = [
  (Story: StoryFn) => (
    <BentoConfigProvider
      value={{
        fileUploaderField: {
          buttonKind: "outline",
        },
      }}
    >
      <Story />
    </BentoConfigProvider>
  ),
];
