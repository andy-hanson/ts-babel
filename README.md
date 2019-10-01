Example project showing how to use babel with TS with pipelines.
Here TypeScript is *just* used for typechecking. Since we need to run a babel pass before the code is ready for TypeScript, it won't work in the editor, just on the command line.

`npm run build` does a normal build (and no type-checking).

`npm run check` does a babel compile that *just* removes pipelines (and optional chaining and throw expressions).

`npm run check-watch` does the same using `--watch` for both babel and TypeScript.

`npm run check-and-build-watch` does both the TS typechecking and full builds using babel.


## How it works

There are two different configurations for babel.

`babel.config.for_typescript.js` is just for removing things that TypeScript can't handle, like pipelines.
That is then compiled to `ts_check/src_from_babel`. Then we run `tsc --project ts_check/tsconfig.json`, which has `"noEmit": true`, so nothing happens but typechecking.

`babel.config.for_web.js` does a normal build and no type-checking.

`npm run check-and-build-watch` will be running three processes in parallel:
* One babel process from `src` to `ts_check/src_from_babel`, translating only syntax TS can't handle.
* One TypeScript process looking at `ts_check/src_from_babel` and reporting type errors when the first process writes changes to it.
* One babel process from `src` to `lib`, doing a full translation.
