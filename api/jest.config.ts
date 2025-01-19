import { Config } from 'jest'

const config: Config = {
  testTimeout: 15000,
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  workerIdleMemoryLimit: '524MB',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-results', outputName: 'jest-junit.xml' }],
  ],
}

export default config
