module.exports = function (wallaby) {

  // change this expression to reflect your naming conventions
  const testPathExp = 'src/**/*.test.js?(x)';

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      `!${testPathExp}`,
    ],

    tests: [testPathExp],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['react-app'],
      })
    },

    testFramework: 'jest',
  };
}
