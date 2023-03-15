module.exports = {
  modulePaths: ["/shared/vendor/modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: ["./test/setup.ts"],
};
