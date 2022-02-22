import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import glob from 'glob'

const input = glob.sync('{src/index.ts,src/**/index.ts}')
const external = Object.keys(pkg.dependencies)

export default [{
  input,
  external,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.main.replace('index', ''),
    format: 'cjs',
    preserveModules: true
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    })
  ],
}, {
  input,
  external,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.module.replace('index', ''),
    format: 'es',
    preserveModules: true
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          target: 'es6',
        }
      }
    })
  ]
}]
