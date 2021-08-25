import { Color } from '../config'

import * as Elements from './config'

const defaultTheme = Elements.make(Elements.defaultConfig)

describe('Elements.make', () => {
  it('should return default values if no input is provided', () => {
    const result = Elements.make()
    expect(result).toStrictEqual(defaultTheme)
  })

  describe('blocks', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.blocks).toStrictEqual(defaultTheme.blocks)
    })

    it('should accept a value', () => {
      const result = Elements.make({ blocks: { color: Color.Primary } })
      expect(result.blocks.color).toBe(Color.Primary)
    })
  })

  describe('buttons', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.buttons).toStrictEqual(defaultTheme.buttons)
    })

    it('should accept a value', () => {
      const result = Elements.make({ buttons: { color: Color.Primary } })
      expect(result.buttons.color).toBe(Color.Primary)
    })
  })

  describe('controls', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.controls).toStrictEqual(defaultTheme.controls)
    })

    it('should accept a value', () => {
      const result = Elements.make({ controls: { color: Color.Success } })
      expect(result.controls.color).toBe(Color.Success)
    })
  })

  describe('layouts', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.layouts).toStrictEqual(defaultTheme.layouts)
    })

    it('should accept a value', () => {
      const result = Elements.make({ layouts: { color: Color.Primary } })
      expect(result.layouts.color).toBe(Color.Primary)
    })
  })

  describe('links', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.links).toStrictEqual(defaultTheme.links)
    })

    it('should accept a value', () => {
      const result = Elements.make({ links: { color: Color.Primary } })
      expect(result.links.color).toBe(Color.Primary)
    })
  })

  describe('lists', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.lists).toStrictEqual(defaultTheme.lists)
    })

    it('should accept a value', () => {
      const result = Elements.make({ lists: { color: Color.Primary } })
      expect(result.lists.color).toBe(Color.Primary)
    })
  })

  describe('navs', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.navs).toStrictEqual(defaultTheme.navs)
    })

    it('should accept a value', () => {
      const result = Elements.make({ navs: { color: Color.Primary } })
      expect(result.navs.color).toBe(Color.Primary)
    })
  })

  describe('notifications', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.notifications).toStrictEqual(defaultTheme.notifications)
    })

    it('should accept a value', () => {
      const result = Elements.make({ notifications: { color: Color.Success } })
      expect(result.notifications.color).toBe(Color.Success)
    })
  })

  describe('surfaces', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.surfaces).toStrictEqual(defaultTheme.surfaces)
    })

    it('should accept a value', () => {
      const result = Elements.make({ surfaces: { color: Color.BgSecondary } })
      expect(result.surfaces.color).toBe(Color.BgSecondary)
    })
  })

  describe('tables', () => {
    it('should use the default value if no value is specified', () => {
      const result = Elements.make()
      expect(result.tables).toStrictEqual(defaultTheme.tables)
    })

    it('should accept a value', () => {
      const result = Elements.make({ tables: { color: Color.Primary } })
      expect(result.tables.color).toBe(Color.Primary)
    })
  })
})
