import React from 'react'
import Print from './Print'
import products from './Data'

function Home(props) {
    const addToCart =(val)=>{
        props.addedToCart(val)
    }
  return (
    <>
    <div className='imgHome'>
            <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_370_my_mini_bank_01032022.jpg'alt=''/>
    </div>
    <div className='home'>
        {
            products.map((item)=>
            <Print items={item}
            addToCartData={addToCart}/>)
        }
        
    </div>
    </>
  )
}

export default Home