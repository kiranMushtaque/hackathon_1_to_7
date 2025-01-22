// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

import { defineConfig } from "eslint";

export default defineConfig({
  extends: ["next/core-web-vitals"], // Default Next.js config for web vitals
  rules: {
    // Aap apne custom rules yahan add kar sakte hain
  },
});
