module.exports = {
  name: 'horns',
  verbose: true,
  // globalSetup: '<rootDir>/test/setup-global.js',
  setupFiles: [
    '<rootDir>/test/setup.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>test/setup-framework.js',
  testPathIgnorePatterns: [
    '.cache',
    'dist',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/assets-transformer.js',
    '\\.(css|less)$': '<rootDir>/test/assets-transformer.js',
  },
}
