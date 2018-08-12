const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
    // vendors: ["vue"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "chunks/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader"
            //options: { presets: ["es2015"], plugins: ["transform-vue-jsx"] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(styl|stylus)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: path.resolve(__dirname)
              }
            }
          },
          "stylus-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: "url-loader",
          options: {
            limit: "1000"
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: "8192"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
    //  new HotModuleReplacementPlugin()
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendors: {
          // test: /[\\/]node_modules[\\/]/,
          test: (module, chunks) => {
            let chunkName = "";
            chunks.forEach(chunk => {
              chunkName += chunk.name + ",";
            });
            console.log(module.context, chunkName, chunks.length);
            return /node_modules/.test(module.context);
          },
          priority: -10
        }
      }
    }
  },
  devServer: {
    port: "8080",
    host: "0.0.0.0",
    hot: true,
    overlay: {
      errors: true
    }
  }
};
