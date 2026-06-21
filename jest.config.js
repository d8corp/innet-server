module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['core-js'],
  coverageDirectory: 'docs/coverage',
  maxWorkers: 1,
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '^.+\\.html$': '<rootDir>/html-transform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!mime|uuid/)',
  ],
}
