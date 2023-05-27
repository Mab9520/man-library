import postcss from "rollup-plugin-postcss"
import packageJson from "./package.json" assert {type: "json"}
import dts from "rollup-plugin-dts"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                name: "mab-dist"
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [resolve(), commonjs(), typescript({tsconfig:"./tsconfig.json"}), terser()]
    },
    {
        input: "src/output.css",
        output: [
            {
                file: "dist/style/styles.css"
            },
        ],
        plugins: [postcss({minimize:true, inject:false, extract:true})]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [
            {
                file: packageJson.types, 
                format: "esm"
            }
        ],
        plugins: [dts.default()]
    }
]