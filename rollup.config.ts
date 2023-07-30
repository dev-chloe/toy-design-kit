import jsx from "acorn-jsx";
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
  acornInjectPlugins: [jsx()], // tsx to jsx
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json",
      declaration: true,
      declarationDir: "dist",
    }),
  ],
  external: ["react"],
};

export default config;
