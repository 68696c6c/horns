// import {
//   lighten,
//   darken,
//   saturate,
//   desaturate,
//   readableColor,
//   complement,
// } from 'polished'

function themeBuilder(theme = {}) {
  const mainColors = {
    primary: 'orange',
    secondary: 'rebeccapurple',
    tertiary: 'seagreen',
    accent: 'tomato',
    light: 'white',
    dark: 'black',
    ...theme.colors,
  }

  // Object.keys(mainColors).forEach(color => {
  //   const c = mainColors[color]
  //
  //   mainColors[color] = {
  //     default: c,
  //     dark: darken(0.2, c),
  //     darker: darken(0.5, c),
  //     light: lighten(0.2, c),
  //     lighter: lighten(0.5, c),
  //     saturated: saturate(0.2, c),
  //     desaturated: desaturate(0.2, c),
  //     complemented: complement(c),
  //     readableColor: readableColor(c),
  //   }
  // })

  return {
    spacing: {
      xs: [6, 12],
      sm: [14, 20],
      med: [24, 30],
      lg: [34, 44],
      xl: [46, 60],
      ...theme.spacing,
    },
    colors: {
      ...mainColors,
    },
  }
}

export default themeBuilder
