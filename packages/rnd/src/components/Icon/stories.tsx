import * as React from "react"
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
  // argTypes: {
  //   level: {
  //     options: ["display", "h1", "h2", "h3", "h4", "h5", "h6"],
  //     control: { type: "radio" },
  //   },
  // },
  // args: {
  //   children: "Hello world",
  // },
}
export default meta

export const Default: StoryObj<typeof Icon> = {
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
      <div>
        <Icon SVG={RxEnvelopeClosed} scale="sm" />
        <Icon SVG={RxHeartFilled} scale="sm" />
        <Icon SVG={MdMailOutline} scale="sm" />
        <Icon SVG={MdAccountBox} scale="sm" />
        <Icon SVG={FaHotjar} scale="sm" />
        <Icon SVG={FaEmpire} scale="sm" />
      </div>
      <div>
        <Icon SVG={RxEnvelopeClosed} scale="md" />
        <Icon SVG={RxHeartFilled} scale="md" />
        <Icon SVG={MdMailOutline} scale="md" />
        <Icon SVG={MdAccountBox} scale="md" />
        <Icon SVG={FaHotjar} scale="md" />
        <Icon SVG={FaEmpire} scale="md" />
      </div>
      <div>
        <Icon SVG={RxEnvelopeClosed} scale="lg" />
        <Icon SVG={RxHeartFilled} scale="lg" />
        <Icon SVG={MdMailOutline} scale="lg" />
        <Icon SVG={MdAccountBox} scale="lg" />
        <Icon SVG={FaHotjar} scale="lg" />
        <Icon SVG={FaEmpire} scale="lg" />
      </div>
      <h2>colorways</h2>
      <div>
        <h3>primary</h3>
        <Icon SVG={BiX} colorway="primary" />
        <Icon SVG={RxEnvelopeClosed} colorway="primary" />
        <Icon SVG={RxHeartFilled} colorway="primary" />
        <Icon SVG={MdMailOutline} colorway="primary" />
        <Icon SVG={MdAccountBox} colorway="primary" />
        <Icon SVG={FaHotjar} colorway="primary" />
        <Icon SVG={FaEmpire} colorway="primary" />
      </div>
      <div>
        <h3>secondary</h3>
        <Icon SVG={BiX} colorway="secondary" />
        <Icon SVG={RxEnvelopeClosed} colorway="secondary" />
        <Icon SVG={RxHeartFilled} colorway="secondary" />
        <Icon SVG={MdMailOutline} colorway="secondary" />
        <Icon SVG={MdAccountBox} colorway="secondary" />
        <Icon SVG={FaHotjar} colorway="secondary" />
        <Icon SVG={FaEmpire} colorway="secondary" />
      </div>
      <div>
        <h3>tertiary</h3>
        <Icon SVG={BiX} colorway="tertiary" />
        <Icon SVG={RxEnvelopeClosed} colorway="tertiary" />
        <Icon SVG={RxHeartFilled} colorway="tertiary" />
        <Icon SVG={MdMailOutline} colorway="tertiary" />
        <Icon SVG={MdAccountBox} colorway="tertiary" />
        <Icon SVG={FaHotjar} colorway="tertiary" />
        <Icon SVG={FaEmpire} colorway="primary" />
      </div>
      <div>
        <h3>info</h3>
        <Icon SVG={BiX} colorway="info" />
        <Icon SVG={RxEnvelopeClosed} colorway="info" />
        <Icon SVG={RxHeartFilled} colorway="info" />
        <Icon SVG={MdMailOutline} colorway="info" />
        <Icon SVG={MdAccountBox} colorway="info" />
        <Icon SVG={FaHotjar} colorway="info" />
        <Icon SVG={FaEmpire} colorway="info" />
      </div>
      <div>
        <h3>success</h3>
        <Icon SVG={BiX} colorway="success" />
        <Icon SVG={RxEnvelopeClosed} colorway="success" />
        <Icon SVG={RxHeartFilled} colorway="success" />
        <Icon SVG={MdMailOutline} colorway="success" />
        <Icon SVG={MdAccountBox} colorway="success" />
        <Icon SVG={FaHotjar} colorway="success" />
        <Icon SVG={FaEmpire} colorway="success" />
      </div>
      <div>
        <h3>warning</h3>
        <Icon SVG={BiX} colorway="warning" />
        <Icon SVG={RxEnvelopeClosed} colorway="warning" />
        <Icon SVG={RxHeartFilled} colorway="warning" />
        <Icon SVG={MdMailOutline} colorway="warning" />
        <Icon SVG={MdAccountBox} colorway="warning" />
        <Icon SVG={FaHotjar} colorway="warning" />
        <Icon SVG={FaEmpire} colorway="warning" />
      </div>
      <div>
        <h3>danger</h3>
        <Icon SVG={BiX} colorway="danger" />
        <Icon SVG={RxEnvelopeClosed} colorway="danger" />
        <Icon SVG={RxHeartFilled} colorway="danger" />
        <Icon SVG={MdMailOutline} colorway="danger" />
        <Icon SVG={MdAccountBox} colorway="danger" />
        <Icon SVG={FaHotjar} colorway="danger" />
        <Icon SVG={FaEmpire} colorway="danger" />
      </div>
      <div>
        <h3>disabled</h3>
        <Icon SVG={BiX} colorway="disabled" />
        <Icon SVG={RxEnvelopeClosed} colorway="disabled" />
        <Icon SVG={RxHeartFilled} colorway="disabled" />
        <Icon SVG={MdMailOutline} colorway="disabled" />
        <Icon SVG={MdAccountBox} colorway="disabled" />
        <Icon SVG={FaHotjar} colorway="disabled" />
        <Icon SVG={FaEmpire} colorway="disabled" />
      </div>
      <div>
        <h3>error</h3>
        <Icon SVG={BiX} colorway="error" />
        <Icon SVG={RxEnvelopeClosed} colorway="error" />
        <Icon SVG={RxHeartFilled} colorway="error" />
        <Icon SVG={MdMailOutline} colorway="error" />
        <Icon SVG={MdAccountBox} colorway="error" />
        <Icon SVG={FaHotjar} colorway="error" />
        <Icon SVG={FaEmpire} colorway="error" />
      </div>
      <div>
        <h3>selected</h3>
        <Icon SVG={BiX} colorway="selected" />
        <Icon SVG={RxEnvelopeClosed} colorway="selected" />
        <Icon SVG={RxHeartFilled} colorway="selected" />
        <Icon SVG={MdMailOutline} colorway="selected" />
        <Icon SVG={MdAccountBox} colorway="selected" />
        <Icon SVG={FaHotjar} colorway="selected" />
        <Icon SVG={FaEmpire} colorway="selected" />
      </div>
    </div>
  ),
}
