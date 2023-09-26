module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['jest'],
    rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
    env: {
        es6: true,
        node: true,
        'jest/globals': true,
    },
};
