var pathResolver = require('./path-resolver');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                exclude: ['node_modules']
            },
            {
                test: /\.(html|css)$/,
                include: pathResolver.fullPath('src', 'app'),
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                exclude: pathResolver.fullPath('src', 'app'),
                loader: 'null-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            }
        ]
    }
};