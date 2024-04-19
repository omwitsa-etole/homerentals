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
              properties: `@import './src/properties.json';`,
            },
          },
		  {
			  loader: 'babel-loader', // Use babel-loader for transpiling JSX
			  options: {
				presets: ['@babel/preset-env', '@babel/preset-react'], // Specify presets for Babel
			  },
		  },
        ],
      },
    ],
  },
};
