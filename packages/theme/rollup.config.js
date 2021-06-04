import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

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
  resolve({
    extensions: ['.ts', '.tsx'],
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
    external,
    plugins: [del({ targets: 'dist/esm' }), ...plugins],
  },
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external,
    plugins: [del({ targets: 'dist/cjs' }), ...plugins, commonjs()],
  },
]
