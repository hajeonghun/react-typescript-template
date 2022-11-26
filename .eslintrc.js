module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: { browser: true, es6: true, node: true },
	extends: [
		'eslint:recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	},
};
