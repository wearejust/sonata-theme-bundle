const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const ManifestPlugin     = require('webpack-manifest-plugin');
const Path               = require('path');

module.exports = {
    context: Path.join(__dirname, './Resources/public'),
    devtool: "source-map",
    entry: {
        app: [
            './javascript/app.js', './scss/theme.scss'
        ]
    },
    output: {
        path: Path.join(__dirname, './Resources/public/build'),
        publicPath: '/bundles/wearejustsonatatheme/build/',
        filename: '[name].[hash].js'
    },
    resolve: {
        modules: [
            Path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|otf|eot)$/i,
                loader: 'file-loader?hash=sha512&digest=hex&name=[name].[hash].[ext]'
            },
            {
                test: /.js$/,
                loader: 'babel-loader?presets[]=es2015-ie',
                exclude: /node_modules|@wearejust/
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        {
                            loader: 'postcss-loader', options: {
                            sourceMap: true,
                            ctx: {
                                autoprefixer: {
                                    browsers: ['last 4 versions']
                                }
                            }
                        }
                        },
                        { loader: "sass-loader", options: { sourceMap: true } }
                    ],
                }),
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/build/*']),
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true,
        }),
        new ManifestPlugin({
            basePath: 'bundles/wearejustsonatatheme/build/'
        })
    ]
};
