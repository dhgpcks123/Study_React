const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
   name: 'wordrelay-setting',
   mode: 'development', //실 서비스인 경우 production
   devtool: 'eval',
   resolve: {
      extensions: ['.js', '.jsx']
   },
   entry: {
      app: ['./client'],
   },
   module: {
      rules:[{
         test: /\.jsx?/,
         loader: 'babel-loader',
         options:{
            presets:[
               ['@babel/preset-env',{
                  targets: {
                     browsers: ['> 5% in KR', 'last 2 chrome versions'], //browserslist
                  },
               }], 
               '@babel/preset-react'
            ],
            plugins:['@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-class-properties',
            'react-refresh/babel'],
         },
      }],
   },
   // plugins: [
   //    new RefreshWebpackPlugin(),
   // ],
   output:{
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
      // publicPath: '/dist/',
   },
   // devServer: {
   //    contentBase:path.join(__dirname, "dist"),
   //    historyApiFallback: true,
   //    port: 80,
   //    hot: true,
   //    inline: true,
   //    publicPath: '/dist/',
   //    proxy: {
   //       '/api/': {
   //          target: '백엔드주소',
   //          changeOrigin: true,
   //       }
   //    }
   // },
};