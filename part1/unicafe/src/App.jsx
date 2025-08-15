import {useState} from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const {good, neutral, bad} = props

    if (good + neutral + bad === 0) {
        return (
            <div>
                <h2>statistics</h2>
                <div>No feedback given</div>
            </div>
        )
    }

    return (
        <div>
            <h2>statistics</h2>
            <table>
                <tbody>
                <StatisticLine text='good' value={good}></StatisticLine>
                <StatisticLine text='neutral' value={neutral}></StatisticLine>
                <StatisticLine text='bad' value={bad}></StatisticLine>
                <StatisticLine text='all' value={good + neutral + bad}></StatisticLine>
                <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)}></StatisticLine>
                <StatisticLine text='positive' value={(good * 100) / (good + neutral + bad) + ' %'}></StatisticLine>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGood} text='good'></Button>
            <Button onClick={handleNeutral} text='neutral'></Button>
            <Button onClick={handleBad} text='bad'></Button>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
