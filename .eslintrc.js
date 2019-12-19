module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    'plugins': [
        'react',
        'import',
    ],
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module',
        'ecmaFeatures': {
            'arrowFunctions': true,
            'experimentalObjectRestSpread': true
        }
    },
    'settings': {
        'import/resolver': {
            'node': {
                'paths': [
                    'src'
                ]
            }
        },
        'react': {
            'createClass': 'createClass',
            'pragma': 'React',
            'version': '16.2'
        }
    },
    'globals': {
        'ApiError': true,
        'ConfigurationError': true,
        'TimeoutError': true,
        '_error': true,
        'devLog': true,
        '__DEV__': false,
        'Promise': true,
        'PKG_VERSION': true,
        'APP_VERSION': true,
        'BUGSNAG_KEY': true,
    },
    'rules': {

        'import/no-unresolved': 'off',
        'import/no-named-as-default-member': 'off',

        'no-empty': 'off',
        'no-control-regex': 'off',
        'no-irregular-whitespace': 'off',

        /* Keep Off? */
        'no-console': 'off',
        'no-useless-escape': 'off',
        'no-empty-pattern': 'off',
        'no-prototype-builtins': 'off',


        /* React */
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-array-index-key': 'warn',


        /* Import/Export */
        'import/first': 'error',
        'no-duplicate-imports': 'error',


        /* Spacing */
        'linebreak-style': ['error', 'unix'],
        'arrow-spacing': 'error',
        'space-before-blocks': 'error',
        'block-spacing': 'error',
        'func-call-spacing': ['error', 'never'],
        'spaced-comment': ['error', 'always'],
        'key-spacing': ['error', {
            'afterColon': true,
            'mode': 'strict'
        }],
        'keyword-spacing': ['error', {
            'after': true
        }],
        'array-bracket-spacing': ['error', 'always', {
            'objectsInArrays': false
        }],
        'object-curly-spacing': ['error', 'always'],
        'template-curly-spacing': ['error', 'never'],
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'no-whitespace-before-property': 'error',
        'newline-per-chained-call': ['error', {
            'ignoreChainWithDepth': 2
        }],
        'padded-blocks': ['error', 'never'],
        'no-multiple-empty-lines': 'error',
        'indent': ['warn', 2, {
            'SwitchCase': 1
        }],
        'max-len': ['error', {
            'code': 150,
            'tabWidth': 2,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
        }],


        /* Commas */
        'semi': ['error', 'always'],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['warn', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'never',
            'functions': 'ignore'
        }],


        /* Variables */
        'no-var': 'error',
        'prefer-const': 'error',
        'one-var': ['error', 'never'],
        'no-unused-vars': ['warn',
            {
                'ignoreModules': true,
                'argsIgnorePattern': '^(next|connection|pool|error)'
            }
        ],
        'no-case-declarations': 'error',
        'no-new-wrappers': 'error',


        /* Naming */
        'id-length': ['error', {
            'min': 3,
            'exceptions': [ 'x', 'i', 'o', 'n', 'e', 'L', '_', 'LS', 'id', 'fs']
        }],


        /* Function Specific */
        'no-param-reassign': 'error',
        'prefer-arrow-callback': 'error',
        'implicit-arrow-linebreak': ['error', 'beside'],
        'function-paren-newline': 'off',


        /* Objects/Arrays */
        'object-shorthand': 'error',
        'prefer-spread': 'error',
        'prefer-destructuring': ['error', {
            'array': true,
            'object': true
        }, {
            'enforceForRenamedProperties': false
        }],


        /* Strings */
        'prefer-template': 'error',
        'quotes': ['warn', 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],


        /* Conditional Logic */
        'no-else-return': 'error',
        'eqeqeq': ['error', 'smart'],
        'no-nested-ternary': 'error',


        /* fake last rule so we can move things around without worrying about the last trailing comma :) */
        'useless-filler-thingy': 'off'

    }
};
