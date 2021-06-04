const ignore = ['**/dist']

// Jest needs to compile this code, but generally we don't want this copied
// to output folders
if (process.env.NODE_ENV !== 'test') {
  ignore.push('**/*.test.js')
}

module.exports = {
  sourceMaps: true,
  ignore,
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ],
  plugins: ['@emotion'],
}
