const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const rootDir = process.cwd();


module.exports = {
   entry: {
      client: path.join(rootDir, 'src/main/index.client.ts')
   },
   output: {
      filename: 'client.js',
      path: path.join(rootDir, 'dist/client'),
      publicPath: '/dist/client'
   },
   resolve: {
      modules: [
         'node_modules'
      ],
      extensions: [".ts", ".tsx", '.js', '.jsx'],
      "alias": {
         "react": "preact-compat",
         "react-dom": "preact-compat"
      }
   },
   module: {
      rules: [
         {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file-loader?name=[name].[ext]&publicPath=/build/"
         },
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               use: [
                  'css-loader?modules&importLoaders=1&localIdentName=[local]',
                  'postcss-loader'
               ]
            })
         },
         {
            test: /\.js(x?)$/,
            loader: 'babel-loader',
            options: {
               plugins: ['jsx-bemclasses', 'syntax-dynamic-import'],
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.ts(x?)$/,
            use: [
               {
                  loader: "awesome-typescript-loader"
               },
               {
                  loader: 'babel-loader',
                  options: {
                     plugins: ['jsx-bemclasses', 'syntax-dynamic-import'],
                     presets: ['es2015', 'react']
                  }
               }
            ]

         }
      ]
   },
   plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new UglifyJSPlugin()
   ],
   devtool: "cheap-module-source-map"
}

