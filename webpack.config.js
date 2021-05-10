const path = require('path');
          
module.exports = {
  // usually reuse the same config file with little tweaks between projects
  entry: "./frontend/splitvilla.jsx",
  output: {
    // path requires an absolute path. we require the node library path to help with this
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  devtool: 'source-map', // so you can see the original files when debugging
  resolve: {
    extensions: ['.js', ".jsx", '*']
  },
  module: {
    rules: [
      {
        test: /.\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'] // which presets to run
          }
        },
      }
    ]
  }
}
