module.exports = {
  testRegex: '/.*\spec.(ts|tsx)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      enableTsDiagnostics: true
    }
  }
};
