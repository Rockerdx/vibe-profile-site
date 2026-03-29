import next from "next/core-web-vitals";

export default [
  ...next,
  {
    rules: {
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
