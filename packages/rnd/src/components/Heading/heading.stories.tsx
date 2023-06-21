import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Heading } from "./index"

const meta: Meta<typeof Heading> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Heading",
  component: Heading,
  argTypes: {
    level: {
      options: ["display", "h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Hello world",
  },
}
export default meta

export const Default: StoryObj<typeof Heading> = {
  render: (props) => <Heading {...props} />,
}
