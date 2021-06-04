import babel from '@rollup/plugin-babel'
import del from 'rollup-plugin-delete'
import typescript from 'rollup-plugin-typescript2'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import pkg from './package.json'

const input = 'src/index.ts'

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
]

const plugins = [
  typescript({
    // eslint-disable-next-line global-require
    typescript: require('typescript'),
  }),
  babel({
    babelHelpers: 'bundled',
    extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
  }),
]

export default [
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true,
      sourcemap: true,
    },
    plugins,
    external: [del({ targets: 'dist/esm' }), ...external],
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'umd',
      // name: 'horns-ui',
      sourcemap: true,
    },
    plugins,
    external: [del({ targets: 'dist/umd' }), ...external],
  },
]
