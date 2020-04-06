const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',

  plugins: [
    new Dotenv({
      path: './.env.development'
    })
  ],

  devServer: {
    port: 8080,
    hot: true,
    open: true,
    overlay: true,
    historyApiFallback: true
  },

  devtool: 'eval-source-map'
}
