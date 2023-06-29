import { NavItemData, NavLinkProps } from "./utils"
import { useNavState } from "./useNavState"
import { NavItem } from "./NavItem"
import { NavMenu } from "./NavMenu"
import * as styles from "../../theme.css"

export type NavProps = {
  LinkComponent: React.ComponentType<NavLinkProps>
  items: NavItemData[]
  isMobile?: boolean
}

export const Nav = ({ items, isMobile, LinkComponent }: NavProps) => {
  const { itemsToRender, openLinkIds, handleItemActivate } = useNavState(
    items,
    isMobile
  )
  const renderItem = (baseItemProps: NavItemData, isOpen?: boolean) => (
    <NavItem
      {...baseItemProps}
      key={baseItemProps.id}
      handleItemActivate={handleItemActivate}
      DefaultLinkComponent={LinkComponent}
      isOpen={isOpen}
    />
  )
  const renderChildren = (navItems?: NavItemData[]) => (
    <NavMenu
      className={styles.navMenuContainer}
      layout="vertical"
      items={navItems}
      openIds={openLinkIds}
      renderItem={renderItem}
      renderChildren={renderChildren}
    />
  )
  return (
    <nav className={styles.nav}>
      <NavMenu
        className={styles.navMenuContainer}
        layout="vertical"
        items={itemsToRender}
        openIds={openLinkIds}
        renderItem={renderItem}
        renderChildren={renderChildren}
        isTopLevelMenu
      />
    </nav>
  )
}
