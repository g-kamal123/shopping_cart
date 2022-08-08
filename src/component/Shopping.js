import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
// import products from './Data'

function Shopping() {
  const [cart,setCart] = useState([])
  const [cartlength,setLength]= useState(0)
  // debugger;
  const sendToCart =(val)=>{
    let arr =[...cart]
    let len=arr.length;
    let get = arr.filter(item=>{
      return item.name===val.name
    })
    if(get.length===0){
    setCart(prevCart => [...prevCart,val])
    len = [...cart,val].length
    }
    setLength(len)
    // console.log(cart)
  }
  const emptiedCart =()=>{
    // let arr =[]
    // alert('emptied')
    setCart([])
    setLength(0)
  }
  const deleteCartItemHandler =(val)=>{
    setCart(cart.filter((item)=>item!==val))
  }
  console.log(cartlength)
  return (
    <div>
        <Header cartLength={cart}/>
        <Routes>
            <Route path='/' element={<Home 
            addedToCart={sendToCart}/>}/>
            <Route path='/cart' element={<Cart 
            cartdata={cart}
            empty={emptiedCart}
            deleteCartItem={deleteCartItemHandler}/>}
            />
        </Routes>
        <Footer />
    </div>
  )
}

export default Shopping
