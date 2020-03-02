const path = require('path');
const webpack = require('webpack');
const mode = require('yargs').argv.mode;
const libraryTarget = require('yargs').argv['output-library-target'];
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pkg = require('./package.json');

const libraryName = 'api-document';

const banner = `${pkg.name}
${pkg.description}\n
@version v${pkg.version}
@author ${pkg.author}
@homepage ${pkg.homepage}
@repository ${pkg.repository.url}`;

const plugins = [new webpack.BannerPlugin(banner), new BundleAnalyzerPlugin()];

module.exports = {
  entry: `${__dirname}/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/${libraryTarget === 'umd' ? 'dist' : 'lib'}`,
    filename: mode === 'development' ? `${libraryName}.js` : `${libraryName}.min.js`,
    library: libraryName,
    libraryTarget: libraryTarget || 'umd',
    globalObject: "(typeof self !== 'undefined' ? self : this)", // TODO Hack (for Webpack 4+) to enable create UMD build which can be required by Node without throwing error for window being undefined (https://github.com/webpack/webpack/issues/6522)
    umdNamedDefine: true,
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less'],
  },
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts|\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // include: [
        //   path.resolve(__dirname, 'src'),
        //   path.resolve(__dirname, 'node_modules/antd'),
        //   path.resolve(__dirname, 'node_modules/@ant-design/icons'),
        // ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/antd')],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: plugins,
};
