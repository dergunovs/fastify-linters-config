export default {
  env: { 'shared-node-browser': true, es2022: true },

  ignorePatterns: ['build', 'public', 'node-modules', 'package-lock.json'],

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  plugins: ['import', '@typescript-eslint', 'prettier'],

  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.ts', '.mjs', '.d.ts'] },
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },

  overrides: [
    {
      files: ['*.ts', '*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { impliedStrict: true },
      },
    },
  ],

  globals: {
    NodeJS: true,
  },

  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    complexity: ['error', 12],
    curly: ['error', 'multi-line'],
    'default-param-last': 'error',
    'func-name-matching': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression', 'CallExpression', 'ObjectExpression'],
      },
    ],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 4],
    'max-statements-per-line': ['error', { max: 1 }],
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'no-array-constructor': 'error',
    'no-case-declarations': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'error',
    'no-constant-binary-expression': 'error',
    'no-debugger': 'error',
    'no-div-regex': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    semi: 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    yoda: ['error', 'never', { onlyEquality: true }],

    'import/default': 'off',
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-cycle': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-default': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-relative-packages': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': ['error', { allow: ['**/*.scss', '**/*.css'] }],
    'import/no-unresolved': 'off',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
      },
      { selector: 'function', format: ['camelCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
    ],

    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowAliases: 'in-unions-and-intersections',
        allowGenerics: 'always',
        allowConditionalTypes: 'always',
      },
    ],
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignorePattern: '<rect|path|ellipse([\\s\\S]*?)/>',
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],

    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
