# Конфиги eslint и prettier для fastify

[npm](https://www.npmjs.com/package/fastify-linters-config)

_Легко принимать свободу как должное, если никогда её не лишался. (Дик Чейни)_

Редактор кода - VS Code с установленными плагинами ESLint и Prettier.

## Установка

`npm i fastify-linters-config --save-dev`

Установка сторонних зависимостей:

`npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier prettier --save-dev`

В package.json добавить команду в секцию script для запуска npm run lint:

`"lint": "eslint '**/*.{js,ts}'`

## Применение правил

В корневой папке создать файлы: .eslintrc.cjs и prettier.config.cjs.

.eslintrc.cjs:

```
const { eslint } = require("fastify-linters-config");
module.exports = eslint;
```

prettier.config.cjs:

```
const { prettier } = require("fastify-linters-config");
module.exports = prettier;
```
