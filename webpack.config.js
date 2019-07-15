const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
var webpackConfig = {
  entry: {
    EntryPoint: [
      path.join(__dirname, 'src', 'main.ts')
    ]
  }, resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src', 'dist'),
    //   publicPath: 'src/dist'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: ['ts-loader']
    },
    {
      test: /\.html$/,
      use: 'html-loader' //raw-loader
    }, {
      test: /\.scss$/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }]
    }
      ,
    ]
  },

  devServer: {
    inline: true,
    watchOptions: {
      ignored: [
        /node_modules/,
      ]
    },
    port: 4209,
  }
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
});
webpackConfig.plugins = [
  htmlWebpackPlugin,
];
module.exports = webpackConfig;
