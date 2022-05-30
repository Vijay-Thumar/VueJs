const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Change the name mockbin for server request else it refuse the request ans say cross origin rejected
    proxy:
      "http://www.mockbin.org/",
  },
});
