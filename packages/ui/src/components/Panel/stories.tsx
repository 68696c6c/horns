import { Meta, StoryObj } from "@storybook/react"
import { MdAccountBox } from "react-icons/md"
import { RxAccessibility } from "react-icons/rx"

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
      options: [
        "neutral",
        "neutralAlt",
        "inverse",
        "inverseAlt",
        "prominent",
        "prominentAlt",
      ],
      control: { type: "radio" },
    },
    scale: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  args: {
    headline: (
      <>
        <RxAccessibility />
        Hello World
        <MdAccountBox />
      </>
    ),
    children: (
      <>
        <p>
          White dwarf preserve and cherish that pale blue dot muse about realm
          of the galaxies as a patch of light descended from astronomers? Are
          creatures of the cosmos the carbon in our apple pies the ash of
          stellar alchemy inconspicuous motes of rock and gas a very small stage
          in a vast cosmic arena the only home we've ever known. Corpus callosum
          permanence of the stars corpus callosum across the centuries something
          incredible is waiting to be known with pretty stories for which
          there's little good evidence?
        </p>
        <p>
          Radio telescope laws of physics bits of moving fluff realm of the
          galaxies dispassionate extraterrestrial observer kindling the energy
          hidden in matter. A very small stage in a vast cosmic arena courage of
          our questions from which we spring not a sunrise but a galaxyrise
          courage of our questions vanquish the impossible. Emerged into
          consciousness the only home we've ever known the only home we've ever
          known across the centuries made in the interiors of collapsing stars
          dream of the mind's eye?
        </p>
        <p>
          Flatland courage of our questions the sky calls to us colonies
          permanence of the stars not a sunrise but a galaxyrise. The only home
          we've ever known extraordinary claims require extraordinary evidence
          gathered by gravity citizens of distant epochs another world
          tesseract. With pretty stories for which there's little good evidence
          take root and flourish star stuff harvesting star light with pretty
          stories for which there's little good evidence a still more glorious
          dawn awaits network of wormholes and billions upon billions upon
          billions upon billions upon billions upon billions upon billions.
        </p>
      </>
    ),
  },
}

export default meta

export const Default: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} />,
}

export const Neutral: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="neutral" />,
}

export const NeutralAlt: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="neutralAlt" />,
}

export const Inverse: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="inverse" />,
}

export const InverseAlt: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="inverseAlt" />,
}

export const Prominent: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="prominent" />,
}

export const ProminentAlt: StoryObj<typeof Panel> = {
  render: (props) => <Panel {...props} variant="prominentAlt" />,
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
