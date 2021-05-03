module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', { moduleName: 'react-native-dotenv', safe: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          assets: './assets',
          '~common': './src/common',
          '~common/*': './src/common/*',
          '~constants': './src/common/constants',
          '~constants/*': './src/common/constants/*',
          '~services': './src/common/services',
          '~services/*': './src/common/services/*',
          '~features': './src/features',
          '~features/*': './src/features/*',
          '~components': './src/ui/components',
          '~components/*': './src/ui/components/*',
          '~layouts': './src/ui/layouts',
          '~layouts/*': './src/ui/layouts/*',
          '~presentation': './src/ui/presentation',
          '~presentation/*': './src/ui/presentation/*',
          '~screens': './src/ui/screens',
          '~screens/*': './src/ui/screens/*',
          '~translations': './src/common/translations',
          '~translations/*': './src/common/translations/*',
          '~store': './src/common/store',
          '~store/*': './src/common/store/*',
          '~hooks': './src/ui/hooks',
          '~hooks/*': './src/ui/hooks/*',
        },
      },
    ],
  ],
};
