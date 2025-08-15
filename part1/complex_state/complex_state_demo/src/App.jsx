import {useState} from 'react'

// const App = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//
//     return (
//         <div>
//             {left}
//             <button onClick={() => setLeft(left + 1)}>
//                 {left}
//             </button>
//
//             <button onClick={() => setRight(right + 1)}>
//                 {right}
//             </button>
//             {right}
//         </div>
//     )
// }

// const App = () => {
//     const [clicks, setClicks] = useState({
//         left: 0,
//         right: 0
//     })
//
//     const handleLeftClick = () => {
//         const newClicks = {
//             ...clicks,
//             left: clicks.left + 1
//         }
//         setClicks(newClicks)
//     }
//
//     const handleRightClick = () => {
//         const newClicks = {
//             ...clicks,
//             right: clicks.right + 1
//         }
//         setClicks(newClicks)
//     }
//
//     return (
//         <div>
//             {clicks.left}
//             <button onClick={handleLeftClick}>left</button>
//             <button onClick={handleRightClick}>right</button>
//             {clicks.right}
//         </div>
//     )
// }

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(left + updatedRight)
    }

    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text='left'/>
            <Button onClick={handleRightClick} text='right'/>
            {right}
            <History allClicks={allClicks}/>
            <p>total {total}</p>
        </div>
    )
}

export default App
