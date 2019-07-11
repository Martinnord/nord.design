const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = defaultConfig => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  defaultConfig.plugins.push(new TsConfigPathsPlugin());
  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  return defaultConfig;
};