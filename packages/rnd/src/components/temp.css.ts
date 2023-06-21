// import { globalStyle, style } from "@vanilla-extract/css"
// import {
//   Button,
//   buttonConfig,
//   Control,
//   controlConfig,
//   controlLabelClass,
//   iconLabelClass,
//   valueClass,
// } from "./temp"
//
// const bgEnabled = "rgba(240, 240, 240, 1)"
// const bgDisabled = "rgba(127, 127, 127, 1)"
// const bgHover = "rgba(230, 230, 230, 1)"
// const bgActive = "rgba(220, 220, 220, 1)"
//
// const black = "#030303"
// const white = "#fafafa"
// const border = {
//   surface: {
//     borderWidth: "1px",
//     borderStyle: "solid",
//   },
//   button: {
//     primary: {
//       borderWidth: "2px",
//       borderStyle: "solid",
//     },
//   },
//   none: {
//     borderWidth: "0",
//     borderStyle: "none",
//   },
// }
// const colorways = {
//   none: {
//     backgroundColor: "transparent",
//     borderColor: "transparent",
//     color: "inherit",
//     textDecorationColor: "inherit",
//     fill: "inherit",
//     stroke: "inherit",
//   },
//   button: {
//     primary: {
//       enabled: {
//         backgroundColor: "rgba(255, 170, 0, 1)",
//         borderColor: "rgba(235, 150, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//       hover: {
//         backgroundColor: "rgba(235, 150, 0, 1)",
//         borderColor: "rgba(215, 130, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//       active: {
//         backgroundColor: "rgba(215, 130, 0, 1)",
//         borderColor: "rgba(195, 110, 0, 1)",
//         color: "#fafafa",
//         textDecorationColor: "#fafafa",
//         fill: "#fafafa",
//         stroke: "#fafafa",
//       },
//     },
//   },
//   surface: {
//     background: {
//       base: {
//         backgroundColor: "rgba(240, 240, 240, 1)",
//         borderColor: "rgba(200, 200, 200, 1)",
//         color: "#030303",
//         textDecorationColor: "#030303",
//         fill: "#030303",
//         stroke: "#030303",
//       },
//       alt: {
//         backgroundColor: "rgba(240, 240, 240, 1)",
//         borderColor: "rgba(200, 200, 200, 1)",
//         color: "#030303",
//         textDecorationColor: "#030303",
//         fill: "#030303",
//         stroke: "#030303",
//       },
//     },
//   },
//   controlSurface: {
//     enabled: {
//       backgroundColor: "rgba(240, 240, 240, 1)",
//       borderColor: "rgba(200, 200, 200, 1)",
//       color: "#030303",
//       textDecorationColor: "#030303",
//       fill: "#030303",
//       stroke: "#030303",
//     },
//     disabled: {
//       backgroundColor: "rgba(127, 127, 127, 1)",
//       borderColor: "rgba(100, 100, 100, 1)",
//       textDecorationColor: "rgba(100, 100, 100, 1)",
//       color: "rgba(100, 100, 100, 1)",
//       fill: "rgba(100, 100, 100, 1)",
//       stroke: "rgba(100, 100, 100, 1)",
//     },
//     hover: {
//       backgroundColor: "rgba(220, 220, 220, 1)",
//       borderColor: "rgba(180, 180, 180, 1)",
//       textDecorationColor: "#030303",
//       color: "#030303",
//       fill: "#030303",
//       stroke: "#030303",
//     },
//     active: {
//       backgroundColor: "rgba(200, 200, 200, 1)",
//       borderColor: "rgba(160, 160, 160, 1)",
//       color: "#030303",
//       textDecorationColor: "#030303",
//       fill: "#030303",
//       stroke: "#030303",
//     },
//   },
//   control: {
//     error: {
//       backgroundColor: "rgba(240, 240, 240, 1)",
//       borderColor: "rgba(255, 0, 64, 1)",
//       color: "#030303",
//       textDecorationColor: "#030303",
//       fill: "rgba(255, 0, 64, 1)",
//       stroke: "rgba(255, 0, 64, 1)",
//     },
//   },
// }
// const iconColorways = {
//   none: {
//     color: "inherit",
//     fill: "currentColor",
//     stroke: "currentColor",
//   },
//   enabled: {
//     color: "#030303",
//     fill: "#030303",
//     stroke: "#030303",
//   },
//   disabled: {
//     color: "rgba(100, 100, 100, 1)",
//     fill: "rgba(100, 100, 100, 1)",
//     stroke: "rgba(100, 100, 100, 1)",
//   },
//   hover: {
//     color: "#030303",
//     fill: "#030303",
//     stroke: "#030303",
//   },
//   active: {
//     color: "#030303",
//     fill: "#030303",
//     stroke: "#030303",
//   },
//   error: {
//     color: "rgba(255, 0, 64, 1)",
//     fill: "rgba(255, 0, 64, 1)",
//     stroke: "rgba(255, 0, 64, 1)",
//   },
// }
// const font = {
//   fontFamily: "sans-serif",
// }
// const outline = {
//   none: {
//     outlineWidth: "0",
//     outlineStyle: "none",
//     outlineColor: "transparent",
//   },
//   focus: {
//     outlineWidth: "1px",
//     outlineStyle: "solid",
//     outlineColor: "rgba(0, 170, 255, 1)",
//     outlineOffset: "2px",
//   },
// }
//
// export const icon = style({
//   // ...colorways.none,
//   selectors: {
//     "&.error": iconColorways.error,
//   },
// })
//
// // export const icon2 = style({
// //   // ...iconColorways.none,
// //   selectors: {
// //     "&.error": iconColorways.error,
// //   },
// // })
//
// // const controlTokens: Control = {
// //   enabled: {
// //     ...border.surface,
// //     ...colorways.controlSurface.enabled,
// //     ...font,
// //   },
// //   focus: outline.focus,
// //   hover: colorways.controlSurface.hover,
// //   active: colorways.controlSurface.active,
// //   variants: {
// //     disabled: colorways.controlSurface.disabled,
// //     error: colorways.control.error,
// //   },
// // }
//
// export const stack = style({
//   display: "inline-flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
// })
// // export const control = style({
// //   ...border.surface,
// //   ...colorways.controlSurface.enabled,
// //   ...font,
// //   ":hover": colorways.controlSurface.hover,
// //   ":active": colorways.controlSurface.active,
// //   ":focus-within": outline.focus,
// //   selectors: {
// //     "&[disabled], &.disabled": colorways.controlSurface.disabled,
// //     "&.error": colorways.control.error,
// //   },
// // })
//
// // export const button = style({
// //   ...border.surface,
// //   ...colorways.controlSurface.enabled,
// //   ...font,
// //   ":hover": colorways.controlSurface.hover,
// //   ":active": colorways.controlSurface.active,
// //   ":focus": outline.focus,
// //   selectors: {
// //     "&[disabled], &.disabled": colorways.controlSurface.disabled,
// //     "&.error": colorways.control.error,
// //     "&.primary": {
// //       ...border.button.primary,
// //       ...colorways.button.primary.enabled,
// //     },
// //     "&.primary:hover": {
// //       ...colorways.button.primary.hover,
// //     },
// //     "&.primary:active": {
// //       ...colorways.button.primary.active,
// //     },
// //   },
// // })
// // const buttonTokens: Button = {
// //   enabled: {
// //     ...border.surface,
// //     ...colorways.controlSurface.enabled,
// //     ...font,
// //   },
// //   focus: outline.focus,
// //   hover: colorways.controlSurface.hover,
// //   active: colorways.controlSurface.active,
// //   variants: {
// //     disabled: colorways.controlSurface.disabled,
// //     error: colorways.control.error,
// //     primary: {
// //       enabled: {
// //         ...border.button.primary,
// //         ...colorways.button.primary.enabled,
// //       },
// //       hover: colorways.button.primary.hover,
// //       active: colorways.button.primary.active,
// //     },
// //   },
// // }
// export const button = style({
//   ...buttonConfig.enabled,
//   ":focus": buttonConfig.focus,
//   ":hover": buttonConfig.hover,
//   ":active": buttonConfig.active,
//   selectors: {
//     "&[disabled], &.disabled": buttonConfig.variants.disabled,
//     "&.error": buttonConfig.variants.error,
//     "&.primary": buttonConfig.variants.primary.enabled,
//     "&.primary:hover": buttonConfig.variants.primary.hover,
//     "&.primary:active": buttonConfig.variants.primary.active,
//     "&.secondary": buttonConfig.variants.secondary.enabled,
//     "&.secondary:hover": buttonConfig.variants.secondary.hover,
//     "&.secondary:active": buttonConfig.variants.secondary.active,
//     "&.tertiary": buttonConfig.variants.tertiary.enabled,
//     "&.tertiary:hover": buttonConfig.variants.tertiary.hover,
//     "&.tertiary:active": buttonConfig.variants.tertiary.active,
//     "&.sm": buttonConfig.variants.sm,
//     "&.md": buttonConfig.variants.md,
//     "&.lg": buttonConfig.variants.lg,
//   },
// })
// export const controlContainer = style({
//   display: "inline-flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
//   justifyContent: "flex-start",
// })
// export const toggleContainer = style({
//   display: "inline-flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   selectors: {
//     "&.sm": {
//       gap: controlConfig.variants.sm.gap,
//     },
//     "&.md": {
//       gap: controlConfig.variants.md.gap,
//     },
//     "&.lg": {
//       gap: controlConfig.variants.lg.gap,
//     },
//   },
// })
// export const toggleInput = style({
//   appearance: "none",
//   // background: "white",
//   // color: "black",
//   height: "1em",
//   width: "1em",
//   // border: "1px solid currentColor",
//   // cursor: "pointer",
//   ...controlConfig.enabled,
//   // position: "relative",
//   ":focus": controlConfig.focus,
//   ":hover": controlConfig.hover,
//   ":active": controlConfig.active,
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
// const heightSm = "44px"
// const heightMd = "54px"
// const heightLg = "64px"
// const labelHeight = "1em"
// export const controlLabelContainer = style({
//   position: "relative",
//   // selectors: {
//   //   "&.sm": {
//   //     height: heightSm,
//   //   },
//   //   "&.md": {
//   //     height: heightMd,
//   //   },
//   //   "&.lg": {
//   //     height: heightLg,
//   //   },
//   // },
// })
// export const controlContainerDefault = style({
//   selectors: {
//     "&.sm": {
//       ...controlConfig.variants.sm,
//       paddingTop: `calc(${heightSm} - calc(${labelHeight} + 6px + 6px))`,
//       paddingBottom: "6px", // TODO: need to read this from the controlConfig!!
//       height: heightSm,
//     },
//     "&.md": {
//       ...controlConfig.variants.md,
//       paddingTop: `calc(${heightMd} - calc(${labelHeight} + 8px + 8px))`,
//       paddingBottom: "8px", // TODO: need to read this from the controlConfig!!
//       height: heightMd,
//     },
//     "&.lg": {
//       ...controlConfig.variants.lg,
//       paddingTop: `calc(${heightLg} - calc(${labelHeight} + 10px + 10px))`,
//       paddingBottom: "10px", // TODO: need to read this from the controlConfig!!
//       height: heightLg,
//     },
//   },
// })
// export const controlContainerIcons = style({
//   selectors: {
//     "&.sm": {
//       ...controlConfig.variants.sm,
//       // paddingTop: "0",
//       // paddingBottom: "0",
//       // paddingTop: `calc(${heightSm} - 2.1em)`,
//       // height: heightSm,
//     },
//     "&.md": {
//       ...controlConfig.variants.md,
//       // fontSize: controlConfig.variants.md.fontSize,
//       // lineHeight: controlConfig.variants.md.lineHeight,
//       // height: heightMd,
//       // paddingTop: "0",
//       // paddingBottom: "0",
//       // paddingTop: `calc(${heightMd} - 2.1em)`,
//       // height: heightMd,
//     },
//     "&.lg": {
//       ...controlConfig.variants.lg,
//       // paddingTop: "0",
//       // paddingBottom: "0",
//       // paddingTop: `calc(${heightLg} - 2.1em)`,
//       // height: heightLg,
//     },
//   },
// })
// export const control = style({
//   ...controlConfig.enabled,
//   // position: "relative",
//   ":focus": controlConfig.focus,
//   ":hover": controlConfig.hover,
//   ":active": controlConfig.active,
//   boxSizing: "border-box",
//   selectors: {
//     "&[disabled], &.disabled": controlConfig.variants.disabled,
//     "&.error": controlConfig.variants.error,
//     // "&.sm": {
//     //   ...controlConfig.variants.sm,
//     //   // paddingTop: `calc(${heightSm} - 2.1em)`,
//     //   height: heightSm,
//     // },
//     // "&.md": {
//     //   ...controlConfig.variants.md,
//     //   // paddingTop: `calc(${heightMd} - 2.1em)`,
//     //   height: heightMd,
//     // },
//     // "&.lg": {
//     //   ...controlConfig.variants.lg,
//     //   // paddingTop: `calc(${heightLg} - 2.1em)`,
//     //   height: heightLg,
//     // },
//   },
// })
// export const controlInput = style({
//   ...border.none,
//   ...colorways.none,
//   ...font,
//   ":focus": outline.none,
// })
// export const controlSelect = style({
//   padding: "0",
//   paddingRight: "1em",
//   ...font,
//   selectors: {
//     "&.sm": {
//       fontSize: controlConfig.variants.sm.fontSize,
//       lineHeight: controlConfig.variants.sm.lineHeight,
//       height: controlConfig.variants.sm.lineHeight,
//       boxSizing: "content-box",
//       padding: "0",
//       paddingTop: `calc(${heightSm} - calc(${labelHeight} + 6px + 6px + 6px))`,
//       paddingRight: "1em",
//     },
//     "&.md": {
//       fontSize: controlConfig.variants.md.fontSize,
//       lineHeight: controlConfig.variants.md.lineHeight,
//       height: controlConfig.variants.md.lineHeight,
//       padding: "0",
//       boxSizing: "content-box",
//       paddingTop: `calc(${heightMd} - calc(${labelHeight} + 8px + 8px + 8px))`,
//       paddingRight: "1em",
//     },
//     "&.lg": {
//       fontSize: controlConfig.variants.lg.fontSize,
//       lineHeight: controlConfig.variants.lg.lineHeight,
//       height: controlConfig.variants.lg.lineHeight,
//       padding: "0",
//       boxSizing: "content-box",
//       paddingTop: `calc(${heightLg} - calc(${labelHeight} + 10px + 10px + 10px))`,
//       paddingRight: "1em",
//     },
//   },
// })
// export const controlIconInput = style({
//   selectors: {
//     "&.sm": {
//       fontSize: controlConfig.variants.sm.fontSize,
//       lineHeight: controlConfig.variants.sm.lineHeight,
//       padding: "0",
//       // ...controlConfig.variants.sm,
//       paddingTop: `calc(${heightSm} - calc(${labelHeight} + 6px + 6px + 6px))`,
//       // height: heightSm,
//     },
//     "&.md": {
//       fontSize: controlConfig.variants.md.fontSize,
//       lineHeight: controlConfig.variants.md.lineHeight,
//       padding: "0",
//       // ...controlConfig.variants.md,
//       // fontSize: controlConfig.variants.md.fontSize,
//       // lineHeight: controlConfig.variants.md.lineHeight,
//       // height: heightMd,
//       // paddingTop: "0",
//       // paddingBottom: "0",
//       paddingTop: `calc(${heightMd} - calc(${labelHeight} + 8px + 8px + 8px))`,
//       // height: heightMd,
//     },
//     "&.lg": {
//       fontSize: controlConfig.variants.lg.fontSize,
//       lineHeight: controlConfig.variants.lg.lineHeight,
//       // ...controlConfig.variants.lg,
//       padding: "0",
//       // calc(64px - calc(1em + 30px))
//       paddingTop: `calc(${heightLg} - calc(${labelHeight} + 10px + 10px + 10px))`,
//       // height: heightLg,
//     },
//   },
// })
// export const label = style({
//   ...colorways.none,
//   ...font,
//   selectors: {
//     "&.sm": {
//       // ...controlConfig.variants.sm,
//       // paddingTop: "0px",
//       // paddingRight: "0px",
//       // paddingBottom: "0px",
//       // // lineHeight: heightSm,
//       fontSize: controlConfig.variants.sm.fontSize,
//       lineHeight: `calc(${heightSm} - calc(6px + 6px + 6px))`,
//     },
//     "&.md": {
//       // ...controlConfig.variants.md,
//       // paddingTop: "0px",
//       // paddingRight: "0px",
//       // paddingBottom: "0px",
//       // // lineHeight: heightMd,
//       fontSize: controlConfig.variants.md.fontSize,
//       lineHeight: `calc(${heightMd} - calc(8px + 8px + 8px))`,
//     },
//     "&.lg": {
//       // ...controlConfig.variants.lg,
//       // paddingTop: "0px",
//       // paddingRight: "0px",
//       // paddingBottom: "0px",
//       // // lineHeight: heightLg,
//       fontSize: controlConfig.variants.lg.fontSize,
//       lineHeight: `calc(${heightLg} - calc(10px + 10px + 10px))`,
//     },
//     [`&.${valueClass}`]: {
//       lineHeight: labelHeight,
//       // lineHeight: "1em",
//     },
//     [`&.${controlLabelClass}`]: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//     },
//     // [`&.sm:not(.${valueClass})`]: {
//     //   lineHeight: `calc(${heightSm} - calc(6px + 6px + 6px))`,
//     //   // lineHeight: "1em",
//     // },
//     // [`&.md:not(.${valueClass})`]: {
//     //   lineHeight: `calc(${heightMd} - calc(8px + 8px + 8px))`,
//     //   // lineHeight: "1em",
//     // },
//     // [`&.lg:not(.${valueClass})`]: {
//     //   lineHeight: `calc(${heightLg} - calc(10px + 10px + 10px))`,
//     //   // lineHeight: "1em",
//     // },
//     // [`&:not(.${valueClass})`]: {
//     //   paddingTop: "0px",
//     //   // lineHeight: "1em",
//     // },
//     [`&.${iconLabelClass}`]: {
//       paddingTop: "0px",
//       paddingLeft: "0px",
//       // lineHeight: "1em",
//     },
//     // [`&.sm:not(.${iconLabelClass})`]: {
//     //   lineHeight: heightSm,
//     // },
//     // [`&.md:not(.${iconLabelClass}):not(.${valueClass})`]: {
//     //   lineHeight: heightMd,
//     // },
//     // [`&.lg:not(.${iconLabelClass})`]: {
//     //   lineHeight: heightLg,
//     // },
//     // [`&.sm.${iconLabelClass}`]: {
//     //   lineHeight: `calc(${heightSm} - calc(6px + 6px + 6px))`,
//     // },
//     // [`&.md.${iconLabelClass}`]: {
//     //   lineHeight: `calc(${heightMd} - calc(8px + 8px + 8px))`,
//     // },
//     // [`&.lg.${iconLabelClass}`]: {
//     //   lineHeight: `calc(${heightLg} - calc(10px + 10px + 10px))`,
//     // },
//   },
// })
// globalStyle(`.${controlContainerIcons}:focus-within label`, {
//   lineHeight: labelHeight,
//   // lineHeight: `${labelHeight} !important`,
// })
// export const message = style({
//   ...colorways.none,
//   ...font,
//   selectors: {
//     "&.error": colorways.control.error,
//   },
// })
// globalStyle("path", {
//   // fill: "inherit",
//   stroke: "inherit",
// })
//
// const area1 = "icon1"
// const area2 = "icon2"
// const controlHeight = "54px"
// export const tempContainer = style({
//   // display: "inline-grid",
//   // gridTemplateAreas: `"icon1 label icon2" "icon1 input icon2"`,
//   display: "inline-flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   padding: "8px 16px",
//   gap: "8px",
//   border: "1px solid currentColor",
//   ":focus-within": outline.focus,
//   height: controlHeight,
//   boxSizing: "border-box",
// })
// export const tempIcon1 = style({
//   // gridArea: "icon1",
// })
// export const tempIcon2 = style({
//   // gridArea: "icon2",
// })
// export const tempInput = style({
//   // gridArea: "input",
//   border: "none",
//   padding: "0",
//   ...font,
//   ":focus": outline.none,
//   height: `calc(${controlHeight} - 8px - 8px - 8px - 2px)`,
// })
// export const tempLabel = style({
//   // gridArea: "label",
//   ...font,
//   position: "absolute",
//   lineHeight: `calc(${controlHeight} - 8px - 8px - 8px - 2px)`,
// })
// export const tempLabelContainer = style({
//   // gridArea: "label",
//   position: "relative",
//   display: "inline-flex",
//   flexDirection: "column-reverse",
//   alignItems: "flex-start",
//   justifyContent: "center",
//   gap: "8px",
//   height: `calc(${controlHeight} - 8px - 8px)`,
// })
// globalStyle(
//   `.${tempContainer}:focus-within label, .${tempContainer}.has-value label`,
//   {
//     lineHeight: `calc(calc(${controlHeight} - 8px - 8px - 8px - 2px) / 2)`,
//     alignSelf: "flex-start",
//     position: "static",
//     // lineHeight: labelHeight,
//     // lineHeight: `${labelHeight} !important`,
//   }
// )
// globalStyle(
//   `.${tempContainer}:focus-within input, .${tempContainer}.has-value input`,
//   {
//     lineHeight: `calc(calc(${controlHeight} - 8px - 8px - 8px - 2px) / 2)`,
//     alignSelf: "flex-end",
//     // lineHeight: labelHeight,
//     // lineHeight: `${labelHeight} !important`,
//   }
// )
