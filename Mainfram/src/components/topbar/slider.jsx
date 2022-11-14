import React from 'react'
import "./slider.css"

const Slider = () => {
  return (
  
    <div className='hello' > 
      <div class="banner1">
     
        <img className='image' src="https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      
        <div class="text-box text1">
            <h1>DONATE YOUR EYES</h1>
            <span></span>
            <p>LET YOUR EYES BE THE LIGHT IN SOMEONE'S LIFE</p>

        </div>
    </div>
    <div class="banner2">
     
        <img className='image'
            src="https://images.unsplash.com/photo-1590363763899-f0b78a7bb968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
    
        <div class="text-box text2">
            <h1>VISION</h1>
            <span></span>
            <p>MAKE YOUR EYES ALIVE AFTER DEATH</p>

        </div>
    </div>



    <div class="banner3">
    
        <img className='image' src="https://images.pexels.com/photos/289756/pexels-photo-289756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  
         <div class="text-box text3">
        <h1>ENLIGHTEN</h1>
        <span></span>
        <p>ONE EYE DONATION CAN MAKE BLIND PEOPLE SEE</p>

    </div>
    </div>
      
    </div>
  )
}

export default Slider;