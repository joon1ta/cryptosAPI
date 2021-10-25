import React, {useState} from 'react'

function Search({filter}) {

const [input, setInput] = useState('')

const handleSubmit = (e) => {
 e.preventDefault()
    filter(input)

    setInput('')
}

const handleChange = (e) => {
    setInput(e.target.value)
}



    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={input} type="text" placeholder="Search coin"/>
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search
