const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: `${__dirname}/src/entry.js`,
    module: {
        rules: [
            {
                test: path.resolve(__dirname, "src/calculator.js"),
                use: [
                    // Export the Desmos global var
                    "exports-loader?window.Desmos",
                    // Set module.exports=undefined to work around Webpack chomping 'define'
                    // https://github.com/webpack/webpack/issues/386
                    // Set this=>window to fake closure context as window
                    // Make jQuery available "globally" for both Desmos & MathQuill
                    "imports-loader?undefined=>module.exports=undefined,this=>window,jQuery=jquery,window.jQuery=jquery"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/template.html"
        })
    ]
};