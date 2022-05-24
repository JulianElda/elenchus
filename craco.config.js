const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@const': path.resolve(__dirname, 'src/components/const'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^\@api\/(.*)$": "<rootDir>/src/api/$1",
        "^\@common\/(.*)$": "<rootDir>/src/components/common/$1",
        "^\@const\/(.*)$": "<rootDir>/src/components/const/$1",
      },
      rootDir: "./",
      testMatch: ["./**/?(*.)+(spec|test).[jt]s?(x)"],
      setupFilesAfterEnv: "<rootDir>/src/setupTests.ts"
    }
  },
};