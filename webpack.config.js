const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(sass|scss)$/,
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/,
          loader: 'url-loader?limit=8000&name=images/[name].[ext]',
        },
      ],
    },
    devServer: {
     // historyApiFallback: true,
     inline:true,
    port: 3000
    },
    plugins: [
      // the plugin is instantiated and is passed a configuration object
      new HtmlWebpackPlugin({
        // the template points to the file we want to use as a basis: index.html in src will be used as a starting point
        template: __dirname + '/src/index.html', // dirname is a global variable pointing to the absolute path of the project folder
        filename: 'index.html', // we also want to generate a file named index.html
        inject: 'body', // the content will be injected into the body
        // this should be copied into the dist folder where our output is stored as well.
      }),
    ],
  };
};