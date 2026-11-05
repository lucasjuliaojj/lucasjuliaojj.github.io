import next from "eslint-config-next";

const config = [
  ...next,
  { ignores: [".next/", "out/", "reference/", "next-env.d.ts"] },
];

export default config;
