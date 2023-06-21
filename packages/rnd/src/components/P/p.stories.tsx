import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { P } from "./index"

const meta: Meta<typeof P> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "P",
  component: P,
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

export const Default: StoryObj<typeof P> = {
  render: (props) => <P {...props} />,
}
export const Body1: StoryObj<typeof P> = {
  render: (props) => <P {...props} font="body1" />,
}
export const Body2: StoryObj<typeof P> = {
  render: (props) => <P {...props} font="body2" />,
}
export const Small: StoryObj<typeof P> = {
  render: (props) => <P {...props} scale="sm" />,
}
export const Medium: StoryObj<typeof P> = {
  render: (props) => <P {...props} scale="md" />,
}
export const Large: StoryObj<typeof P> = {
  render: (props) => <P {...props} scale="lg" />,
}
