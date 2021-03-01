const path = require('path');
const webpackConfig = require('../webpackStudy/webpack.config');

module.exports = {
   name: 'gugudan-setting',
   mode: 'development', //production
   devtool: 'eval', // hidden-source-map
   resolve:{
      extensions: ['.js','.jsx']
   },
   entry:{
      app: ['./client']
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
                  debug: true,
               }], 
               '@babel/preset-react'
            ],
            plugins:['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-class-properties']
         },
      }],
   },
   output:{
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
   },
}