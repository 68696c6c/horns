import * as React from "react"
import { IconType } from "react-icons"
import { Meta, Story, StoryFn, StoryObj } from "@storybook/react"
import { MdAccountBox } from "react-icons/md"
import { RxAccessibility, RxEnvelopeClosed } from "react-icons/rx"

import { Span } from "../Span"
import { Notification } from "./index"

const meta: Meta<typeof Notification> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Notification",
  component: Notification,
  argTypes: {
    variant: {
      options: ["background", "info", "success", "warning", "danger"],
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

export const Default: StoryObj<typeof Notification> = {
  render: (props) => (
    <Notification
      {...props}
      // Icon1={Icon1 && MdAccountBox}
      // Icon2={Icon2 && RxEnvelopeClosed}
    />
  ),
}

export const Info: StoryObj<typeof Notification> = {
  render: (props) => <Notification {...props} variant="info" />,
}

export const Success: StoryObj<typeof Notification> = {
  render: (props) => <Notification {...props} variant="success" />,
}

export const Warning: StoryObj<typeof Notification> = {
  render: (props) => <Notification {...props} variant="warning" />,
}

export const Danger: StoryObj<typeof Notification> = {
  render: (props) => <Notification {...props} variant="danger" />,
}

export const Small: StoryObj<typeof Notification> = {
  render: (props) => <Notification {...props} scale="sm" />,
}

export const Medium: StoryObj<typeof Notification> = {
  render: (props) => <Notification {...props} scale="md" />,
}

export const Large: StoryObj<typeof Notification> = {
  render: (props) => <Notification {...props} scale="lg" />,
}
