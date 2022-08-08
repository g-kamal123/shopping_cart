import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav>
        <Link className='site-name' to='/'>Mantra</Link>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/cart'>Cart<span className='len'>{props.cartLength.length}</span></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header