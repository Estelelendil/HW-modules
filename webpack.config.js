const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
}