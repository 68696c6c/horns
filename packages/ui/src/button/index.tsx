import { ButtonProps as BaseButtonProps } from "@horns/rnd"

export type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
  }

export const Button = ({
  children,
  type = "button",
  colorway,
  size,
  state,
  ...others
}: ButtonProps) => {
  // I have read the full discussion on this lint rule here:
  // https://github.com/jsx-eslint/eslint-plugin-react/issues/1555
  // I don't fully understand the issue this rule is trying to solve,
  // but I believe the way we are handling it within TS is sufficient.
  // eslint-disable-next-line react/button-has-type
  return <button type={type}>{children}</button>
}
