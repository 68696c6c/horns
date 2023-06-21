import * as React from "react"
import { IconType } from "react-icons"
import { Meta, Story, StoryFn, StoryObj } from "@storybook/react"
import { MdAccountBox } from "react-icons/md"
import { RxAccessibility, RxEnvelopeClosed } from "react-icons/rx"

import { Span } from "../Span"
import { Panel } from "./index"

const meta: Meta<typeof Panel> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Panel",
  component: Panel,
  argTypes: {
    variant: {
      options: ["background", "inverse", "prominent"],
      control: { type: "radio" },
    },
    scale: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  args: {
    headline: "Headline",
    children: (
      <Span>
        <RxAccessibility />
        Hello World
        <MdAccountBox />
      </Span>
    ),
  },
}
export default meta

export const Default: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} />,
}

export const Background: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} />,
}

export const Inverse: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="inverse" />,
}

export const Prominent: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="prominent" />,
}

export const Small: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} scale="sm" />,
}

export const Medium: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} scale="md" />,
}

export const Large: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} scale="lg" />,
}
