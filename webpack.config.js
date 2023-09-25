const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/',
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
        new HTMLWebpackPlugin({template: './public/index.html'})
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.m?jsx$/,
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