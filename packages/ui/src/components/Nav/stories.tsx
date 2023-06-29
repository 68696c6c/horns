import { Meta, StoryObj } from "@storybook/react"
import classnames from "classnames"
import { MdMenu } from "react-icons/md"

import { Icon } from "../Icon"
import { NavLinkProps } from "./utils"
import * as styles from "../../theme.css"

import { Nav } from "./index"

type StorybookLinkProps = NavLinkProps & React.HTMLAttributes<HTMLAnchorElement>

const StorybookLink = ({ children, variant, ...props }: StorybookLinkProps) => (
  // We don't want these links to go anywhere, they just need to be clickable
  // links so that we can make sure the nav item behavior works correctly.
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a {...props} href="#" className={classnames(styles.navLink, variant)}>
    {children}
  </a>
)

const meta: Meta<typeof Nav> = {
  title: "Nav",
  component: Nav,
  args: {
    LinkComponent: StorybookLink,
    items: [
      {
        id: "top",
        content: <Icon SVG={MdMenu} />,
        items: [
          {
            content: "Lorem ipsum",
            id: "lorem-ipsum",
            items: [
              {
                content: "Dolor sit amet",
                id: "dolor-sit-amet",
                items: [
                  {
                    content: "consectetur",
                    id: "consectetur",
                    description: "Ahpuch Dagon Bast Ili e-Ol balazodareji",
                  },
                  {
                    content: "Sed do",
                    id: "sed-do",
                    description: "Ahpuch Dagon Bast Ili e-Ol balazodareji",
                  },
                  {
                    content: "Eiusmod",
                    id: "eiusmod",
                    description: "Ahpuch Dagon Bast Ili e-Ol balazodareji",
                  },
                ],
              },
            ],
          },
          {
            content: "Tempor incididunt",
            id: "tempor-incididunt",
            items: [
              {
                content: "Ut labore",
                id: "ut-labore",
                items: [
                  {
                    content: "Et dolore",
                    id: "et-dolore",
                    description: "Marduk T'an-mo elanu saha caelazod",
                  },
                  {
                    content: "Magna aliqua",
                    id: "magna-aliqua",
                    description: "Marduk T'an-mo elanu saha caelazod",
                  },
                  {
                    content: "Nunc lobortis",
                    id: "nunc-lobortis",
                    description: "Marduk T'an-mo elanu saha caelazod",
                  },
                ],
              },
              {
                content: "Mattis aliquam",
                id: "mattis-aliquam",
                items: [
                  {
                    content: "Faucibus",
                    id: "faucibus",
                    description: "Ili e-Ol balazodareji",
                  },
                  {
                    content: "Eleifend mi",
                    id: "eleifend-mi",
                    description: "Ili e-Ol balazodareji",
                  },
                  {
                    content: "In nulla",
                    id: "in-nulla",
                    description: "Ili e-Ol balazodareji",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

export default meta

export const Default: StoryObj<typeof Nav> = {
  render: (props) => <Nav {...props} />,
}

export const Mobile: StoryObj<typeof Nav> = {
  render: (props) => <Nav {...props} isMobile />,
}

export const Desktop: StoryObj<typeof Nav> = {
  render: (props) => <Nav {...props} isMobile={false} />,
}
