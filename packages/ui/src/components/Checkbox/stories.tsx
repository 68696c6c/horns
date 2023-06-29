import { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./index"

const meta: Meta<typeof Checkbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    hasError: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    scale: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  args: {
    label: "Label text",
    message: "Message text",
    name: "example",
    placeholder: "placeholder",
    options: [
      { label: "option 1", value: 1 },
      { label: "option 2", value: 2 },
    ],
  },
}

export default meta

export const Default: StoryObj<typeof Checkbox> = {
  render: (props) => <Checkbox {...props} />,
}

export const Error: StoryObj<typeof Checkbox> = {
  render: (props) => <Checkbox {...props} hasError />,
}

export const Small: StoryObj<typeof Checkbox> = {
  render: (props) => <Checkbox {...props} scale="sm" />,
}

export const Medium: StoryObj<typeof Checkbox> = {
  render: (props) => <Checkbox {...props} scale="md" />,
}

export const Large: StoryObj<typeof Checkbox> = {
  render: (props) => <Checkbox {...props} scale="lg" />,
}
