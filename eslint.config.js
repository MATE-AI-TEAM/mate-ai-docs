const { fixupConfigRules } = require("@eslint/compat");

const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    ignores: [
      "**/*.d.ts",
      "**/*.config.mjs",
      "**/*.config.js",
      ".next/**/*",
      "public/**/*",
    ],
  },
  js.configs.recommended,
  ...fixupConfigRules(compat.extends("@repo/eslint-config/next.js")),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];
