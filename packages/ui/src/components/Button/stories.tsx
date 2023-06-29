import { Meta, StoryObj } from "@storybook/react"
import { MdAccountBox } from "react-icons/md"
import { RxEnvelopeClosed } from "react-icons/rx"

import { Button } from "./index"

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: [
        "enabled",
        "disabled",
        "error",
        "selected",
        "primary",
        "secondary",
        "tertiary",
      ],
      control: { type: "radio" },
    },
    scale: {
      options: ["min", "sm", "md", "lg"],
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
    children: "Hello World",
  },
}

export default meta

export const Default: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
    />
  ),
}

export const Enabled: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      variant="enabled"
    >
      Hello World
    </Button>
  ),
}

export const Disabled: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      disabled
    >
      Hello World
    </Button>
  ),
}

export const Error: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      hasError
    >
      Hello World
    </Button>
  ),
}

export const Primary: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      variant="primary"
    >
      Hello World
    </Button>
  ),
}

export const Secondary: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      variant="secondary"
    >
      Hello World
    </Button>
  ),
}

export const Tertiary: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      variant="tertiary"
    >
      Hello World
    </Button>
  ),
}

export const Min: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      scale="min"
    >
      Hello World
    </Button>
  ),
}

export const Small: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      scale="sm"
    >
      Hello World
    </Button>
  ),
}

export const Medium: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      scale="md"
    >
      Hello World
    </Button>
  ),
}

export const Large: StoryObj<typeof Button> = {
  render: ({ Icon1, Icon2, ...props }) => (
    <Button
      {...props}
      Icon1={Icon1 && MdAccountBox}
      Icon2={Icon2 && RxEnvelopeClosed}
      scale="lg"
    >
      Hello World
    </Button>
  ),
}
