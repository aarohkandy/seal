import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "coverage/**",
      "docs/source-pdfs/**",
      "docs/extracted/**"
    ]
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  }
];
