
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/app.tsx',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html'
        }),
    ],
    output: {
        path: __dirname + '/public',
        filename: 'build/[name].[contenthash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    module: {

        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.css$/i,
                use: [
                    {loader: 'css-loader', options:{url: false}}
                ]
            },
        ]
    },
    devServer: {
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000'
        },
      },
    },
}

