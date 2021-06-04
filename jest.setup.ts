import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'

// Bringing in custom matchers from jest-emotion.
// e.g. toHaveStyleRule
expect.extend(matchers)
