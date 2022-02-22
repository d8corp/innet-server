module.exports = {
  preset: 'innet-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['core-js'],
  testPathIgnorePatterns: ['.*\.speed\.test\.ts$'],
  coverageDirectory: 'docs/coverage',
}
