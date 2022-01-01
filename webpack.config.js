const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Assets: path.resolve(__dirname, "./src/assets"),
            Components: path.resolve(__dirname, "./src/components"),
            Pages: path.resolve(__dirname, "./src/pages"),
            Routes: path.resolve(__dirname, "./src/routes"),
            Utilities: path.resolve(__dirname, "./src/utilities"),
            Styles: path.resolve(__dirname, "./src/styles")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html&/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|svg|png|jpeg|webp|gif)$/,
                type: "asset"
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "video"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        allowedHosts: path.dirname(__dirname, "dist"),
        port: 8080,
        compress: true,
        historyApiFallback: true
    }
}
