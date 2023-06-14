import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./index"

const meta: Meta<typeof Checkbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Checkbox",
  component: Checkbox,
}
export default meta

export const Default: StoryObj<typeof Checkbox> = {
  render: () => (
    <Checkbox
      name="example"
      label="Example"
      message="hello world"
      placeholder="placeholder"
      options={[
        { label: "option 1", value: 1 },
        { label: "option 2", value: 2 },
      ]}
    />
  ),
}
export const Error: StoryObj<typeof Checkbox> = {
  render: () => (
    <Checkbox
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
export const Small: StoryObj<typeof Checkbox> = {
  render: () => (
    <Checkbox
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
export const Medium: StoryObj<typeof Checkbox> = {
  render: () => (
    <Checkbox
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
export const Large: StoryObj<typeof Checkbox> = {
  render: () => (
    <Checkbox
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
