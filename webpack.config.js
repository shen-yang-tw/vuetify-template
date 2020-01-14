// webpack.config.js
//https://vuetifyjs.com/en/customization/sass-variables#webpack-install

module.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
            // This is the path to your variables
            prependData: "@import '@/src/scss/variables.scss'"
          },
        },
      ],
    },
    // SCSS has different line endings than SASS
    // and needs a semicolon after the import.
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^8.0.0
          options: {
            // This is the path to your variables
            prependData: "@import '@/src/scss/variables.scss';"
          },
        },
      ],
    },
  ],
}