const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: `${__dirname}/src/entry.js`,
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/template.html"
        })
    ]
};