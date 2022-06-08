const defaults = require("@patternslib/patternslib/jest.config.js");
defaults.transformIgnorePatterns = [
    "/node_modules/(?!.*(patternslib|codejar)/*).+\\.[t|j]sx?$",
];

module.exports = defaults;
