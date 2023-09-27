const path = require('path');
require('dotenv').config();
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.jsx')],
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[fullhash].js',
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        }
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({template: './public/index.html'}),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [['@babel/preset-react', {'runtime': 'automatic'}], '@babel/preset-env']
                  }
                }
            }
        ]
    }
}