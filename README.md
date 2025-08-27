# Конфиги eslint и prettier для fastify

[npm](https://www.npmjs.com/package/fastify-linters-config)

_Легко принимать свободу как должное, если никогда её не лишался. (Дик Чейни)_

Редактор кода - VS Code с установленными плагинами ESLint и Prettier.

## Установка

`npm i fastify-linters-config --save-dev`

Установка сторонних зависимостей:

`npm i @eslint/js eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import-x eslint-plugin-prettier eslint-plugin-sonarjs eslint-plugin-unicorn globals typescript-eslint --save-dev`

В package.json добавить команду в секцию script для запуска npm run lint:

`"lint": "eslint **/*.{js,ts}"`

## Применение правил

В корневой папке создать файлы: eslint.config.js и prettier.config.js.

eslint.config.js:

```
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginSonar from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import { options, ignores, settings, rules } from 'fastify-linters-config';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginSonar.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  ignores,
  { ...options(globals), ...settings, ...rules },

  eslintPluginPrettierRecommended
);

```

prettier.config.js:

```
export { prettier as default } from 'vue-linters-config';

```
