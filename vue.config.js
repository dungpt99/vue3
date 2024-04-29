const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue3.git" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
