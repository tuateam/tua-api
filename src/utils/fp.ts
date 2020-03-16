import * as R from 'remeda'

const map = <T, R>(fn: (a: T) => R) => (arr: T[] | { [k: string]: T }) => {
    if (Array.isArray(arr)) return R.map(arr, fn)

    return R.pipe(
        arr,
        Object.keys,
        R.map(key => ({ [key]: fn(arr[key]) })),
        R.mergeAll,
    ) as { [k: string]: R }
}

// const a = map((x: number) => x + 1)({ a: 1, b: 2 })
// const b = map((x: number) => x + 1)([1, 2])

const join = (str: string) => (arr: string[]) => arr.join(str)
const values = <T>(obj: { [k: string]: T }) => R.pipe(
    obj,
    Object.keys,
    R.map((k: string) => obj[k]),
)

export {
    map,
    join,
    values,
}