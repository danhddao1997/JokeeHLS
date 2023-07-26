module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetupFile.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
