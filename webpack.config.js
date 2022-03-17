const path = require('path')

//module.exports是commonjs语法
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [],
  mode: 'development'
}
