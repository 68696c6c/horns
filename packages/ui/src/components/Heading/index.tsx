import classnames from "classnames"

import { HeadingFont } from "@horns/theme"

import * as styles from "../../theme.css"

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode
}

export const Display = ({ children, className, ...attrs }: HeadingProps) => (
  <h1 className={classnames(styles.display, className)} {...attrs}>
    {children}
  </h1>
)

export const H1 = ({ children, className, ...attrs }: HeadingProps) => (
  <h1 className={classnames(styles.h1, className)} {...attrs}>
    {children}
  </h1>
)

export const H2 = ({ children, className, ...attrs }: HeadingProps) => (
  <h2 className={classnames(styles.h2, className)} {...attrs}>
    {children}
  </h2>
)

export const H3 = ({ children, className, ...attrs }: HeadingProps) => (
  <h3 className={classnames(styles.h3, className)} {...attrs}>
    {children}
  </h3>
)

export const H4 = ({ children, className, ...attrs }: HeadingProps) => (
  <h4 className={classnames(styles.h4, className)} {...attrs}>
    {children}
  </h4>
)

export const H5 = ({ children, className, ...attrs }: HeadingProps) => (
  <h5 className={classnames(styles.h5, className)} {...attrs}>
    {children}
  </h5>
)

export const H6 = ({ children, className, ...attrs }: HeadingProps) => (
  <h6 className={classnames(styles.h6, className)} {...attrs}>
    {children}
  </h6>
)

export const Heading = ({
  level,
  ...others
}: HeadingProps & { level: HeadingFont }) => {
  switch (level) {
    case "display":
      return <Display {...others} />
    case "h1":
      return <H1 {...others} />
    case "h2":
      return <H2 {...others} />
    case "h3":
      return <H3 {...others} />
    case "h4":
      return <H4 {...others} />
    case "h5":
      return <H5 {...others} />
    case "h6":
      return <H6 {...others} />
    default:
      return <span {...others} />
  }
}
