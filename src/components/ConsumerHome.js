import React, {useState} from 'react'

const ConsumerHome = () => {

    const [basketNum, setBasketNum] = useState(0) //stores number of items in basket

    const handleAddItem = () => {
        setBasketNum(basketNum + 1)
      }


    return(
        <div>
            <h1>Basket</h1>
            <p>Items: {basketNum}</p>
            <form>
                <input type="button" value="Add test item" onClick={handleAddItem}/> {/*just add this button to each item listed in store*/}
            </form>
            <h1>Purchase History</h1>
            {/* consider making table and mapping all store items to table */}
        </div>
    )
}

export default ConsumerHome