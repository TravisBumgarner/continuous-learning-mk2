const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let apiHost
let publicPath

setupEnv = () => {
    console.log(process.env.NODE_ENV)
    switch (process.env.NODE_ENV) {
        case 'development':
            apiHost = "'http://localhost:8000/'"
            publicPath = '/'
            break
        default:
            apiHost = "'http://localhost:8000/'"
            publicPath = '/static'
    }
    console.log(apiHost)
}
setupEnv()

module.exports = env => {
    return {
        entry: {
            app: './src/index.js'
        },
        output: {
            filename: '[name]-[hash].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components/'),
                containers: path.resolve(__dirname, 'src/containers/'),
                views: path.resolve(__dirname, 'src/views/'),
                theme: path.resolve(__dirname, 'src/theme.js'),
                utilities: path.resolve(__dirname, 'src/utilities/'),
                resources: path.resolve(__dirname, 'src/resources/'),
                constants: path.resolve(__dirname, 'src/constants/')
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        babelrc: true
                    }
                }
            ]
        },
        devServer: {
            contentBase: './dist',
            port: 3001,
            historyApiFallback: true,
            publicPath: '/'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.template.ejs',
                inject: 'body'
            }),
            new webpack.DefinePlugin({ __API__: apiHost })
        ]
    }
}
