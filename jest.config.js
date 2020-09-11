module.exports = {
  moduleNameMapper: {
    "^core/(.*)": "<rootDir>/src/core/$1",
    "^config/(.*)": "<rootDir>/src/config/$1",
    "^helpers/(.*)": "<rootDir>/src/helpers/$1",
    "^package.json$": "<rootDir>/package.json",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/templates/",
  ],
};
