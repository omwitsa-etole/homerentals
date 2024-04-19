const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Match SCSS files
        use: [
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import './properties.json';`,
            },
          },
        ],
      },
    ],
  },
};
