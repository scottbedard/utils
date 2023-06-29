import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
import eslint from '@rollup/plugin-eslint'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  external: 'dependencies' in pkg ? Object.keys(pkg.dependencies) : [],
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.unpkg,
      format: 'iife',
      name: 'BedardUtils',
      plugins: [
        terser(),
      ],
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    typescript(),
    eslint({ fix: true }),
  ],
})
