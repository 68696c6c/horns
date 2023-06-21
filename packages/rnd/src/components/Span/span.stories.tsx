import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Span } from "./index"

const meta: Meta<typeof Span> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Span",
  component: Span,
  argTypes: {
    font: {
      options: [
        "body1",
        "body2",
        "body3",
        "label",
        "caption",
        "captionHeading",
      ],
      control: { type: "radio" },
    },
    scale: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Hello world",
  },
}
export default meta

export const Default: StoryObj<typeof Span> = {
  render: (props) => <Span {...props} />,
}
export const Body1: StoryObj<typeof Span> = {
  render: (props) => <Span {...props} font="body1" />,
}
export const Body2: StoryObj<typeof Span> = {
  render: (props) => <Span {...props} font="body2" />,
}
export const Small: StoryObj<typeof Span> = {
  render: (props) => <Span {...props} scale="sm" />,
}
export const Medium: StoryObj<typeof Span> = {
  render: (props) => <Span {...props} scale="md" />,
}
export const Large: StoryObj<typeof Span> = {
  render: (props) => <Span {...props} scale="lg" />,
}
