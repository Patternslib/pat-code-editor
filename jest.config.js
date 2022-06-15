const defaults = require("@patternslib/dev/jest.config.js");
defaults.transformIgnorePatterns = [
    "/node_modules/(?!.*(patternslib|codejar)/*).+\\.[t|j]sx?$",
];

module.exports = defaults;
