import { defaultConfig, makeFoundations } from "./index"

describe("makeStack", () => {
  it("should work", () => {
    const result = makeFoundations(defaultConfig)
    console.log("result", JSON.stringify(result))
    expect(true).toBe(false)
  })
})
