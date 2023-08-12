import babel from "@rollup/plugin-babel";
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
  ],
  external: ["react", "styled-components"],
};

export default config;
