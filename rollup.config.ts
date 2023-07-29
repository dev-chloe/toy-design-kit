import jsx from "acorn-jsx";
import scss from "rollup-plugin-scss";
import { mkdirSync, writeFileSync } from "fs";
import typescript from "@rollup/plugin-typescript";

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
      ...commonOutputConfig,
    },
    {
      // ECMAScript Module
      entryFileNames: "[name].mjs",
      format: "es",
      ...commonOutputConfig,
    },
  ],
  acornInjectPlugins: [jsx()], // using css import
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json",
      declaration: true,
      declarationDir: 'dist',
    }),
    scss({
      verbose: true,
      output: (styles, styleNodes) => {
        for (const filePathKey in styleNodes) {
          const chunk = filePathKey.replace(/stories/, "dist").split("/");
          const filename = chunk.pop();
          if (filename) {
            const cssFolderPath = chunk.join("/");
            mkdirSync(cssFolderPath, { recursive: true });
            const cssfilename = filename.replace(/scss$/, "css"); // remove scss file name
            writeFileSync(`${cssFolderPath}/${cssfilename}`, styleNodes[filePathKey]);
          }
        }
      }
    }),
  ],
  external: [
    "react",
  ],
};

export default config;
