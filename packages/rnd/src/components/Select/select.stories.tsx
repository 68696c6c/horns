import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { RxAccessibility, RxEnvelopeClosed } from "react-icons/rx"
import { Select } from "./index"
import * as styles from "../temp.css"
import { tempIcon1, tempIcon2, tempInput, tempLabel } from "../temp.css"
import { useFormControl } from "../FormControl/state"

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

export const Default: StoryObj<typeof Select> = {
  render: (props) => <Select {...props} />,
}
export const Error: StoryObj<typeof Select> = {
  render: () => (
    <Select
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      hasError
      options={[
        { label: "option 1", value: 1 },
        { label: "option 2", value: 2 },
      ]}
    />
  ),
}
export const Small: StoryObj<typeof Select> = {
  render: () => (
    <Select
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="sm"
      options={[
        { label: "option 1", value: 1 },
        { label: "option 2", value: 2 },
      ]}
    />
  ),
}
export const Medium: StoryObj<typeof Select> = {
  render: () => (
    <Select
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="md"
      options={[
        { label: "option 1", value: 1 },
        { label: "option 2", value: 2 },
      ]}
    />
  ),
}
export const Large: StoryObj<typeof Select> = {
  render: () => (
    <Select
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      scale="lg"
      options={[
        { label: "option 1", value: 1 },
        { label: "option 2", value: 2 },
      ]}
    />
  ),
}
