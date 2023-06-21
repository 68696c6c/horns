import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Radio } from "./index"

const meta: Meta<typeof Radio> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Radio",
  component: Radio,
}
export default meta

export const Default: StoryObj<typeof Radio> = {
  render: () => (
    <Radio
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
export const Error: StoryObj<typeof Radio> = {
  render: () => (
    <Radio
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
export const Small: StoryObj<typeof Radio> = {
  render: () => (
    <Radio
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
export const Medium: StoryObj<typeof Radio> = {
  render: () => (
    <Radio
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
export const Large: StoryObj<typeof Radio> = {
  render: () => (
    <Radio
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
