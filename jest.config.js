module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  moduleNameMapper: {
    '@horns/theme': '<rootDir>/packages/theme/src',
  },
  modulePathIgnorePatterns: ['<rootDir>/_notes/'],
}
