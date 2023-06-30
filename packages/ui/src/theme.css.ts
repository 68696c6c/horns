import { Theme, makeDefaultTheme } from "@horns/theme"
import { createThemeContract, globalStyle, style } from "@vanilla-extract/css"
import { valueClass } from "./components/Controls"
import { isOpenClass } from "./components/Nav/utils"

export const t = createThemeContract<Theme>(makeDefaultTheme())

// This is needed for react-icons SVGs to correctly inherit colors from their parent.
globalStyle("svg", {
  fill: "inherit",
  stroke: "inherit",
})

// globalStyle("body", {
//   ...t.text.element,
//   ...t.text.variants.body1,
// })
globalStyle("html, .root", {
  ...t.text.element,
  // fontSize: t.text.element.fontSize,
  // lineHeight: t.text.element.lineHeight,
})
globalStyle("body", {
  ...t.text.variants.body,
})
globalStyle(".display", {
  ...t.heading.variants.display,
})
globalStyle("h1", {
  ...t.heading.variants.h1,
})
globalStyle("h2", {
  ...t.heading.variants.h2,
})
globalStyle("h3", {
  ...t.heading.variants.h3,
})
globalStyle("h4", {
  ...t.heading.variants.h4,
})
globalStyle("h5", {
  ...t.heading.variants.h5,
})
globalStyle("h6", {
  ...t.heading.variants.h6,
})
globalStyle("p, ul, ol, pre, table, blockquote", {
  marginTop: t.text.variants.body.marginTop,
  marginBottom: t.text.variants.body.marginBottom,
})
globalStyle("ul ul, ol ol, ul ol, ol ul", {
  marginTop: "0px",
  marginBottom: "0px",
})
globalStyle("hr", {
  border: "1px solid currentColor",
  margin: "-1px 0",
})
globalStyle("sub, sup", {
  position: "relative",
  lineHeight: "0",
  verticalAlign: "baseline",
})
globalStyle("small", {
  fontSize: t.text.variants.small.fontSize,
  lineHeight: t.text.variants.small.lineHeight,
})
globalStyle("sub", {
  bottom: "-0.25em",
})
globalStyle("sup", {
  top: "-0.5em",
})

const sizeBody1Sm = t.surface.variants.sm.lineHeight
globalStyle(".sm svg", { height: sizeBody1Sm, width: sizeBody1Sm })
const sizeBody1Md = t.surface.variants.md.lineHeight
globalStyle(".md svg", { height: sizeBody1Md, width: sizeBody1Md })
const sizeBody1Lg = t.surface.variants.lg.lineHeight
globalStyle(".lg svg", { height: sizeBody1Lg, width: sizeBody1Lg })

// const sizeBody2Sm = t.text.variants.body2.sizes.sm.lineHeight
// globalStyle(".body2.sm svg", { height: sizeBody2Sm, width: sizeBody2Sm })
// const sizeBody2Md = t.text.variants.body2.sizes.md.lineHeight
// globalStyle(".body2.md svg", { height: sizeBody2Md, width: sizeBody2Md })
// const sizeBody2Lg = t.text.variants.body2.sizes.lg.lineHeight
// globalStyle(".body2.lg svg", { height: sizeBody2Lg, width: sizeBody2Lg })
//
// const sizeBody3Sm = t.text.variants.body3.sizes.sm.lineHeight
// globalStyle(".body3.sm svg", { height: sizeBody3Sm, width: sizeBody3Sm })
// const sizeBody3Md = t.text.variants.body3.sizes.md.lineHeight
// globalStyle(".body3.md svg", { height: sizeBody3Md, width: sizeBody3Md })
// const sizeBody3Lg = t.text.variants.body3.sizes.lg.lineHeight
// globalStyle(".body3.lg svg", { height: sizeBody3Lg, width: sizeBody3Lg })

export const anchor = style({
  ...t.anchor.element,
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ":focus": t.anchor.focus,
  ":hover": t.anchor.hover,
  ":active": t.anchor.active,
  ":visited": t.anchor.visited,
  selectors: {
    "&.primary": t.anchor.variants.primary.base,
    "&.primary:hover": t.anchor.variants.primary.hover,
    "&.primary:active": t.anchor.variants.primary.active,
    "&.primary:visited": t.anchor.variants.primary.visited,
    "&.secondary": t.anchor.variants.secondary.base,
    "&.secondary:hover": t.anchor.variants.secondary.hover,
    "&.secondary:active": t.anchor.variants.secondary.active,
    "&.secondary:visited": t.anchor.variants.secondary.visited,
    "&.tertiary": t.anchor.variants.tertiary.base,
    "&.tertiary:hover": t.anchor.variants.tertiary.hover,
    "&.tertiary:active": t.anchor.variants.tertiary.active,
    "&.tertiary:visited": t.anchor.variants.tertiary.visited,
    "&.sm": t.anchor.variants.sm,
    "&.md": t.anchor.variants.md,
    "&.lg": t.anchor.variants.lg,
  },
})

// TODO: different border widths on the variants are affecting the height
export const button = style({
  ...t.button.element,
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  ":focus": t.button.focus,
  ":hover": t.button.hover,
  ":active": t.button.active,
  selectors: {
    "&[disabled], &.disabled": t.button.variants.disabled,
    "&.error": t.button.variants.error,
    "&.enabled": t.button.variants.enabled.base,
    "&.enabled:hover": t.button.variants.enabled.hover,
    "&.enabled:active": t.button.variants.enabled.active,
    "&.primary": t.button.variants.primary.base,
    "&.primary:hover": t.button.variants.primary.hover,
    "&.primary:active": t.button.variants.primary.active,
    "&.secondary": t.button.variants.secondary.base,
    "&.secondary:hover": t.button.variants.secondary.hover,
    "&.secondary:active": t.button.variants.secondary.active,
    "&.tertiary": t.button.variants.tertiary.base,
    "&.tertiary:hover": t.button.variants.tertiary.hover,
    "&.tertiary:active": t.button.variants.tertiary.active,
    "&.min": t.button.variants.min,
    "&.sm": t.button.variants.sm,
    "&.md": t.button.variants.md,
    "&.lg": t.button.variants.lg,
  },
})

export const card = style({
  ...t.surface.element,
  selectors: {
    "&.neutral": t.surface.variants.neutral.base,
    "&.neutralAlt": t.surface.variants.neutral.alt,
    "&.inverse": t.surface.variants.inverse.base,
    "&.inverseAlt": t.surface.variants.inverse.alt,
    "&.sm": {
      paddingTop: t.surface.variants.sm.paddingTop,
      paddingBottom: t.surface.variants.sm.paddingBottom,
      paddingLeft: t.surface.variants.sm.paddingLeft,
      paddingRight: t.surface.variants.sm.paddingRight,
    },
    "&.md": {
      paddingTop: t.surface.variants.md.paddingTop,
      paddingBottom: t.surface.variants.md.paddingBottom,
      paddingLeft: t.surface.variants.md.paddingLeft,
      paddingRight: t.surface.variants.md.paddingRight,
    },
    "&.lg": {
      paddingTop: t.surface.variants.lg.paddingTop,
      paddingBottom: t.surface.variants.lg.paddingBottom,
      paddingLeft: t.surface.variants.lg.paddingLeft,
      paddingRight: t.surface.variants.lg.paddingRight,
    },
  },
})

// TODO: reconcile these values with the theme scaling
export const controlHeightSm = "44px"
export const controlHeightMd = "54px"
export const controlHeightLg = "64px"
export const control = style({
  ...t.control.element,
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  boxSizing: "border-box",
  ":focus-within": t.control.focus,
  ":hover": t.control.hover,
  ":active": t.control.active,
  selectors: {
    "&[disabled], &.disabled": t.control.variants.disabled,
    "&.error": t.control.variants.error,
    "&.sm": {
      ...t.control.variants.sm,
      height: controlHeightSm,
    },
    "&.md": {
      ...t.control.variants.md,
      height: controlHeightMd,
    },
    "&.lg": {
      ...t.control.variants.lg,
      height: controlHeightLg,
    },
  },
})

export const controlContainer = style({
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  selectors: {
    "&.sm": t.control.variants.sm,
    "&.md": t.control.variants.md,
    "&.lg": t.control.variants.lg,
  },
})

export const controlInput = style({
  position: "relative",
  zIndex: "1",
  border: "none",
  backgroundColor: "transparent",
  color: "inherit",
  padding: "0",
  ":focus": { outline: "none" },
  selectors: {
    "&.sm": {
      lineHeight: `calc(${controlHeightSm} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.sm.gap} - ${t.control.variants.sm.paddingTop} - ${t.control.variants.sm.paddingBottom})`,
    },
    "&.md": {
      lineHeight: `calc(${controlHeightMd} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.md.gap} - ${t.control.variants.md.paddingTop} - ${t.control.variants.md.paddingBottom})`,
    },
    "&.lg": {
      lineHeight: `calc(${controlHeightLg} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.lg.gap} - ${t.control.variants.lg.paddingTop} - ${t.control.variants.lg.paddingBottom})`,
    },
  },
})

export const controlSelectContainer = style({})

export const controlSelect = style({
  paddingRight: "1em",
})

export const controlLabelContainer = style({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  selectors: {
    "&.sm": {
      gap: t.control.variants.sm.gap,
      height: `calc(${controlHeightSm} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.sm.paddingTop} - ${t.control.variants.sm.paddingBottom})`,
    },
    "&.md": {
      gap: t.control.variants.md.gap,
      height: `calc(${controlHeightMd} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.md.paddingTop} - ${t.control.variants.md.paddingBottom})`,
    },
    "&.lg": {
      gap: t.control.variants.lg.gap,
      height: `calc(${controlHeightLg} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.lg.paddingTop} - ${t.control.variants.lg.paddingBottom})`,
    },
  },
})

export const controlLabel = style({
  position: "absolute",
  zIndex: "0",
  selectors: {
    "&.sm": {
      lineHeight: `calc(${controlHeightSm} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.sm.gap} - ${t.control.variants.sm.paddingTop} - ${t.control.variants.sm.paddingBottom})`,
    },
    "&.md": {
      lineHeight: `calc(${controlHeightMd} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.md.gap} - ${t.control.variants.md.paddingTop} - ${t.control.variants.md.paddingBottom})`,
    },
    "&.lg": {
      lineHeight: `calc(${controlHeightLg} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.lg.gap} - ${t.control.variants.lg.paddingTop} - ${t.control.variants.lg.paddingBottom})`,
    },
  },
})
globalStyle(
  `.${controlContainer}:not(.${controlSelectContainer}):focus-within ${controlLabel}, .${controlContainer}.${valueClass} ${controlLabel}`,
  {
    alignSelf: "flex-start",
    position: "static",
  }
)
globalStyle(
  `.${controlContainer}:not(.${controlSelectContainer}):focus-within ${controlLabel}.sm, .${controlContainer}.${valueClass} ${controlLabel}.sm`,
  {
    lineHeight: `calc(calc(${controlHeightSm} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.sm.gap} - ${t.control.variants.sm.paddingTop} - ${t.control.variants.sm.paddingBottom}) / 2)`,
  }
)
globalStyle(
  `.${controlContainer}:not(.${controlSelectContainer}):focus-within ${controlLabel}.md, .${controlContainer}.${valueClass} ${controlLabel}.md`,
  {
    lineHeight: `calc(calc(${controlHeightMd} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.md.gap} - ${t.control.variants.md.paddingTop} - ${t.control.variants.md.paddingBottom}) / 2)`,
  }
)
globalStyle(
  `.${controlContainer}:not(.${controlSelectContainer}):focus-within ${controlLabel}.lg, .${controlContainer}.${valueClass} ${controlLabel}.lg`,
  {
    lineHeight: `calc(calc(${controlHeightLg} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.lg.gap} - ${t.control.variants.lg.paddingTop} - ${t.control.variants.lg.paddingBottom}) / 2)`,
  }
)
globalStyle(
  `.${controlContainer}:focus-within ${controlInput}, .${controlContainer}.${valueClass} ${controlInput}`,
  {
    alignSelf: "flex-end",
  }
)
globalStyle(
  `.${controlContainer}:focus-within ${controlInput}.sm, .${controlContainer}.${valueClass} ${controlInput}.sm`,
  {
    lineHeight: `calc(calc(${controlHeightSm} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.sm.gap} - ${t.control.variants.sm.paddingTop} - ${t.control.variants.sm.paddingBottom}) / 2)`,
  }
)
globalStyle(
  `.${controlContainer}:focus-within ${controlInput}.md, .${controlContainer}.${valueClass} ${controlInput}.md`,
  {
    lineHeight: `calc(calc(${controlHeightMd} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.md.gap} - ${t.control.variants.md.paddingTop} - ${t.control.variants.md.paddingBottom}) / 2)`,
  }
)
globalStyle(
  `.${controlContainer}:focus-within ${controlInput}.lg, .${controlContainer}.${valueClass} ${controlInput}.lg`,
  {
    lineHeight: `calc(calc(${controlHeightLg} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.lg.gap} - ${t.control.variants.lg.paddingTop} - ${t.control.variants.lg.paddingBottom}) / 2)`,
  }
)

export const toggleGroupContainer = style({
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
})

export const toggleContainer = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  selectors: {
    "&.sm": {
      gap: t.control.variants.sm.gap,
    },
    "&.md": {
      gap: t.control.variants.md.gap,
    },
    "&.lg": {
      gap: t.control.variants.lg.gap,
    },
  },
})

export const toggleInput = style({
  appearance: "none",
  height: "1em",
  width: "1em",
  ...t.control.element,
  ":focus": t.control.focus,
  ":hover": t.control.hover,
  ":active": t.control.active,
  selectors: {
    "&[type=radio]": {
      borderRadius: "50%",
    },
    // TODO: come up with a better solution for these icons?
    "&[type=radio]:checked": {
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%0A%20%20%20%20fill%3D%22%23303236%22%0A%20%20%20%20d%3D%22M12%206.236c-3.182%200-5.764%202.582-5.764%205.764s2.582%205.764%205.764%205.764%205.764-2.582%205.764-5.764-2.582-5.764-5.764-5.764zm0-5.764C5.636.472%20.472%205.636.472%2012s5.165%2011.528%2011.528%2011.528%2011.528-5.165%2011.528-11.528S18.364.472%2012%20.472zm0%2020.751c-5.095%200-9.222-4.127-9.222-9.222s4.127-9.222%209.222-9.222%209.222%204.127%209.222%209.222-4.127%209.222-9.222%209.222z%22%0A%20%20%2F%3E%0A%3C%2Fsvg%3E%0A")`,
    },
    "&[type=checkbox]:checked": {
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%0A%20%20%20%20fill%3D%22%23303236%22%0A%20%20%20%20d%3D%22M20.938.508H3.062c-1.417%200-2.554%201.149-2.554%202.554v17.876c0%201.405%201.136%202.554%202.554%202.554h17.876c1.417%200%202.554-1.149%202.554-2.554V3.062c0-1.405-1.136-2.554-2.554-2.554zm-11.492%2017.876-6.384-6.384%201.8-1.8L9.446%2014.771l9.691-9.691L20.938%206.893l-11.492%2011.492z%22%0A%20%20%2F%3E%0A%3C%2Fsvg%3E%0A")`,
    },
  },
})

export const icon = style({
  ...t.icon.element,
  ":focus": t.icon.focus,
  ":hover": t.icon.hover,
  ":active": t.icon.active,
  selectors: {
    "&.primary": t.icon.variants.primary.base,
    "&.primary:hover": t.icon.variants.primary.hover,
    "&.primary:active": t.icon.variants.primary.active,
    "&.secondary": t.icon.variants.secondary.base,
    "&.secondary:hover": t.icon.variants.secondary.hover,
    "&.secondary:active": t.icon.variants.secondary.active,
    "&.tertiary": t.icon.variants.tertiary.base,
    "&.tertiary:hover": t.icon.variants.tertiary.hover,
    "&.tertiary:active": t.icon.variants.tertiary.active,
    "&.info": t.icon.variants.info.base,
    "&.info:hover": t.icon.variants.info.hover,
    "&.info:active": t.icon.variants.info.active,
    "&.success": t.icon.variants.success.base,
    "&.success:hover": t.icon.variants.success.hover,
    "&.success:active": t.icon.variants.success.active,
    "&.warning": t.icon.variants.warning.base,
    "&.warning:hover": t.icon.variants.warning.hover,
    "&.warning:active": t.icon.variants.warning.active,
    "&.danger": t.icon.variants.danger.base,
    "&.danger:hover": t.icon.variants.danger.hover,
    "&.danger:active": t.icon.variants.danger.active,
    "&.enabled": t.icon.variants.enabled.base,
    "&.enabled:hover": t.icon.variants.enabled.hover,
    "&.enabled:active": t.icon.variants.enabled.active,
    "&.disabled": t.icon.variants.disabled,
    "&.error": t.icon.variants.error,
    "&.selected": t.icon.variants.selected,
  },
})

// TODO: nav styles from the theme!!
export const nav = style({
  display: "inline-flex",
  selectors: {
    "&.horizontal": {
      display: "block",
    },
    "&.vertical": {
      display: "block",
    },
  },
})

export const navItem = style({})

export const navLink = style({})

export const navMenu = style({
  display: "none",
  width: "100%",
  selectors: {
    "&.open": {
      display: "block",
    },
    "&.isTopLevelMenu": {
      position: "absolute",
      left: "0",
      top: "100%",
      zIndex: "1",
      width: "max-content",
    },
    "&.isTopLevelMobileMenu": {
      position: "absolute",
      left: "0",
      zIndex: "1",
      width: "100%",
    },
    // "&.sm": t.anchor.variants.sm,
    // "&.md": t.anchor.variants.md,
    // "&.lg": t.anchor.variants.lg,
  },
})

export const navMenuContainer = style({
  position: "relative",
})

export const notification = style({
  ...t.message.element,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  selectors: {
    "&.info": t.message.variants.info.base,
    "&.success": t.message.variants.success.base,
    "&.warning": t.message.variants.warning.base,
    "&.danger": t.message.variants.danger.base,
    "&.sm": {
      gap: t.message.variants.sm.gap,
      paddingTop: t.surface.variants.sm.paddingTop,
      paddingBottom: t.surface.variants.sm.paddingBottom,
      paddingLeft: t.surface.variants.sm.paddingLeft,
      paddingRight: t.surface.variants.sm.paddingRight,
    },
    "&.md": {
      gap: t.message.variants.md.gap,
      paddingTop: t.surface.variants.md.paddingTop,
      paddingBottom: t.surface.variants.md.paddingBottom,
      paddingLeft: t.surface.variants.md.paddingLeft,
      paddingRight: t.surface.variants.md.paddingRight,
    },
    "&.lg": {
      gap: t.message.variants.lg.gap,
      paddingTop: t.surface.variants.lg.paddingTop,
      paddingBottom: t.surface.variants.lg.paddingBottom,
      paddingLeft: t.surface.variants.lg.paddingLeft,
      paddingRight: t.surface.variants.lg.paddingRight,
    },
  },
})

export const notificationBody = style({
  flexGrow: "1",
  selectors: {
    "&.sm": {
      gap: t.message.variants.sm.gap,
    },
    "&.md": {
      gap: t.message.variants.md.gap,
    },
    "&.lg": {
      gap: t.message.variants.lg.gap,
    },
  },
})

export const notificationTitle = style({
  display: "block",
})

export const panel = style({
  ...t.surface.element,
  selectors: {
    "&.neutral": t.surface.variants.neutral.base,
    "&.neutralAlt": t.surface.variants.neutral.alt,
    "&.inverse": t.surface.variants.inverse.base,
    "&.inverseAlt": t.surface.variants.inverse.alt,
    "&.sm": {
      gap: t.surface.variants.sm.gap,
      fontSize: t.surface.variants.sm.fontSize,
      lineHeight: t.surface.variants.sm.lineHeight,
    },
    "&.md": {
      gap: t.surface.variants.md.gap,
      fontSize: t.surface.variants.md.fontSize,
      lineHeight: t.surface.variants.md.lineHeight,
    },
    "&.lg": {
      gap: t.surface.variants.lg.gap,
      fontSize: t.surface.variants.lg.fontSize,
      lineHeight: t.surface.variants.lg.lineHeight,
    },
  },
})

export const panelHeader = style({
  ...t.surface.element,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid",
  borderBottomRightRadius: "0px",
  borderBottomLeftRadius: "0px",
  selectors: {
    "&.neutral": t.surface.variants.neutral.base,
    "&.neutralAlt": t.surface.variants.neutral.alt,
    "&.inverse": t.surface.variants.inverse.base,
    "&.inverseAlt": t.surface.variants.inverse.alt,
    "&.prominent": t.surface.variants.prominent.base,
    "&.prominentAlt": t.surface.variants.prominent.alt,
    "&.sm": {
      paddingTop: t.surface.variants.sm.paddingTop,
      paddingBottom: t.surface.variants.sm.paddingBottom,
      paddingLeft: t.surface.variants.sm.paddingLeft,
      paddingRight: t.surface.variants.sm.paddingRight,
    },
    "&.md": {
      paddingTop: t.surface.variants.md.paddingTop,
      paddingBottom: t.surface.variants.md.paddingBottom,
      paddingLeft: t.surface.variants.md.paddingLeft,
      paddingRight: t.surface.variants.md.paddingRight,
    },
    "&.lg": {
      paddingTop: t.surface.variants.lg.paddingTop,
      paddingBottom: t.surface.variants.lg.paddingBottom,
      paddingLeft: t.surface.variants.lg.paddingLeft,
      paddingRight: t.surface.variants.lg.paddingRight,
    },
  },
})

export const panelBody = style({
  ...t.surface.element,
  borderTopRightRadius: "0px",
  borderTopLeftRadius: "0px",
  selectors: {
    "&.neutral": t.surface.variants.neutral.base,
    "&.neutralAlt": t.surface.variants.neutral.alt,
    "&.inverse": t.surface.variants.inverse.base,
    "&.inverseAlt": t.surface.variants.inverse.alt,
    "&.sm": {
      paddingTop: t.surface.variants.sm.paddingTop,
      paddingBottom: t.surface.variants.sm.paddingBottom,
      paddingLeft: t.surface.variants.sm.paddingLeft,
      paddingRight: t.surface.variants.sm.paddingRight,
    },
    "&.md": {
      paddingTop: t.surface.variants.md.paddingTop,
      paddingBottom: t.surface.variants.md.paddingBottom,
      paddingLeft: t.surface.variants.md.paddingLeft,
      paddingRight: t.surface.variants.md.paddingRight,
    },
    "&.lg": {
      paddingTop: t.surface.variants.lg.paddingTop,
      paddingBottom: t.surface.variants.lg.paddingBottom,
      paddingLeft: t.surface.variants.lg.paddingLeft,
      paddingRight: t.surface.variants.lg.paddingRight,
    },
  },
})

// export const text = style({
//   ...t.text.element,
//   selectors: {
//     "&.body1": t.text.variants.body1,
//     "&.body1.sm": t.text.variants.body1.sizes.sm,
//     "&.body1.md": t.text.variants.body1.sizes.md,
//     "&.body1.lg": t.text.variants.body1.sizes.lg,
//     "&.body2": t.text.variants.body2,
//     "&.body2.sm": t.text.variants.body2.sizes.sm,
//     "&.body2.md": t.text.variants.body2.sizes.md,
//     "&.body2.lg": t.text.variants.body2.sizes.lg,
//     "&.body3": t.text.variants.body3,
//     "&.body3.sm": t.text.variants.body3.sizes.sm,
//     "&.body3.md": t.text.variants.body3.sizes.md,
//     "&.body3.lg": t.text.variants.body3.sizes.lg,
//     "&.emphasis": t.text.variants.emphasis,
//     "&.emphasis.sm": t.text.variants.emphasis.sizes.sm,
//     "&.emphasis.md": t.text.variants.emphasis.sizes.md,
//     "&.emphasis.lg": t.text.variants.emphasis.sizes.lg,
//     "&.label": t.text.variants.label,
//     "&.label.sm": t.text.variants.label.sizes.sm,
//     "&.label.md": t.text.variants.label.sizes.md,
//     "&.label.lg": t.text.variants.label.sizes.lg,
//     "&.caption": t.text.variants.legal,
//     "&.caption.sm": t.text.variants.legal.sizes.sm,
//     "&.caption.md": t.text.variants.legal.sizes.md,
//     "&.caption.lg": t.text.variants.legal.sizes.lg,
//     "&.caption-heading": t.text.variants.legalHeading,
//     "&.captionHeading.sm": t.text.variants.legalHeading.sizes.sm,
//     "&.captionHeading.md": t.text.variants.legalHeading.sizes.md,
//     "&.captionHeading.lg": t.text.variants.legalHeading.sizes.lg,
//     "&.strong": t.text.variants.strong,
//     "&.strong.sm": t.text.variants.strong.sizes.sm,
//     "&.strong.md": t.text.variants.strong.sizes.md,
//     "&.strong.lg": t.text.variants.strong.sizes.lg,
//   },
// })
//
// // Size SVG icons to match the line-height of their parent text container.
// const sizeBody1Sm = t.text.variants.body1.sizes.sm.lineHeight
// globalStyle(".body1.sm svg", { height: sizeBody1Sm, width: sizeBody1Sm })
// const sizeBody1Md = t.text.variants.body1.sizes.md.lineHeight
// globalStyle(".body1.md svg", { height: sizeBody1Md, width: sizeBody1Md })
// const sizeBody1Lg = t.text.variants.body1.sizes.lg.lineHeight
// globalStyle(".body1.lg svg", { height: sizeBody1Lg, width: sizeBody1Lg })
//
// const sizeBody2Sm = t.text.variants.body2.sizes.sm.lineHeight
// globalStyle(".body2.sm svg", { height: sizeBody2Sm, width: sizeBody2Sm })
// const sizeBody2Md = t.text.variants.body2.sizes.md.lineHeight
// globalStyle(".body2.md svg", { height: sizeBody2Md, width: sizeBody2Md })
// const sizeBody2Lg = t.text.variants.body2.sizes.lg.lineHeight
// globalStyle(".body2.lg svg", { height: sizeBody2Lg, width: sizeBody2Lg })
//
// const sizeBody3Sm = t.text.variants.body3.sizes.sm.lineHeight
// globalStyle(".body3.sm svg", { height: sizeBody3Sm, width: sizeBody3Sm })
// const sizeBody3Md = t.text.variants.body3.sizes.md.lineHeight
// globalStyle(".body3.md svg", { height: sizeBody3Md, width: sizeBody3Md })
// const sizeBody3Lg = t.text.variants.body3.sizes.lg.lineHeight
// globalStyle(".body3.lg svg", { height: sizeBody3Lg, width: sizeBody3Lg })
//
// // TODO: not sure this is necessary?
// // const sizeEmSm = t.text.variants.emphasis.sizes.sm.lineHeight
// // globalStyle(".em.sm svg", { height: sizeEmSm, width: sizeEmSm })
// // const sizeEmMd = t.text.variants.emphasis.sizes.md.lineHeight
// // globalStyle(".em.md svg", { height: sizeEmMd, width: sizeEmMd })
// // const sizeEmLg = t.text.variants.emphasis.sizes.lg.lineHeight
// // globalStyle(".em.lg svg", { height: sizeEmLg, width: sizeEmLg })
//
// export const textEmphasis = style({
//   ...t.text.element,
//   ...t.text.variants.emphasis,
//   selectors: {
//     "&.sm": t.text.variants.emphasis.sizes.sm,
//     "&.md": t.text.variants.emphasis.sizes.md,
//     "&.lg": t.text.variants.emphasis.sizes.lg,
//   },
// })
//
// // Applies theme styling to inline <em> tags inside other text.
// globalStyle("em", {
//   ...t.text.element,
//   ...t.text.variants.emphasis,
// })
//
// export const textLabel = style({
//   ...t.text.element,
//   ...t.text.variants.label,
//   selectors: {
//     "&.sm": t.text.variants.label.sizes.sm,
//     "&.md": t.text.variants.label.sizes.md,
//     "&.lg": t.text.variants.label.sizes.lg,
//   },
// })
//
// // Applies theme styling to inline <label> tags inside other text.
// globalStyle("label", {
//   ...t.text.element,
//   ...t.text.variants.label,
// })
//
// export const textStrong = style({
//   ...t.text.element,
//   ...t.text.variants.strong,
//   selectors: {
//     "&.sm": t.text.variants.strong.sizes.sm,
//     "&.md": t.text.variants.strong.sizes.md,
//     "&.lg": t.text.variants.strong.sizes.lg,
//   },
// })
//
// // Applies theme styling to inline <strong> tags inside other text.
// globalStyle("strong", {
//   ...t.text.element,
//   ...t.text.variants.strong,
// })
//
// export const display = style({
//   ...t.heading.element,
//   ...t.heading.variants.display,
// })
//
// export const h1 = style({
//   ...t.heading.element,
//   ...t.heading.variants.h1,
// })
//
// export const h2 = style({
//   ...t.heading.element,
//   ...t.heading.variants.h2,
// })
//
// export const h3 = style({
//   ...t.heading.element,
//   ...t.heading.variants.h3,
// })
//
// export const h4 = style({
//   ...t.heading.element,
//   ...t.heading.variants.h4,
// })
//
// export const h5 = style({
//   ...t.heading.element,
//   ...t.heading.variants.h5,
// })
//
// export const h6 = style({
//   ...t.heading.element,
//   ...t.heading.variants.h6,
// })
