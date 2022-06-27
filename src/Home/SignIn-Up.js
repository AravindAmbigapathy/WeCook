import React from 'react'
import Register from '../Login&regi/Register'
import './signing.css'

function Signing() {
  return (
    <div className='signing'>
        <div className='cook'>
            <span>Cook</span><br/>
            <img src='https://as2.ftcdn.net/v2/jpg/02/54/95/79/1000_F_254957901_80Q6lbAtfGfP7twBf3fzBIrxUVIOCVRB.jpg' height='150px' alt='imagee' /><br/>
            
            <Register name='Cook'/>  <br/>
            
            <button className='login'>Login as Cook</button>
        </div>

        <div className='foody'>
            <span>Foody</span><br/>
            <img src='https://as2.ftcdn.net/v2/jpg/02/54/95/79/1000_F_254957901_80Q6lbAtfGfP7twBf3fzBIrxUVIOCVRB.jpg' height='150px' alt='imagee' /><br/>
            <Register name='Foody'/>  <br/>
            <button className='login'>Login as Foody</button>
        </div>
    </div>
  )
}

export default Signing