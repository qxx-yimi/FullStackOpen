// const App = () => {
//     const now = new Date()
//     const a = 10
//     const b = 10
//     console.log(now, a + b)
//     return (
//         <div>
//             <p>Hello world, it is {now.toString()}</p>
//             <p>
//                 {a} plus {b} is {a + b}
//             </p>
//         </div>
//     )
// }

// const Hello = () => {
//     return (
//         <div>
//             <p>Hello, world</p>
//         </div>
//     )
// }
//
// const App = () => {
//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello />
//             <Hello />
//             <Hello />
//         </div>
//     )
// }

// const Hello = (props) => {
//     return (
//         <div>
//             <p>Hello {props.name}</p>
//         </div>
//     )
// }
//
// const App = () => {
//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name='George'/>
//             <Hello name='Daisy'/>
//         </div>
//     )
// }

// const Hello = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <p>
//                 Hello {props.name}, you are {props.age} years old
//             </p>
//         </div>
//     )
// }
//
// const App = () => {
//     const name = 'Peter'
//     const age = 10
//
//     return (
//         <>
//             <h1>Greetings</h1>
//             <Hello name='Maya' age={26 + 10}/>
//             <Hello name={name} age={age}/>
//         </>
//     )
// }

const App = () => {
    const friends = [
        {name: 'Peter', age: 4},
        {name: 'Maya', age: 10},
    ]

    return (
        <div>
            <p>{friends[0].name} {friends[0].age}</p>
            <p>{friends[1].name} {friends[1].age}</p>
        </div>
    )
}
export default App
