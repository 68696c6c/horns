import { Meta, StoryObj } from "@storybook/react"
import { RxEnvelopeClosed, RxHeartFilled } from "react-icons/rx"
import { MdMailOutline, MdAccountBox } from "react-icons/md"
import { FaHotjar, FaEmpire } from "react-icons/fa"
import { BiX } from "react-icons/bi"

import { Icon } from "./index"

const meta: Meta<typeof Icon> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Icons",
  component: Icon,
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "danger",
        "enabled",
        "disabled",
        "selected",
        "error",
      ],
      control: { type: "select" },
    },
  },
  // args: {
  //   children: "Hello world",
  // },
}

export default meta

export const Default: StoryObj<typeof Icon> = {
  render: (props) => (
    <div>
      <Icon {...props} SVG={BiX} />
      <Icon {...props} SVG={RxEnvelopeClosed} />
      <Icon {...props} SVG={RxHeartFilled} />
      <Icon {...props} SVG={MdMailOutline} />
      <Icon {...props} SVG={MdAccountBox} />
      <Icon {...props} SVG={FaHotjar} />
      <Icon {...props} SVG={FaEmpire} />
    </div>
  ),
}

export const Temp: StoryObj<typeof Icon> = {
  render: (props) => (
    <div>
      <div>
        <RxEnvelopeClosed color="orange" />
        <RxHeartFilled color="orange" />
        <MdMailOutline color="orange" />
        <MdAccountBox color="orange" />
        <FaHotjar color="orange" />
        <FaEmpire color="orange" />
      </div>
      <h2>variants</h2>
      <div>
        <h3>primary</h3>
        <Icon SVG={BiX} variant="primary" />
        <Icon SVG={RxEnvelopeClosed} variant="primary" />
        <Icon SVG={RxHeartFilled} variant="primary" />
        <Icon SVG={MdMailOutline} variant="primary" />
        <Icon SVG={MdAccountBox} variant="primary" />
        <Icon SVG={FaHotjar} variant="primary" />
        <Icon SVG={FaEmpire} variant="primary" />
      </div>
      <div>
        <h3>secondary</h3>
        <Icon SVG={BiX} variant="secondary" />
        <Icon SVG={RxEnvelopeClosed} variant="secondary" />
        <Icon SVG={RxHeartFilled} variant="secondary" />
        <Icon SVG={MdMailOutline} variant="secondary" />
        <Icon SVG={MdAccountBox} variant="secondary" />
        <Icon SVG={FaHotjar} variant="secondary" />
        <Icon SVG={FaEmpire} variant="secondary" />
      </div>
      <div>
        <h3>tertiary</h3>
        <Icon SVG={BiX} variant="tertiary" />
        <Icon SVG={RxEnvelopeClosed} variant="tertiary" />
        <Icon SVG={RxHeartFilled} variant="tertiary" />
        <Icon SVG={MdMailOutline} variant="tertiary" />
        <Icon SVG={MdAccountBox} variant="tertiary" />
        <Icon SVG={FaHotjar} variant="tertiary" />
        <Icon SVG={FaEmpire} variant="primary" />
      </div>
      <div>
        <h3>info</h3>
        <Icon SVG={BiX} variant="info" />
        <Icon SVG={RxEnvelopeClosed} variant="info" />
        <Icon SVG={RxHeartFilled} variant="info" />
        <Icon SVG={MdMailOutline} variant="info" />
        <Icon SVG={MdAccountBox} variant="info" />
        <Icon SVG={FaHotjar} variant="info" />
        <Icon SVG={FaEmpire} variant="info" />
      </div>
      <div>
        <h3>success</h3>
        <Icon SVG={BiX} variant="success" />
        <Icon SVG={RxEnvelopeClosed} variant="success" />
        <Icon SVG={RxHeartFilled} variant="success" />
        <Icon SVG={MdMailOutline} variant="success" />
        <Icon SVG={MdAccountBox} variant="success" />
        <Icon SVG={FaHotjar} variant="success" />
        <Icon SVG={FaEmpire} variant="success" />
      </div>
      <div>
        <h3>warning</h3>
        <Icon SVG={BiX} variant="warning" />
        <Icon SVG={RxEnvelopeClosed} variant="warning" />
        <Icon SVG={RxHeartFilled} variant="warning" />
        <Icon SVG={MdMailOutline} variant="warning" />
        <Icon SVG={MdAccountBox} variant="warning" />
        <Icon SVG={FaHotjar} variant="warning" />
        <Icon SVG={FaEmpire} variant="warning" />
      </div>
      <div>
        <h3>danger</h3>
        <Icon SVG={BiX} variant="danger" />
        <Icon SVG={RxEnvelopeClosed} variant="danger" />
        <Icon SVG={RxHeartFilled} variant="danger" />
        <Icon SVG={MdMailOutline} variant="danger" />
        <Icon SVG={MdAccountBox} variant="danger" />
        <Icon SVG={FaHotjar} variant="danger" />
        <Icon SVG={FaEmpire} variant="danger" />
      </div>
      <div>
        <h3>disabled</h3>
        <Icon SVG={BiX} variant="disabled" />
        <Icon SVG={RxEnvelopeClosed} variant="disabled" />
        <Icon SVG={RxHeartFilled} variant="disabled" />
        <Icon SVG={MdMailOutline} variant="disabled" />
        <Icon SVG={MdAccountBox} variant="disabled" />
        <Icon SVG={FaHotjar} variant="disabled" />
        <Icon SVG={FaEmpire} variant="disabled" />
      </div>
      <div>
        <h3>error</h3>
        <Icon SVG={BiX} variant="error" />
        <Icon SVG={RxEnvelopeClosed} variant="error" />
        <Icon SVG={RxHeartFilled} variant="error" />
        <Icon SVG={MdMailOutline} variant="error" />
        <Icon SVG={MdAccountBox} variant="error" />
        <Icon SVG={FaHotjar} variant="error" />
        <Icon SVG={FaEmpire} variant="error" />
      </div>
      <div>
        <h3>selected</h3>
        <Icon SVG={BiX} variant="selected" />
        <Icon SVG={RxEnvelopeClosed} variant="selected" />
        <Icon SVG={RxHeartFilled} variant="selected" />
        <Icon SVG={MdMailOutline} variant="selected" />
        <Icon SVG={MdAccountBox} variant="selected" />
        <Icon SVG={FaHotjar} variant="selected" />
        <Icon SVG={FaEmpire} variant="selected" />
      </div>
    </div>
  ),
}
