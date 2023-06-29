import { Meta, StoryObj } from "@storybook/react"

import { Select } from "./index"

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Select",
  component: Select,
  argTypes: {
    hasError: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    // type: {
    //   options: ["select", "multiselect"],
    //   control: { type: "radio" },
    // },
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

export const Default: StoryObj<typeof Select> = {
  render: (props) => <Select {...props} />,
}

export const Error: StoryObj<typeof Select> = {
  render: (props) => <Select {...props} hasError />,
}

export const Small: StoryObj<typeof Select> = {
  render: (props) => <Select {...props} scale="sm" />,
}

export const Medium: StoryObj<typeof Select> = {
  render: (props) => <Select {...props} scale="md" />,
}

export const Large: StoryObj<typeof Select> = {
  render: (props) => <Select {...props} scale="lg" />,
}
