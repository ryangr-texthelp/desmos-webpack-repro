const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

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
                    "exports-loader?Desmos",
                    // Set module.exports=undefined and exports=undefined because Desmos has
                    // dependencies that use UMD preludes that get confused when they are present.
                    // Set the Desmos variable to an empty object, which will be used as the module export
                    "imports-loader?undefined=>module.exports=undefined,exports=>undefined,Desmos=>{}"
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