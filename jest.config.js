module.exports = {
    rootDir: "./src",
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
    transformIgnorePatterns: [
        "/node_modules/(?!.*(patternslib|codejar)/*).+\\.[t|j]sx?$",
    ],
};
