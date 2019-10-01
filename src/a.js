// @flow

// Try making the type signature (or implementation) wrong -- `npm run check` will complain
export function f(x: number): number {
	return x |> # + 1
}

console.log(`1 + 1 is ${f(1)}`)
