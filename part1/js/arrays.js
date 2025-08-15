// const t = [1, -1, 3]
//
// t.push(5)
//
// console.log(t.length)
// console.log(t[1])
//
// t.forEach(value => console.log(value))

// const t = [1, -1, 3]
// const t2 = t.concat(5)
// console.log(t)
// console.log(t2)
//
// const m1 = t.map(value => value * 2)
// console.log(m1)

const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t
console.log(first, second)
console.log(rest)