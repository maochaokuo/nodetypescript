# use TypeScript in Node.js example#1

steps
1. npm init -y
2. npm i typescript --save-dev
3. npm i @types/node --save-dev
4. node node_modules/typescript/lib/tsc --init
5. src/common.ts
6. src/animal.ts
7. tsconfig.json:  "rootDir": "./src"   "outDir": "./lib"
8. package.json:    "build": "tsc"
9. npm run-script build
10. node lib/main       run to test

in VsCode:
type <type-name>    will extract to import statement

reference source code
https://github.com/JeremyLikness/typescript-for-node/tree/master/TypeScriptProject
