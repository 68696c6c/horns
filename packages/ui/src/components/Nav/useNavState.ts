import * as React from "react"
import _without from "lodash.without"

import {
  makeItemChildIdsMap,
  makeItemParentIdsMap,
  NavItemData,
  NavItemIdMap,
} from "./utils"

export type NavState = {
  itemsToRender: NavItemData[]
  openLinkIds: string[]
  handleItemActivate?: (id?: string) => void
}

export const useNavState = (
  items: NavItemData[],
  isMobile?: boolean
): NavState => {
  // If we are not in mobile mode, don't render the top-level hamburger item.
  let itemsToRender = items
  if (!isMobile) {
    itemsToRender = items[0].items || []
  }

  // Map each item id to all of its parent ids and vice-versa.
  const [parentIdsMap, setParentIdsMap] = React.useState<NavItemIdMap>({})
  const [childIdsMap, setChildIdMap] = React.useState<NavItemIdMap>({})
  React.useEffect(() => {
    setParentIdsMap(makeItemParentIdsMap(items))
    setChildIdMap(makeItemChildIdsMap(items))
  }, [items])

  // Keep track of the currently open menu items.
  const [openLinkIds, setOpenLinkIds] = React.useState<string[]>([])

  const handleItemActivate = React.useCallback(
    (id?: string) => {
      if (!id) {
        // Something outside the nav was clicked; close all the menus.
        setOpenLinkIds([])
        return
      }
      if (openLinkIds.includes(id)) {
        // Close the nav menu and all of its child menus.
        const childIds = childIdsMap[id]
        const merged = _without(openLinkIds, ...childIds, id)
        setOpenLinkIds(merged)
      } else {
        // Open the nav menu.
        const itemParentIds = parentIdsMap[id]
        setOpenLinkIds([id, ...itemParentIds])
      }
    },
    [openLinkIds, parentIdsMap]
  )

  const handleWindowClick = () => {
    setOpenLinkIds([])
  }

  // We need a listener on the window to close the nav if the user clicks somewhere outside it.
  React.useEffect(() => {
    window.addEventListener("click", handleWindowClick)
    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  }, [])

  return {
    itemsToRender,
    openLinkIds,
    handleItemActivate,
  }
}
