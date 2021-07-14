import { BorderStyle } from '../borders'
import { Colorway } from '../colors'
import { Size } from '../sizes'
import { Font } from '../typography'

import { ElementTheme, makeButtons, makeControls, makeTables } from '.'
import { defaultButtons } from './buttons'
import { defaultControls } from './controls'
import { defaultTables } from './tables'
import { defaultLinks, makeLinks } from './links'

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
