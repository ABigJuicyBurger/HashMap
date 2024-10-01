const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/hash.js",
  output: {
    filename: "hashMapProject.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
