import { globalStyle, style } from "@vanilla-extract/css"

// TODO: CHECKPOINT: convert bodyTextConfig and headingConfig styles to use the theme config!!!
import { outlineConfig, valueClass } from "./utils"
import { makeDefaultTheme } from "./index"

const t = makeDefaultTheme()

// This is needed for react-icons SVGs to correctly inherit colors from their parent.
globalStyle("path", {
  // fill: "inherit",
  stroke: "inherit",
})

export const anchor = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ...t.anchor.element,
  ":focus": t.anchor.focus,
  ":hover": t.anchor.hover,
  ":active": t.anchor.active,
  ":visited": t.anchor.visited,
  selectors: {
    "&.primary": t.anchor.variants.primary.enabled,
    "&.primary:hover": t.anchor.variants.primary.hover,
    "&.primary:active": t.anchor.variants.primary.active,
    "&.primary:visited": t.anchor.variants.primary.visited,
    "&.secondary": t.anchor.variants.secondary.enabled,
    "&.secondary:hover": t.anchor.variants.secondary.hover,
    "&.secondary:active": t.anchor.variants.secondary.active,
    "&.secondary:visited": t.anchor.variants.secondary.visited,
    "&.tertiary": t.anchor.variants.tertiary.enabled,
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
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  ...t.button.element,
  ":focus": t.button.focus,
  ":hover": t.button.hover,
  ":active": t.button.active,
  selectors: {
    "&[disabled], &.disabled": t.button.variants.disabled,
    "&.error": t.button.variants.error,
    "&.background": t.button.variants.background.enabled,
    "&.background:hover": t.button.variants.background.hover,
    "&.background:active": t.button.variants.background.active,
    "&.primary": t.button.variants.primary.enabled,
    "&.primary:hover": t.button.variants.primary.hover,
    "&.primary:active": t.button.variants.primary.active,
    "&.secondary": t.button.variants.secondary.enabled,
    "&.secondary:hover": t.button.variants.secondary.hover,
    "&.secondary:active": t.button.variants.secondary.active,
    "&.tertiary": t.button.variants.tertiary.enabled,
    "&.tertiary:hover": t.button.variants.tertiary.hover,
    "&.tertiary:active": t.button.variants.tertiary.active,
    "&.sm": t.button.variants.sm,
    "&.md": t.button.variants.md,
    "&.lg": t.button.variants.lg,
    "&.icon": {
      fontSize: "1em",
      lineHeight: "1em",
      padding: "0",
    },
  },
})

export const label = style({})
export const message = style({})
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
export const controlInput = style({
  position: "relative",
  zIndex: "1",
  border: "none",
  backgroundColor: "transparent",
  color: "inherit",
  padding: "0",
  ":focus": outlineConfig.none,
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
export const controlSelect = style({
  paddingRight: "1em",
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
  `.${controlContainer}:focus-within ${controlLabel}, .${controlContainer}.${valueClass} ${controlLabel}`,
  {
    alignSelf: "flex-start",
    position: "static",
  }
)
globalStyle(
  `.${controlContainer}:focus-within ${controlLabel}.sm, .${controlContainer}.${valueClass} ${controlLabel}.sm`,
  {
    lineHeight: `calc(calc(${controlHeightSm} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.sm.gap} - ${t.control.variants.sm.paddingTop} - ${t.control.variants.sm.paddingBottom}) / 2)`,
  }
)
globalStyle(
  `.${controlContainer}:focus-within ${controlLabel}.md, .${controlContainer}.${valueClass} ${controlLabel}.md`,
  {
    lineHeight: `calc(calc(${controlHeightMd} - calc(${t.control.element.borderWidth} * 2) - ${t.control.variants.md.gap} - ${t.control.variants.md.paddingTop} - ${t.control.variants.md.paddingBottom}) / 2)`,
  }
)
globalStyle(
  `.${controlContainer}:focus-within ${controlLabel}.lg, .${controlContainer}.${valueClass} ${controlLabel}.lg`,
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
export const toggleGroupLabel = style({})
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
    "&[type=radio]:checked": {
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%0A%20%20%20%20fill%3D%22%23303236%22%0A%20%20%20%20d%3D%22M12%206.236c-3.182%200-5.764%202.582-5.764%205.764s2.582%205.764%205.764%205.764%205.764-2.582%205.764-5.764-2.582-5.764-5.764-5.764zm0-5.764C5.636.472%20.472%205.636.472%2012s5.165%2011.528%2011.528%2011.528%2011.528-5.165%2011.528-11.528S18.364.472%2012%20.472zm0%2020.751c-5.095%200-9.222-4.127-9.222-9.222s4.127-9.222%209.222-9.222%209.222%204.127%209.222%209.222-4.127%209.222-9.222%209.222z%22%0A%20%20%2F%3E%0A%3C%2Fsvg%3E%0A")`,
    },
    "&[type=checkbox]:checked": {
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%0A%20%20%20%20fill%3D%22%23303236%22%0A%20%20%20%20d%3D%22M20.938.508H3.062c-1.417%200-2.554%201.149-2.554%202.554v17.876c0%201.405%201.136%202.554%202.554%202.554h17.876c1.417%200%202.554-1.149%202.554-2.554V3.062c0-1.405-1.136-2.554-2.554-2.554zm-11.492%2017.876-6.384-6.384%201.8-1.8L9.446%2014.771l9.691-9.691L20.938%206.893l-11.492%2011.492z%22%0A%20%20%2F%3E%0A%3C%2Fsvg%3E%0A")`,
    },
  },
})
export const toggleLabel = style({})

export const text = style({
  ...t.text.element,
  selectors: {
    "&.body1": t.text.variants.body1,
    "&.body1.sm": t.text.variants.body1.sizes.sm,
    "&.body1.md": t.text.variants.body1.sizes.md,
    "&.body1.lg": t.text.variants.body1.sizes.lg,
    "&.body2": t.text.variants.body2,
    "&.body2.sm": t.text.variants.body2.sizes.sm,
    "&.body2.md": t.text.variants.body2.sizes.md,
    "&.body2.lg": t.text.variants.body2.sizes.lg,
    "&.body3": t.text.variants.body3,
    "&.body3.sm": t.text.variants.body3.sizes.sm,
    "&.body3.md": t.text.variants.body3.sizes.md,
    "&.body3.lg": t.text.variants.body3.sizes.lg,
    "&.label": t.text.variants.label,
    "&.label.sm": t.text.variants.label.sizes.sm,
    "&.label.md": t.text.variants.label.sizes.md,
    "&.label.lg": t.text.variants.label.sizes.lg,
    "&.caption": t.text.variants.caption,
    "&.caption.sm": t.text.variants.caption.sizes.sm,
    "&.caption.md": t.text.variants.caption.sizes.md,
    "&.caption.lg": t.text.variants.caption.sizes.lg,
    "&.caption-heading": t.text.variants.captionHeading,
    "&.captionHeading.sm": t.text.variants.captionHeading.sizes.sm,
    "&.captionHeading.md": t.text.variants.captionHeading.sizes.md,
    "&.captionHeading.lg": t.text.variants.captionHeading.sizes.lg,
  },
})

export const display = style({
  ...t.heading.element,
  ...t.heading.variants.display,
})
export const h1 = style({
  ...t.heading.element,
  ...t.heading.variants.h1,
})
export const h2 = style({
  ...t.heading.element,
  ...t.heading.variants.h2,
})
export const h3 = style({
  ...t.heading.element,
  ...t.heading.variants.h3,
})
export const h4 = style({
  ...t.heading.element,
  ...t.heading.variants.h4,
})
export const h5 = style({
  ...t.heading.element,
  ...t.heading.variants.h5,
})
export const h6 = style({
  ...t.heading.element,
  ...t.heading.variants.h6,
})

export const card = style({
  ...t.card.element,
  selectors: {
    "&.inverse": t.card.variants.inverse,
    "&.sm": t.card.variants.sm,
    "&.md": t.card.variants.md,
    "&.lg": t.card.variants.lg,
  },
})
export const notification = style({
  display: "flex",
  flexDirection: "column",
  ...t.notification.element,
  selectors: {
    "&.info": t.notification.variants.info,
    "&.success": t.notification.variants.success,
    "&.warning": t.notification.variants.warning,
    "&.danger": t.notification.variants.danger,
    "&.sm": t.notification.variants.sm,
    "&.md": t.notification.variants.md,
    "&.lg": t.notification.variants.lg,
  },
})
export const notificationHeadline = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})

export const panel = style({
  ...t.card.element,
  // paddingTop: "0",
  // paddingBottom: "0",
  // paddingLeft: "0",
  // paddingRight: "0",
  selectors: {
    "&.inverse": t.card.variants.inverse,
    "&.prominent": t.card.variants.prominent,
    "&.sm": {
      gap: t.card.variants.sm.gap,
      fontSize: t.card.variants.sm.fontSize,
      lineHeight: t.card.variants.sm.lineHeight,
    },
    "&.md": {
      gap: t.card.variants.md.gap,
      fontSize: t.card.variants.md.fontSize,
      lineHeight: t.card.variants.md.lineHeight,
    },
    "&.lg": {
      gap: t.card.variants.lg.gap,
      fontSize: t.card.variants.lg.fontSize,
      lineHeight: t.card.variants.lg.lineHeight,
    },
  },
})
export const panelHeader = style({
  ...t.card.element,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid currentColor",
  borderBottomRightRadius: "0px",
  borderBottomLeftRadius: "0px",
  selectors: {
    "&.inverse": t.card.variants.inverse,
    "&.prominent": t.card.variants.prominent,
    "&.sm": t.card.variants.sm,
    "&.md": t.card.variants.md,
    "&.lg": t.card.variants.lg,
  },
})
export const panelBody = style({
  ...t.card.element,
  borderTopRightRadius: "0px",
  borderTopLeftRadius: "0px",
  selectors: {
    "&.inverse": t.card.variants.inverse,
    "&.sm": t.card.variants.sm,
    "&.md": t.card.variants.md,
    "&.lg": t.card.variants.lg,
  },
})

export const icon = style({
  ...t.icon.base,
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
    "&.disabled": t.icon.variants.disabled,
    "&.error": t.icon.variants.error,
    "&.selected": t.icon.variants.selected,
    "&.sm": t.icon.variants.sm,
    "&.md": t.icon.variants.md,
    "&.lg": t.icon.variants.lg,
  },
})

export const iconButton = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  // ...t.button.element,
  ...t.button.variants.background.enabled,
  fontSize: "1em",
  lineHeight: "1em",
  padding: "0",
  ":focus": t.button.focus,
  border: "none",
  ":hover": t.button.variants.background.hover,
  ":active": t.button.variants.background.active,
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
    "&.disabled": t.icon.variants.disabled,
    "&.error": t.icon.variants.error,
    "&.selected": t.icon.variants.selected,
    "&.sm": t.icon.variants.sm,
    "&.md": t.icon.variants.md,
    "&.lg": t.icon.variants.lg,
  },
})