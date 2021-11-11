const CracoAlias = require('craco-alias');

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            ie: 11
          },
          modules: 'cjs',
          corejs: 3,
          debug: false,
          useBuiltIns: 'usage'
        }
      ],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ],
    loaderOptions: {
      exclude: /@babel(?:\/|\\{1,2})runtime|core-js/
    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.extend.json'
      }
    }
  ]
};
