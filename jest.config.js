module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/.jest/setup-test.js"],
    moduleNameMapper: {
        "\\.(css|scss|sass)$": "jest-css-modules-transform",
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
      },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
  };