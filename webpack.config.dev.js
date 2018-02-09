module.exports = {
  entry: {
      "index":"./src/index.ts" // 入口文件可以多个
  },
  output: {
      filename: "[name].js",  // 这里会自动生成index.js
      publicPath: "/" // 我们这就生成到根目录
  },
  resolve: {
      extensions: [".ts",".js"]    // 自动补全，很重要
  },
  module: {
      loaders: [
          { test: /\.ts$/, loader: "ts-loader" }   // 使用了ts-loader
      ]
  }
};