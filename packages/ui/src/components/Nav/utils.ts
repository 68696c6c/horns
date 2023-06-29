export const isOpenClass = "open"
export const getIsOpenClass = (isOpen?: boolean): string => {
  return isOpen ? isOpenClass : ""
}

export const isTopLevelMenuClass = "isTopLevelMenu"
export const getIsTopLevelMenuClass = (isTopLevelMenu?: boolean): string => {
  return isTopLevelMenu ? isTopLevelMenuClass : ""
}

export const isTopLevelMobileMenuClass = "isTopLevelMobileMenu"
export const getIsTopLevelMobileMenu = (
  isTopLevelMobileMenu?: boolean
): string => {
  return isTopLevelMobileMenu ? isTopLevelMobileMenuClass : ""
}

export type NavLinkProps = {
  children?: React.ReactNode
  href?: string
  variant?: "navItem" | "navItemHeading" | "copy" | "navItemTop"
  onKeyUp?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export type NavItemData = NavLinkProps & {
  id: string
  label?: string
  content?: React.ReactNode
  description?: string
  items?: NavItemData[]
  LinkComponent?: React.ComponentType<NavLinkProps>
}

const traverse = (
  items: NavItemData[],
  callback: (child: NavItemData) => void,
  enterCallback?: (child: NavItemData) => void,
  exitCallback?: (child: NavItemData) => void
) => {
  items.forEach((item) => {
    callback(item)
    if (item.items) {
      if (enterCallback) enterCallback(item)
      traverse(item.items, callback, enterCallback, exitCallback)
      if (exitCallback) exitCallback(item)
    }
  })
}

export type NavItemIdMap = Record<string, string[]>

export const makeItemParentIdsMap = (items: NavItemData[]): NavItemIdMap => {
  const itemIds: string[] = []
  const result: NavItemIdMap = {}
  traverse(
    items,
    (child) => {
      result[child.id] = [...itemIds]
    },
    (child) => {
      itemIds.push(child.id)
    },
    (child) => {
      const itemIdIndex = itemIds.indexOf(child.id)
      itemIds.splice(itemIdIndex, 1)
    }
  )
  return result
}

export const makeItemChildIdsMap = (items: NavItemData[]): NavItemIdMap => {
  let itemIds: string[] = []
  const result: NavItemIdMap = {}
  traverse(items, (item) => {
    itemIds = []
    if (item.items) {
      traverse(item.items, (child) => {
        itemIds.push(child.id)
      })
    }
    result[item.id] = itemIds
  })
  return result
}
