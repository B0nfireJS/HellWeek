const paths = require('../paths');
const fs = require('fs');

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');

const { js, build, scss, assets, fonts, pugPages } = paths;

const imagesLoadersOptions = [
  {
    loader: 'url-loader',
    options: {
      limit: 1000, // in bytes,
      name(url) {
        const newName = url.replace(`${assets}\\`, '');
        const regex = new RegExp(/\\/g);

        return newName.replace(regex, '/');
      },
      publicPath: assets,
      outputPath: 'assets',
    },
  },
  {
    loader: 'webpack-image-resize-loader',
    options: {
      width: 1920,
    },
  },
];

const pagesOfPug = fs.readdirSync(pugPages);
const templates = [];
pagesOfPug.forEach(page => {
  const isPugFile = page.indexOf('.pug') !== -1
  const baseName = page.replace('.pug', '');

  templates.push(
    new HtmlWebpackPlugin({
      template: !isPugFile ? `${pugPages}/${page}/${fs.readdirSync(`${pugPages}/${page}`)}` : `${pugPages}/${page}`,
      filename: page.indexOf('.pug') !== -1 && !!baseName ? `${baseName}.html` : `${page}/${baseName}.html`,
      chunks: [baseName],
    }),
    new BeautifyHtmlWebpackPlugin(),
  );
});


const conf = {
  stats: {
    errorDetails: true,
    children: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    },
  },
  /* Чанки назвать так же как и входной файл .pug,
   * в противном случае css и js не подтянутся автоматом */
  entry: {
    main: [
      `${js}/pages/index.js`,
      `${scss}/pages/index.scss`,
    ],
    components: [
      `${js}/pages/components.js`,
    ],
  }, 
  output: {
    path: build,
    filename: "[name].js",
    chunkFilename:'[name].js',
    publicPath: '/',
    clean: true,
    crossOriginLoading: 'anonymous',
  },
  resolve: {
    alias: {
      '@assets': assets,
      '@components': path.resolve(__dirname, '../../src/js//'),
      '@utils': path.resolve(__dirname, '../../src/js/utils/'),
    },
    extensions: ['.js', '.json'],
  },

  module: {
    rules: [
      /* Pug */
      {
        test: /\.pug/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              // self: true,
              pretty: true,
            },
          },
        ],
      },
      /* images */
      {
        test: /\.(png|jpe?g|webp|gif?)$/i,
        use: imagesLoadersOptions,
      },
      /* fonts */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // меняет слешы на линуксовские
              name(url) {
                const newName = url.replace(`${fonts}\\`, '');
                const regex = new RegExp(/\\/g);

                return newName.replace(regex, '/');
              },
              publicPath: fonts,
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    ...templates,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: assets,
          to: 'assets',
        },
        {
          from: fonts,
          to: 'fonts',
        },
      ],
    }),
  ],
};

module.exports = conf;
