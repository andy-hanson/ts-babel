const ts = require("./babel.config.for_flow")

module.exports = api => {
  const fromTs = ts(api)
  return {
    ...fromTs,
    presets: [
      "@babel/preset-env",
    ],
    plugins: [
      ...fromTs.plugins,
      // This time, we do want type annotations removed
      "@babel/plugin-transform-typescript",
      ["@babel/plugin-transform-runtime", {"regenerator": true}],
    ],
    sourceMaps: true,
  }
}
