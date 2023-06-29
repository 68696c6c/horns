import { NavItemData, NavLinkProps } from "./utils"

export type NavItemProps = NavItemData & {
  DefaultLinkComponent: React.ComponentType<NavLinkProps>
  handleItemActivate?: (id?: string) => void
  isOpen?: boolean
  iconContent?: React.ReactElement
}

export const NavItem = ({
  id,
  label,
  content,
  href = "#",
  items,
  LinkComponent,
  DefaultLinkComponent,
  handleItemActivate,
  variant,
  isOpen,
  iconContent,
}: NavItemProps) => {
  const Tag = LinkComponent || DefaultLinkComponent
  return (
    <Tag
      href={href}
      variant={variant}
      aria-label={label}
      aria-expanded={isOpen ? "true" : "false"}
      onKeyUp={(event: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === "Escape") {
          if (handleItemActivate) handleItemActivate()
        }
      }}
      onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
        // If this nav item doesn't have any sub-items, bail out and let the native anchor behavior
        // take over.  Otherwise, open the menu instead.
        if (!items) return
        event.preventDefault()
        event.stopPropagation()
        if (handleItemActivate) handleItemActivate(id)
      }}
    >
      {content}
      {items && iconContent}
    </Tag>
  )
}
