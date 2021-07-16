import { Colorway } from '../colors'
import { Cursor } from '../cursors'
import { BorderStyle } from '../borders'
import { Size } from '../sizes'
import { Font } from '../typography'

import {
  ElementTheme,
  NavConfig,
  NavTheme,
  makeButtons,
  makeControls,
  makeLinks,
  makeNav,
  makeTables,
} from '.'
import { defaultButtons } from './buttons'
import { defaultControls } from './controls'
import { defaultTables } from './tables'
import { defaultLinks } from './links'
import { defaultNav } from './nav'

describe('makeButtons', () => {
  let expected: ElementTheme
  beforeEach(() => {
    expected = makeButtons(defaultButtons)
  })
  it('should return default values if no input is provided', () => {
    const result = makeButtons()
    expect(result).toStrictEqual(expected)
  })
  it('should accept "all" inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        all: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        all: Size.Giant,
      },
      radius: {
        all: Size.Giant,
      },
    }
    const result = makeButtons(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept dimensional inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        x: { style: BorderStyle.Dotted, width: Size.Giant },
        y: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        x: Size.Giant,
        y: Size.Giant,
      },
      radius: {
        top: Size.Large,
        bottom: Size.XLarge,
        right: Size.XXLarge,
        left: Size.Giant,
      },
    }
    const result = makeButtons(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept complete inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        top: { style: BorderStyle.Dotted, width: Size.Giant },
        bottom: { style: BorderStyle.Dotted, width: Size.Giant },
        left: { style: BorderStyle.Dotted, width: Size.Giant },
        right: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      },
      radius: {
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      },
    }
    const result = makeButtons(input)
    expect(result).toMatchSnapshot()
  })
})

describe('makeControls', () => {
  let expected: ElementTheme
  beforeEach(() => {
    expected = makeControls(defaultControls)
  })
  it('should return default values if no input is provided', () => {
    const result = makeControls()
    expect(result).toStrictEqual(expected)
  })
  it('should accept "all" inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        all: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        all: Size.Giant,
      },
      radius: {
        all: Size.Giant,
      },
    }
    const result = makeControls(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept dimensional inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        x: { style: BorderStyle.Dotted, width: Size.Giant },
        y: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        x: Size.Giant,
        y: Size.Giant,
      },
      radius: {
        top: Size.Large,
        bottom: Size.XLarge,
        right: Size.XXLarge,
        left: Size.Giant,
      },
    }
    const result = makeControls(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept complete inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        top: { style: BorderStyle.Dotted, width: Size.Giant },
        bottom: { style: BorderStyle.Dotted, width: Size.Giant },
        left: { style: BorderStyle.Dotted, width: Size.Giant },
        right: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      },
      radius: {
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      },
    }
    const result = makeControls(input)
    expect(result).toMatchSnapshot()
  })
})

describe('makeLinks', () => {
  let expected: ElementTheme
  beforeEach(() => {
    expected = makeLinks(defaultLinks)
  })
  it('should return default values if no input is provided', () => {
    const result = makeLinks()
    expect(result).toStrictEqual(expected)
  })
  it('should accept "all" inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        all: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        all: Size.Giant,
      },
      radius: {
        all: Size.Giant,
      },
    }
    const result = makeLinks(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept dimensional inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        x: { style: BorderStyle.Dotted, width: Size.Giant },
        y: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        x: Size.Giant,
        y: Size.Giant,
      },
      radius: {
        top: Size.Large,
        bottom: Size.XLarge,
        right: Size.XXLarge,
        left: Size.Giant,
      },
    }
    const result = makeLinks(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept complete inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        top: { style: BorderStyle.Dotted, width: Size.Giant },
        bottom: { style: BorderStyle.Dotted, width: Size.Giant },
        left: { style: BorderStyle.Dotted, width: Size.Giant },
        right: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      },
      radius: {
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      },
    }
    const result = makeLinks(input)
    expect(result).toMatchSnapshot()
  })
})

describe('makeNav', () => {
  let expected: NavTheme
  beforeEach(() => {
    expected = makeNav(defaultNav)
  })
  it('should return default values if no input is provided', () => {
    const result = makeNav()
    expect(result).toStrictEqual(expected)
  })
  it('should accept "all" inputs', () => {
    const input = {
      color: Colorway.Primary,
      cursor: Cursor.NoDrop,
      border: {
        all: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        all: Size.Giant,
      },
      radius: {
        all: Size.Giant,
      },
    }
    const result = makeNav(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept dimensional inputs', () => {
    const input = {
      color: Colorway.Primary,
      cursor: Cursor.NoDrop,
      border: {
        x: { style: BorderStyle.Dotted, width: Size.Giant },
        y: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        x: Size.Giant,
        y: Size.Giant,
      },
      radius: {
        top: Size.Large,
        bottom: Size.XLarge,
        right: Size.XXLarge,
        left: Size.Giant,
      },
    }
    const result = makeNav(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept complete inputs', () => {
    const input: NavConfig = {
      color: Colorway.Primary,
      cursor: Cursor.NoDrop,
      border: {
        top: { style: BorderStyle.Dotted, width: Size.Giant },
        bottom: { style: BorderStyle.Dotted, width: Size.Giant },
        left: { style: BorderStyle.Dotted, width: Size.Giant },
        right: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      },
      radius: {
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      },
      currentItem: {
        color: Colorway.Secondary,
        cursor: Cursor.NotAllowed,
        border: {
          top: { style: BorderStyle.Groove, width: Size.Medium },
          bottom: { style: BorderStyle.Groove, width: Size.Medium },
          left: { style: BorderStyle.Groove, width: Size.Medium },
          right: { style: BorderStyle.Groove, width: Size.Medium },
        },
        font: Font.Code,
        padding: {
          top: Size.Medium,
          bottom: Size.Medium,
          left: Size.Medium,
          right: Size.Medium,
        },
        radius: {
          topRight: Size.Medium,
          bottomRight: Size.Medium,
          topLeft: Size.Medium,
          bottomLeft: Size.Medium,
        },
      },
    }
    const result = makeNav(input)
    expect(result).toMatchSnapshot()
  })
})

describe('makeTables', () => {
  let expected: ElementTheme
  beforeEach(() => {
    expected = makeTables(defaultTables)
  })
  it('should return default values if no input is provided', () => {
    const result = makeTables()
    expect(result).toStrictEqual(expected)
  })
  it('should accept "all" inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        all: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        all: Size.Giant,
      },
      radius: {
        all: Size.Giant,
      },
    }
    const result = makeTables(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept dimensional inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        x: { style: BorderStyle.Dotted, width: Size.Giant },
        y: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        x: Size.Giant,
        y: Size.Giant,
      },
      radius: {
        top: Size.Large,
        bottom: Size.XLarge,
        right: Size.XXLarge,
        left: Size.Giant,
      },
    }
    const result = makeTables(input)
    expect(result).toMatchSnapshot()
  })
  it('should accept complete inputs', () => {
    const input = {
      color: Colorway.Primary,
      border: {
        top: { style: BorderStyle.Dotted, width: Size.Giant },
        bottom: { style: BorderStyle.Dotted, width: Size.Giant },
        left: { style: BorderStyle.Dotted, width: Size.Giant },
        right: { style: BorderStyle.Dotted, width: Size.Giant },
      },
      font: Font.Paragraph,
      padding: {
        top: Size.Giant,
        bottom: Size.Giant,
        left: Size.Giant,
        right: Size.Giant,
      },
      radius: {
        topRight: Size.Giant,
        bottomRight: Size.Giant,
        topLeft: Size.Giant,
        bottomLeft: Size.Giant,
      },
    }
    const result = makeTables(input)
    expect(result).toMatchSnapshot()
  })
})
