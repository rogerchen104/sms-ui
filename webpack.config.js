const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const style = new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true })
var bower_dir = __dirname + '/bower_components';

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
var config = {
    entry: {
        app: ['./src/main.js', './src/config/css.js'],
        vendor: ['jquery', 'metisMenu', 'tether', 'bootstrap', 'bootstrapToolkit', 'vue', 'vuex', 'vue-router']
    },
    resolve: {
        extensions: [".js", ".json", '.vue'],

        alias: {
            '@': resolve('src'),
            'jquery': bower_dir + '/jquery/dist/jquery.min.js',
            'metisMenu': bower_dir + '/metisMenu/dist/metisMenu.js',
            'tether': bower_dir + '/tether/dist/js/tether.min.js',
            'bootstrap': bower_dir + '/bootstrap/dist/js/bootstrap.min.js',
            'bootstrapToolkit': bower_dir + '/responsive-bootstrap-toolkit/dist/bootstrap-toolkit.min.js',
            'jquery-validation': bower_dir + '/jquery-validation/dist/jquery.validate.min.js',
            'vue': bower_dir + '/vue/dist/vue.min.js',
            'vue-router': bower_dir + '/vue-router/dist/vue-router.min.js',
            'vuex': bower_dir + '/vuex/dist/vuex.min.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        noParse: [],
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        useRelativePath: false,
                        publicPath: '../',
                        name: 'asset/font/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        useRelativePath: false,
                        publicPath: './',
                        name: 'asset/img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: style.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    { loader: 'sass-loader' }
                    ]
                })
            },
            {
                test: /\.css$/,

                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                })
            }]
    },
    plugins: [

        new webpack.ProvidePlugin({

            $: 'jquery', jQuery: 'jquery',
            Tether: 'tether', tether: 'tether'
        })
        ,
        new ExtractTextPlugin('css/styles.css'),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] // Specify the common bundle's name.
        })]
}




Object.keys(config.resolve.alias).forEach(key => {
    // console.log( iterable[key] );
    config.module.noParse.push(new RegExp('^' + key + '$'));
});
module.exports = config;
// module.exports = {
//     entry: {
//        build:['./main.js']
//     },
//     output: {
//         path: path.resolve(__dirname, 'output'),
//         filename: 'js/[name].js'
//     },
//     module: {
//         rules: [
//         // {
//         //     test: /\.vue$/,
//         //     use: [{
//         //         loader: 'vue-loader'
//         //     }]
//         // },
//         {
//             test: /\.js$/,
//             use: 'babel-loader'
//         },
//         {
//             test: /\.css$/,
//             use: style.extract({
//                 use: [{
//                     loader: 'css-loader',
//                     options: {
//                         minimize: true
//                     }
//                 }, {
//                     loader: 'postcss-loader'
//                 }]
//             })
//         },
//         {
//             test: /\.scss$/,
//             use: style.extract({
//                 use: [{
//                     loader: 'css-loader',
//                     options: {
//                         minimize: true
//                     }
//                 },
//                 { loader: 'sass-loader' }
//                 ]
//             })
//         }
//         ,
//         {
//             test: /\.(eot|otf|svg|ttf|woff|woff2)(\?\S*)?$/,
//             use: [{
//                 loader: 'file-loader',
//                 options: {
//                     useRelativePath: false,
//                     publicPath: '../',
//                     name: 'output/font/[name].[ext]'
//                 }
//             }]
//         },
//         {
//             test: /\.(png|jpe?g|gif)(\?\S*)?$/,
//             use: [{
//                 loader: 'file-loader',
//                 options: {
//                     useRelativePath: false,
//                     publicPath: './',
//                     name: 'output/img/[name].[ext]'
//                 }
//             }]
//         }
//         ],
//     },
//     resolve: {
//         modules: [path.resolve(__dirname, "src"), "node_modules"],
//         extensions: ['.js', '.css', 'scss']
//     },
//     devServer: {
//         historyApiFallback: false,
//         contentBase: "dist",
//         noInfo: true,
//         open: true,
//         port: 3030,
//         compress: true
//     },
//     devtool: '#eval-source-map'
// }
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             },
//             'APIUrl': JSON.stringify("http://pro.example.com")
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false,
//                 drop_console: true
//             }
//         })
//     ])
// } else {
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'APIUrl': JSON.stringify("http://dev.example.com")
//         })
//     ])
// }