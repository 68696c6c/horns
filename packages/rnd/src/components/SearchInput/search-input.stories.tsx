import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { SearchInput } from "./index"

const meta: Meta<typeof SearchInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "SearchInput",
  component: SearchInput,
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

export const Default: StoryObj<typeof SearchInput> = {
  render: (props) => <SearchInput {...props} />,
}
export const Error: StoryObj<typeof SearchInput> = {
  render: () => (
    <SearchInput
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      hasError
    />
  ),
}
export const Small: StoryObj<typeof SearchInput> = {
  render: () => (
    <SearchInput
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="sm"
    />
  ),
}
export const Medium: StoryObj<typeof SearchInput> = {
  render: () => (
    <SearchInput
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="md"
    />
  ),
}
export const Large: StoryObj<typeof SearchInput> = {
  render: () => (
    <SearchInput
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="lg"
    />
  ),
}
