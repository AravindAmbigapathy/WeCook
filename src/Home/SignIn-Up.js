import React from 'react'
import Login from '../Login&regi/Login'
import Register from '../Login&regi/Register'
import './signing.css'

function Signing() {
  return (
    <div className='signing'>
        <div className='cook'>
            <span>Cook</span><br/>
            <img src='https://as2.ftcdn.net/v2/jpg/02/54/95/79/1000_F_254957901_80Q6lbAtfGfP7twBf3fzBIrxUVIOCVRB.jpg' height='150px' alt='imagee' /><br/>
            
            <Register name='Chef'/>  <br/>
            
            <Login name='Chef' />
        </div>

        <div className='foody'>
            <span>Foody</span><br/>
            <img src='https://as2.ftcdn.net/v2/jpg/02/54/95/79/1000_F_254957901_80Q6lbAtfGfP7twBf3fzBIrxUVIOCVRB.jpg' height='150px' alt='imagee' /><br/>
            <Register name='Foody'/>  <br/>
            <Login name='Foody' />
        </div>
    </div>
  )
}

export default Signing