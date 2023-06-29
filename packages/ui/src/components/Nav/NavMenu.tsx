import classnames from "classnames"

import {
  getIsOpenClass,
  getIsTopLevelMenuClass,
  getIsTopLevelMobileMenu,
  NavItemData,
} from "./utils"
import * as styles from "../../theme.css"

export type NavMenuProps = React.HTMLAttributes<HTMLElement> & {
  items?: NavItemData[]
  openIds: string[]
  layout?: "horizontal" | "vertical"
  renderItem: (props: NavItemData, isOpen?: boolean) => React.ReactNode
  renderChildren: (items?: NavItemData[]) => React.ReactNode
  isTopLevelMenu?: boolean
  isTopLevelMobileMenu?: boolean
}

export const NavMenu = ({
  items,
  layout,
  openIds,
  renderItem,
  renderChildren,
  isTopLevelMenu,
  isTopLevelMobileMenu,
  className,
}: NavMenuProps) => (
  // We definitely need a fragment here since map is going to return multiple children.
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {items?.map((item) => {
      const isOpen = openIds.includes(item.id)
      return (
        <div key={item.id} className={classnames(layout, className)}>
          {renderItem(item, isOpen)}
          <nav
            className={classnames(
              styles.navMenu,
              getIsOpenClass(isOpen),
              getIsTopLevelMenuClass(isTopLevelMenu),
              getIsTopLevelMobileMenu(isTopLevelMobileMenu)
            )}
          >
            {renderChildren(item.items)}
          </nav>
        </div>
      )
    })}
  </>
)
