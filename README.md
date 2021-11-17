# todo-app
vue study 🐤
# sass-loader 설치 시 주의할 점
<code>npm i -D sass-loader@10</code>
# .gitignore
<code><h2>기본 디렉터리 혹은 파일</h2>
.DS_Store
node_modules
/dist
<h2>- 로컬 환경변수 파일</h2>
.env.local
.env.*.local
<h2>- 로그 파일</h2>
npm-debug.log*
yarn-debug.log*
yarn-error.log*
<h2>- 에디터 디렉터리 혹은 파일들</h2>
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?</code>
# low db 오류 😭
<code>
Compiled with problems:X

WARNING in ./components/TodoApp.vue?vue&type=script&lang=js& (./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/TodoApp.vue?vue&type=script&lang=js&) 28:16-21

export 'default' (imported as 'lowdb') was not found in 'lowdb' (possible exports: JSONFile, JSONFileSync, LocalStorage, Low, LowSync, Memory, MemorySync, TextFile, TextFileSync)


ERROR in ./components/TodoApp.vue?vue&type=script&lang=js& (./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/TodoApp.vue?vue&type=script&lang=js&) 9:0-55

Module not found: Error: Package path ./adapters/LocalStorage is not exported from package /Users/star/Desktop/todo-app/node_modules/lowdb (see exports field in /Users/star/Desktop/todo-app/node_modules/lowdb/package.json)


ERROR in ./node_modules/lowdb/lib/adapters/TextFile.js 13:0-20

Module not found: Error: Can't resolve 'fs' in '/Users/star/Desktop/todo-app/node_modules/lowdb/lib/adapters'


ERROR in ./node_modules/lowdb/lib/adapters/TextFileSync.js 13:0-20

Module not found: Error: Can't resolve 'fs' in '/Users/star/Desktop/todo-app/node_modules/lowdb/lib/adapters'


ERROR in ./node_modules/lowdb/lib/adapters/TextFileSync.js 14:0-24

Module not found: Error: Can't resolve 'path' in '/Users/star/Desktop/todo-app/node_modules/lowdb/lib/adapters'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
	- add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
	- install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
	resolve.fallback: { "path": false }


ERROR in ./node_modules/steno/lib/index.js 13:0-20

Module not found: Error: Can't resolve 'fs' in '/Users/star/Desktop/todo-app/node_modules/steno/lib'


ERROR in ./node_modules/steno/lib/index.js 14:0-24

Module not found: Error: Can't resolve 'path' in '/Users/star/Desktop/todo-app/node_modules/steno/lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
	- add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
	- install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
	resolve.fallback: { "path": false }
</code>
