// This is meant to compile away *just* the syntax that TypeScript can't handle.

module.exports = api => {
  api.cache(true)
  return {
    plugins: [
      ["@babel/plugin-proposal-pipeline-operator", {
        "proposal": "smart"
      }],
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-syntax-typescript"
      // We are *not* using babel-plugin-transform-typescript,
      // because we want the type annotations to stick around for use by TS.
    ],
  }
}
