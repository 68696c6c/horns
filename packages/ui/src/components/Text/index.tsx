import classnames from "classnames"

import { BodyFont, Scale } from "@horns/theme"

import * as React from "react"
import * as styles from "../../theme.css"

export type TextProps<T = React.HTMLAttributes<HTMLSpanElement>> = T & {
  font?: BodyFont
  scale?: Scale
}

export const Em = ({
  scale = "md",
  className,
  children,
  ...attrs
}: TextProps) => (
  <em className={classnames(styles.textEmphasis, scale, className)} {...attrs}>
    {children}
  </em>
)

export const Label = ({
  font = "label",
  scale = "md",
  className,
  children,
  ...attrs
}: TextProps<React.LabelHTMLAttributes<HTMLLabelElement>>) => (
  <label
    className={classnames(styles.textLabel, font, scale, className)}
    {...attrs}
  >
    {children}
  </label>
)

export const Span = ({
  font = "body1",
  scale = "md",
  className,
  children,
  ...attrs
}: TextProps) => (
  <span className={classnames(styles.text, font, scale, className)} {...attrs}>
    {children}
  </span>
)

export const Strong = ({
  scale = "md",
  className,
  children,
  ...attrs
}: TextProps) => (
  <strong
    className={classnames(styles.textStrong, scale, className)}
    {...attrs}
  >
    {children}
  </strong>
)

export const P = ({
  font = "body1",
  scale = "md",
  className,
  children,
  ...attrs
}: TextProps<React.HTMLAttributes<HTMLParagraphElement>>) => (
  <p className={classnames(styles.text, font, scale, className)} {...attrs}>
    {children}
  </p>
)

export type TextTag = "em" | "label" | "p" | "span" | "strong"

export const Text = ({ tag, ...others }: TextProps & { tag: TextTag }) => {
  switch (tag) {
    case "em":
      return <Em {...others} />
    case "label":
      return <Label {...others} />
    case "p":
      return <P {...others} />
    case "strong":
      return <Strong {...others} />
    default:
      return <Span {...others} />
  }
}
