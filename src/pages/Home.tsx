import React, {useState} from 'react'

interface HeaderProps {
    buttonText: String;
}

const Home = ({ buttonText }: HeaderProps) => {
    
    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={increament}>{buttonText}</button>
            <p>{count}</p>
        </div>
    )
}

export default Home
