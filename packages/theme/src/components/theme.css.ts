// import { globalStyle, style } from "@vanilla-extract/css"
//
// import {
//   anchorConfig,
//   bodyTextConfig,
//   button,
//   control,
//   headingConfig,
//   outlineConfig,
//   valueClass,
// } from "./theme"
//
// // This is needed for react-icons SVGs to correctly inherit colors from their parent.
// globalStyle("path", {
//   // fill: "inherit",
//   stroke: "inherit",
// })
//
// export const anchor = style({
//   display: "inline-flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   ...anchorConfig.element,
//   ":focus": anchorConfig.focus,
//   ":hover": anchorConfig.hover,
//   ":active": anchorConfig.active,
//   ":visited": anchorConfig.visited,
//   selectors: {
//     "&.primary": anchorConfig.variants.primary.enabled,
//     "&.primary:hover": anchorConfig.variants.primary.hover,
//     "&.primary:active": anchorConfig.variants.primary.active,
//     "&.primary:visited": anchorConfig.variants.primary.visited,
//     "&.secondary": anchorConfig.variants.secondary.enabled,
//     "&.secondary:hover": anchorConfig.variants.secondary.hover,
//     "&.secondary:active": anchorConfig.variants.secondary.active,
//     "&.secondary:visited": anchorConfig.variants.secondary.visited,
//     "&.tertiary": anchorConfig.variants.tertiary.enabled,
//     "&.tertiary:hover": anchorConfig.variants.tertiary.hover,
//     "&.tertiary:active": anchorConfig.variants.tertiary.active,
//     "&.tertiary:visited": anchorConfig.variants.tertiary.visited,
//     "&.sm": anchorConfig.variants.sm,
//     "&.md": anchorConfig.variants.md,
//     "&.lg": anchorConfig.variants.lg,
//   },
// })
//
// // TODO: different border widths on the variants are affecting the height
// export const button = style({
//   display: "inline-flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "center",
//   ...button.element,
//   ":focus": button.focus,
//   ":hover": button.hover,
//   ":active": button.active,
//   selectors: {
//     "&[disabled], &.disabled": button.variants.disabled,
//     "&.error": button.variants.error,
//     "&.primary": button.variants.primary.enabled,
//     "&.primary:hover": button.variants.primary.hover,
//     "&.primary:active": button.variants.primary.active,
//     "&.secondary": button.variants.secondary.enabled,
//     "&.secondary:hover": button.variants.secondary.hover,
//     "&.secondary:active": button.variants.secondary.active,
//     "&.tertiary": button.variants.tertiary.enabled,
//     "&.tertiary:hover": button.variants.tertiary.hover,
//     "&.tertiary:active": button.variants.tertiary.active,
//     "&.sm": button.variants.sm,
//     "&.md": button.variants.md,
//     "&.lg": button.variants.lg,
//   },
// })
//
// export const label = style({})
// export const message = style({})
// export const controlHeightSm = "44px"
// export const controlHeightMd = "54px"
// export const controlHeightLg = "64px"
// export const control = style({
//   ...control.element,
//   display: "inline-flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   boxSizing: "border-box",
//   ":focus-within": control.focus,
//   ":hover": control.hover,
//   ":active": control.active,
//   selectors: {
//     "&[disabled], &.disabled": control.variants.disabled,
//     "&.error": control.variants.error,
//     "&.sm": {
//       ...control.variants.sm,
//       height: controlHeightSm,
//     },
//     "&.md": {
//       ...control.variants.md,
//       height: controlHeightMd,
//     },
//     "&.lg": {
//       ...control.variants.lg,
//       height: controlHeightLg,
//     },
//   },
// })
// export const controlContainer = style({
//   display: "inline-flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
//   justifyContent: "center",
//   selectors: {
//     "&.sm": control.variants.sm,
//     "&.md": control.variants.md,
//     "&.lg": control.variants.lg,
//   },
// })
// export const controlLabelContainer = style({
//   position: "relative",
//   display: "inline-flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
//   justifyContent: "center",
//   selectors: {
//     "&.sm": {
//       gap: control.variants.sm.gap,
//       height: `calc(${controlHeightSm} - calc(${control.element.borderWidth} * 2) - ${control.variants.sm.paddingTop} - ${control.variants.sm.paddingBottom})`,
//     },
//     "&.md": {
//       gap: control.variants.md.gap,
//       height: `calc(${controlHeightMd} - calc(${control.element.borderWidth} * 2) - ${control.variants.md.paddingTop} - ${control.variants.md.paddingBottom})`,
//     },
//     "&.lg": {
//       gap: control.variants.lg.gap,
//       height: `calc(${controlHeightLg} - calc(${control.element.borderWidth} * 2) - ${control.variants.lg.paddingTop} - ${control.variants.lg.paddingBottom})`,
//     },
//   },
// })
// export const controlInput = style({
//   position: "relative",
//   zIndex: "1",
//   border: "none",
//   backgroundColor: "transparent",
//   color: "inherit",
//   padding: "0",
//   ":focus": outlineConfig.none,
//   selectors: {
//     "&.sm": {
//       lineHeight: `calc(${controlHeightSm} - calc(${control.element.borderWidth} * 2) - ${control.variants.sm.gap} - ${control.variants.sm.paddingTop} - ${control.variants.sm.paddingBottom})`,
//     },
//     "&.md": {
//       lineHeight: `calc(${controlHeightMd} - calc(${control.element.borderWidth} * 2) - ${control.variants.md.gap} - ${control.variants.md.paddingTop} - ${control.variants.md.paddingBottom})`,
//     },
//     "&.lg": {
//       lineHeight: `calc(${controlHeightLg} - calc(${control.element.borderWidth} * 2) - ${control.variants.lg.gap} - ${control.variants.lg.paddingTop} - ${control.variants.lg.paddingBottom})`,
//     },
//   },
// })
// export const controlSelect = style({
//   paddingRight: "1em",
// })
// export const controlLabel = style({
//   position: "absolute",
//   zIndex: "0",
//   selectors: {
//     "&.sm": {
//       lineHeight: `calc(${controlHeightSm} - calc(${control.element.borderWidth} * 2) - ${control.variants.sm.gap} - ${control.variants.sm.paddingTop} - ${control.variants.sm.paddingBottom})`,
//     },
//     "&.md": {
//       lineHeight: `calc(${controlHeightMd} - calc(${control.element.borderWidth} * 2) - ${control.variants.md.gap} - ${control.variants.md.paddingTop} - ${control.variants.md.paddingBottom})`,
//     },
//     "&.lg": {
//       lineHeight: `calc(${controlHeightLg} - calc(${control.element.borderWidth} * 2) - ${control.variants.lg.gap} - ${control.variants.lg.paddingTop} - ${control.variants.lg.paddingBottom})`,
//     },
//   },
// })
// globalStyle(
//   `.${controlContainer}:focus-within ${controlLabel}, .${controlContainer}.${valueClass} ${controlLabel}`,
//   {
//     alignSelf: "flex-start",
//     position: "static",
//   }
// )
// globalStyle(
//   `.${controlContainer}:focus-within ${controlLabel}.sm, .${controlContainer}.${valueClass} ${controlLabel}.sm`,
//   {
//     lineHeight: `calc(calc(${controlHeightSm} - calc(${control.element.borderWidth} * 2) - ${control.variants.sm.gap} - ${control.variants.sm.paddingTop} - ${control.variants.sm.paddingBottom}) / 2)`,
//   }
// )
// globalStyle(
//   `.${controlContainer}:focus-within ${controlLabel}.md, .${controlContainer}.${valueClass} ${controlLabel}.md`,
//   {
//     lineHeight: `calc(calc(${controlHeightMd} - calc(${control.element.borderWidth} * 2) - ${control.variants.md.gap} - ${control.variants.md.paddingTop} - ${control.variants.md.paddingBottom}) / 2)`,
//   }
// )
// globalStyle(
//   `.${controlContainer}:focus-within ${controlLabel}.lg, .${controlContainer}.${valueClass} ${controlLabel}.lg`,
//   {
//     lineHeight: `calc(calc(${controlHeightLg} - calc(${control.element.borderWidth} * 2) - ${control.variants.lg.gap} - ${control.variants.lg.paddingTop} - ${control.variants.lg.paddingBottom}) / 2)`,
//   }
// )
// globalStyle(
//   `.${controlContainer}:focus-within ${controlInput}, .${controlContainer}.${valueClass} ${controlInput}`,
//   {
//     alignSelf: "flex-end",
//   }
// )
// globalStyle(
//   `.${controlContainer}:focus-within ${controlInput}.sm, .${controlContainer}.${valueClass} ${controlInput}.sm`,
//   {
//     lineHeight: `calc(calc(${controlHeightSm} - calc(${control.element.borderWidth} * 2) - ${control.variants.sm.gap} - ${control.variants.sm.paddingTop} - ${control.variants.sm.paddingBottom}) / 2)`,
//   }
// )
// globalStyle(
//   `.${controlContainer}:focus-within ${controlInput}.md, .${controlContainer}.${valueClass} ${controlInput}.md`,
//   {
//     lineHeight: `calc(calc(${controlHeightMd} - calc(${control.element.borderWidth} * 2) - ${control.variants.md.gap} - ${control.variants.md.paddingTop} - ${control.variants.md.paddingBottom}) / 2)`,
//   }
// )
// globalStyle(
//   `.${controlContainer}:focus-within ${controlInput}.lg, .${controlContainer}.${valueClass} ${controlInput}.lg`,
//   {
//     lineHeight: `calc(calc(${controlHeightLg} - calc(${control.element.borderWidth} * 2) - ${control.variants.lg.gap} - ${control.variants.lg.paddingTop} - ${control.variants.lg.paddingBottom}) / 2)`,
//   }
// )
//
// export const toggleGroupContainer = style({
//   display: "inline-flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
//   justifyContent: "flex-start",
// })
// export const toggleGroupLabel = style({})
// export const toggleContainer = style({
//   display: "inline-flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   selectors: {
//     "&.sm": {
//       gap: control.variants.sm.gap,
//     },
//     "&.md": {
//       gap: control.variants.md.gap,
//     },
//     "&.lg": {
//       gap: control.variants.lg.gap,
//     },
//   },
// })
// export const toggleInput = style({
//   appearance: "none",
//   height: "1em",
//   width: "1em",
//   ...control.element,
//   ":focus": control.focus,
//   ":hover": control.hover,
//   ":active": control.active,
//   selectors: {
//     "&[type=radio]": {
//       borderRadius: "50%",
//     },
//     "&[type=radio]:checked": {
//       background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%0A%20%20%20%20fill%3D%22%23303236%22%0A%20%20%20%20d%3D%22M12%206.236c-3.182%200-5.764%202.582-5.764%205.764s2.582%205.764%205.764%205.764%205.764-2.582%205.764-5.764-2.582-5.764-5.764-5.764zm0-5.764C5.636.472%20.472%205.636.472%2012s5.165%2011.528%2011.528%2011.528%2011.528-5.165%2011.528-11.528S18.364.472%2012%20.472zm0%2020.751c-5.095%200-9.222-4.127-9.222-9.222s4.127-9.222%209.222-9.222%209.222%204.127%209.222%209.222-4.127%209.222-9.222%209.222z%22%0A%20%20%2F%3E%0A%3C%2Fsvg%3E%0A")`,
//     },
//     "&[type=checkbox]:checked": {
//       background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%0A%20%20%20%20fill%3D%22%23303236%22%0A%20%20%20%20d%3D%22M20.938.508H3.062c-1.417%200-2.554%201.149-2.554%202.554v17.876c0%201.405%201.136%202.554%202.554%202.554h17.876c1.417%200%202.554-1.149%202.554-2.554V3.062c0-1.405-1.136-2.554-2.554-2.554zm-11.492%2017.876-6.384-6.384%201.8-1.8L9.446%2014.771l9.691-9.691L20.938%206.893l-11.492%2011.492z%22%0A%20%20%2F%3E%0A%3C%2Fsvg%3E%0A")`,
//     },
//   },
// })
// export const toggleLabel = style({})
//
// export const bodyText = style({
//   ...bodyTextConfig.element,
//   selectors: {
//     "&.body1": bodyTextConfig.variants.body1,
//     "&.body2": bodyTextConfig.variants.body2,
//     "&.body3": bodyTextConfig.variants.body3,
//     "&.label": bodyTextConfig.variants.label,
//     "&.caption": bodyTextConfig.variants.caption,
//     "&.caption-heading": bodyTextConfig.variants.captionHeading,
//     "&.sm": bodyTextConfig.variants.sm,
//     "&.md": bodyTextConfig.variants.md,
//     "&.lg": bodyTextConfig.variants.lg,
//   },
// })
//
// export const display = style({
//   ...headingConfig.element,
//   ...headingConfig.variants.display,
// })
// export const h1 = style({
//   ...headingConfig.element,
//   ...headingConfig.variants.h1,
// })
// export const h2 = style({
//   ...headingConfig.element,
//   ...headingConfig.variants.h2,
// })
// export const h3 = style({
//   ...headingConfig.element,
//   ...headingConfig.variants.h3,
// })
// export const h4 = style({
//   ...headingConfig.element,
//   ...headingConfig.variants.h4,
// })
// export const h5 = style({
//   ...headingConfig.element,
//   ...headingConfig.variants.h5,
// })
// export const h6 = style({
//   ...headingConfig.element,
//   ...headingConfig.variants.h6,
// })
