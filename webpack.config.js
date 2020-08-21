module.exports = {
  mode: 'development',
  node: {
    fs: 'empty',
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /_wasm\.js$/,
        loader: 'exports-loader',
        options: {
          type: 'commonjs',
          exports: 'single Module',
        },
      },
      {
        test: /cfdjs_wasm_jsonapi\.js/,
        loader: 'exports-loader',
        options: {
          type: 'commonjs',
          exports: ['callJsonApi', 'ccallCfd', 'CfdError'],
        },
      },
      // wasm files should not be processed but just be emitted and we want
      // to have their public URL.
      {
        test: /\.(wasm)$/i,
        type: 'javascript/auto',
        loader: 'file-loader',
        options: {
          name(file) {
            return '[name].[ext]';
          },
        },
      },
    ],
  },
};
