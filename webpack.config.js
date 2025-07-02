const path = require('path');

module.exports = {
    entry: ['./src/main.js'],
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'public') // Output to 'public' folder
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'production' // Explicitly set mode to avoid the warning
};
