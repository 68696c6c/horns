import * as React from "react"
import { IconType } from "react-icons"
import { Meta, Story, StoryFn, StoryObj } from "@storybook/react"
import { MdAccountBox } from "react-icons/md"
import { RxAccessibility, RxEnvelopeClosed } from "react-icons/rx"

import { Span } from "../Span"
import { Card } from "./index"

const meta: Meta<typeof Card> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
  argTypes: {
    variant: {
      options: ["background", "inverse"],
      control: { type: "radio" },
    },
    scale: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  args: {
    children: (
      <>
        <RxAccessibility />
        Hello World
        <MdAccountBox />
      </>
    ),
  },
}
export default meta

export const Default: StoryObj<typeof Card> = {
  render: (props) => (
    <Card
      {...props}
      // Icon1={Icon1 && MdAccountBox}
      // Icon2={Icon2 && RxEnvelopeClosed}
    />
  ),
}

export const Background: StoryObj<typeof Card> = {
  render: (props) => <Card {...props} />,
}

export const Inverse: StoryObj<typeof Card> = {
  render: (props) => <Card {...props} variant="inverse" />,
}

export const Small: StoryObj<typeof Card> = {
  render: (props) => <Card {...props} scale="sm" />,
}

export const Medium: StoryObj<typeof Card> = {
  render: (props) => <Card {...props} scale="md" />,
}

export const Large: StoryObj<typeof Card> = {
  render: (props) => <Card {...props} scale="lg" />,
}
