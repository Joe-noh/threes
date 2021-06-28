import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import fs from 'fs'
import path from 'path'

const pages = fs.readdirSync(path.resolve(__dirname, 'pages')).map(filename => {
  return path.basename(filename, '.ts')
})

const config: Configuration = {
  entry: Object.fromEntries(pages.map(basename => [basename, `./pages/${basename}.ts`])),
  plugins: pages.map(basename => {
    return new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
      filename: `${basename}.html`,
      chunks: [basename],
      title: 'Threes',
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      }
    })
  }),
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/models/' }
          }
        ]
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
