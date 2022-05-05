import React, {useState} from 'react'

const CounterHome = () => {

    const [idNum, setIdNum] = useState('')

    const handleIdChange = (event) => {
        setIdNum(event.target.value)
    }

    const handleSubmit = () => {
        //maybe code to submit id num and then pull up customers cart to checkout
    }

    return(
        <form>
            <input type="text" value={idNm} onChange={handleIdChange} />
            <input type="submit" onSubmit={handleSubmit} />
        </form>
    )
}