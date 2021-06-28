import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import fs from 'fs'
import path from 'path'

const pagesPath = path.resolve(__dirname, 'pages')
const pages = fs.readdirSync(pagesPath).map(filename => {
  return path.basename(filename, '.html')
})

const config: Configuration = {
  entry: Object.fromEntries(pages.map(basename => [basename, `./src/${basename}.ts`])),
  plugins: pages.map(basename => {
    return new HtmlWebpackPlugin({
      inject: true,
      template: `./pages/${basename}.html`,
      filename: `${basename}.html`,
      chunks: [basename],
    })
  }),
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  }
};

export default config
