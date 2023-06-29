import { Meta, StoryObj } from "@storybook/react"

import { Input } from "./index"

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Input",
  component: Input,
  argTypes: {
    type: {
      options: [
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "image",
        "month",
        "number",
        "password",
        "range",
        "search",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
      control: { type: "select" },
    },
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
    // Icon1: {
    //   control: "boolean",
    //   defaultValue: true,
    // },
    // Icon2: {
    //   control: "boolean",
    //   defaultValue: true,
    // },
    // IconAction: {
    //   control: "boolean",
    //   defaultValue: true,
    // },
  },
  args: {
    label: "Label text",
    message: "Message text",
    name: "example",
    placeholder: "placeholder",
  },
}

export default meta

export const Default: StoryObj<typeof Input> = {
  render: (props) => <Input {...props} />,
}

export const Error: StoryObj<typeof Input> = {
  render: () => (
    <Input
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      hasError
    />
  ),
}

export const Small: StoryObj<typeof Input> = {
  render: () => (
    <Input
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="sm"
    />
  ),
}

export const Medium: StoryObj<typeof Input> = {
  render: () => (
    <Input
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="md"
    />
  ),
}

export const Large: StoryObj<typeof Input> = {
  render: () => (
    <Input
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="lg"
    />
  ),
}
