/**
 * Setup Notes:
 * setupTestFrameworkScriptFile: Using enzyme with Jest however key will be updated to setupFilesAfterEnv in future versions of jest (i.e 24.x) (https://github.com/airbnb/enzyme/blob/master/docs/guides/jest.md)
 * snapshotSerializers: plugin to convert Enzyme wrapper to compatible with jest (https://www.npmjs.com/package/enzyme-to-json)
 * moduleNameMapper: Using ES6 Proxy to mock CSS Module (https://jestjs.io/docs/en/webpack)
 */


module.exports = {
  verbose: false,
  modulePathIgnorePatterns: [
    'npm-cache',
    '.npm',
    '.cache',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/.jest/setupTests.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom-global',
  testPathIgnorePatterns: [
    '/lib/',
    '/node_modules',
  ],
};
