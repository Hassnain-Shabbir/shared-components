import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
// import eslint from "@rollup/plugin-eslint";

import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // scss({
      //   output: "dist/styles.css",
      // }),
      peerDepsExternal(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extract: false,
        // minimize: true,
        modules: true,
        use: ["sass"],
        extensions: [".scss"],
      }),
      babel({ exclude: "node_modules/**" }),
      resolve(),
      commonjs(),
      // eslint({
      //   exclude: ["src/styles/**"],
      // }),
      terser(),
    ],
  },
  {
    // input: "dist/esm/types/index.d.ts",
    input: "dist/esm/types/src/index.d.ts",
    // input: "src/index.ts",

    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    // plugins: [dts.default()],
    external: [/\.scss$/, "react", "react-dom"],
  },
];
