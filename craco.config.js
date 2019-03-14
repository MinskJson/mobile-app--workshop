const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  // webpack: {
  //   plugins: [new BundleAnalyzerPlugin()],
  // },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};