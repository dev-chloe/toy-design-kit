import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import { mkdirSync, writeFileSync } from "fs";

const commonOutputConfig = {
  dir: "dist",
  exports: "auto",
  preserveModules: true,
  preserveModulesRoot: "stories",
  assetFileNames: "[name][extname]",
};

const config = {
  input: "stories/index.ts",
  output: [
    {
      // CommonJS Module
      entryFileNames: "[name].js",
      format: "cjs",
      interop: "auto", // for styled.function - Ref > https://stackoverflow.com/a/76682344
      ...commonOutputConfig,
    },
    {
      // ECMAScript Module
      entryFileNames: "[name].mjs",
      format: "es",
      ...commonOutputConfig,
    },
  ],
  plugins: [
    babel({ // Transpiling
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript({
      tsconfig: "./tsconfig.build.json",
      noForceEmit: true, // use defers to the values set in tsconfig
    }),
    scss({
      verbose: true,
      output: (styles, styleNodes) => {
        for (const filePathKey in styleNodes) {
          const chunk = filePathKey.replace(/stories/, "dist").split("/");
          const cssfilename = chunk.pop();
          if (cssfilename != null) {
            const cssFolderPath = chunk.join("/");
            mkdirSync(cssFolderPath, { recursive: true });
            writeFileSync(`${cssFolderPath}/${cssfilename}`, styleNodes[filePathKey]);
          }
        }
      },
    }),
  ],
  external: ["react", "styled-components"],
};

export default config;
