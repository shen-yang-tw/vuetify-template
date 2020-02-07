// webpack.config.js
//https://vuetifyjs.com/en/customization/sass-variables#webpack-install
const devMode = process.env.NODE_ENV === 'development'
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
              ...devMode ? [] : [purgecss({
                content: ['./**/*.vue', './**/**/*vue', './**/**/*.js'], //js path must be right or classes in js will be removed by purgecss
                // Include any special characters you're using in this regular expression
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                // defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || [],
              })]
            ],
          },
        },
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
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
              ...devMode ? [] : [purgecss({
                content: ['./**/*.vue', './**/**/*vue', './**/**/*.js'], //js path must be right or classes in js will be removed by purgecss
                // Include any special characters you're using in this regular expression
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                // defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || [],
              })]
            ],
          },
        },
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