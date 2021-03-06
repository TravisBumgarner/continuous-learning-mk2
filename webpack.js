const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let apiHost
let publicPath

setupEnv = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            apiHost = "'http://localhost:5000/'"
            publicPath = '/'
            break
        case 'production':
        default:
            apiHost = "'letspair.online/'"
            publicPath = '/static'
    }
}
setupEnv()

module.exports = env => {
    return {
        entry: {
            app: './src/frontend/index.js'
        },
        output: {
            filename: '[name]-[hash].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath
        },
        resolve: {
            alias: {
                sharedComponents: path.resolve(__dirname, 'src/frontend/sharedComponents/'),
                containers: path.resolve(__dirname, 'src/frontend/containers/'),
                views: path.resolve(__dirname, 'src/frontend/views/'),
                theme: path.resolve(__dirname, 'src/frontend/theme.js'),
                utilities: path.resolve(__dirname, 'src/frontend/utilities/'),
                resources: path.resolve(__dirname, 'src/frontend/resources/'),
                constants: path.resolve(__dirname, 'src/frontend/constants/')
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
            port: 3000,
            historyApiFallback: true,
            publicPath: '/'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/frontend/index.template.ejs',
                inject: 'body'
            }),
            new webpack.DefinePlugin({ __API__: apiHost })
        ]
    }
}
