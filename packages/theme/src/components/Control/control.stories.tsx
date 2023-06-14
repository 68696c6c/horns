import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Control } from "./index"

const meta: Meta<typeof Control> = {
  title: "Control",
  component: Control,
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
        "checkbox",
        "radio",
        "select",
        "multiselect",
        "textarea",
        "currency",
        "ssn",
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
    options: [
      { label: "option 1", value: 1 },
      { label: "option 2", value: 2 },
    ],
  },
}
export default meta

export const Default: StoryObj<typeof Control> = {
  render: (props) => (
    <Control
      {...props}
      // name="example"
      // label="Example"
      // message="hello world"
      // placeholder="placeholder"
    />
  ),
}
export const Disabled: StoryObj<typeof Control> = {
  render: () => (
    <Control
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      disabled
    />
  ),
}
export const Error: StoryObj<typeof Control> = {
  render: () => (
    <Control
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      hasError
    />
  ),
}
export const Small: StoryObj<typeof Control> = {
  render: () => (
    <Control
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="sm"
    />
  ),
}
export const Medium: StoryObj<typeof Control> = {
  render: () => (
    <Control
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="md"
    />
  ),
}
export const Large: StoryObj<typeof Control> = {
  render: () => (
    <Control
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="lg"
    />
  ),
}
