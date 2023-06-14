import * as React from "react"
import { IconType } from "react-icons"
import { Meta, StoryObj } from "@storybook/react"
import { MdAccountBox } from "react-icons/md"
import { RxEnvelopeClosed } from "react-icons/rx"

import { Anchor } from "./index"

const meta: Meta<typeof Anchor> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Anchor",
  component: Anchor,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    scale: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    Icon1: {
      control: "boolean",
      defaultValue: true,
    },
    Icon2: {
      control: "boolean",
      defaultValue: true,
    },
  },
  args: {
    href: "#",
    children: "Hello World",
  },
}
export default meta

export const Default: StoryObj<typeof Anchor> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Anchor
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
    >
      Hello World
    </Anchor>
  ),
}

export const Primary: StoryObj<typeof Anchor> = {
  render: () => (
    <Anchor Icon1={MdAccountBox} Icon2={RxEnvelopeClosed} variant="primary">
      Hello World
    </Anchor>
  ),
}

export const Secondary: StoryObj<typeof Anchor> = {
  render: () => (
    <Anchor Icon1={MdAccountBox} Icon2={RxEnvelopeClosed} variant="secondary">
      Hello World
    </Anchor>
  ),
}

export const Tertiary: StoryObj<typeof Anchor> = {
  render: () => (
    <Anchor Icon1={MdAccountBox} Icon2={RxEnvelopeClosed} variant="tertiary">
      Hello World
    </Anchor>
  ),
}

export const Small: StoryObj<typeof Anchor> = {
  render: () => (
    <Anchor Icon1={MdAccountBox} Icon2={RxEnvelopeClosed} scale="sm">
      Hello World
    </Anchor>
  ),
}

export const Medium: StoryObj<typeof Anchor> = {
  render: () => (
    <Anchor Icon1={MdAccountBox} Icon2={RxEnvelopeClosed} scale="md">
      Hello World
    </Anchor>
  ),
}

export const Large: StoryObj<typeof Anchor> = {
  render: () => (
    <Anchor Icon1={MdAccountBox} Icon2={RxEnvelopeClosed} scale="lg">
      Hello World
    </Anchor>
  ),
}
