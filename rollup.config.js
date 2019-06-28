// console.log(require("./dist/cnbuilder.js"));

import ts from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "./src/index.ts",

  output: [
    {
      file: pkg.module,
      format: "es"
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    }
  ],

  plugins: [
    ts({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: "esnext",
          target: "es3"
        }
      }
    })
  ]
};
