import React from 'react'
import './frontpage.css'
import FrontPageNav from './FrontPageNav'




const FrontPage = () => {
  return (
    <>
      <FrontPageNav />
      <div className="container">
        {/* <img src="https://idlfoundation.org/wp-content/uploads/2022/04/Eye-Donation-Blog.png" alt="Snow" style={{margin:"100%",}}/> */}

        <div class="container1">
          <div class="row">
            <span class="centered">VISION MATE</span>
            <span class="text2">DONATE</span>

          </div>
        </div>

      </div></>
  )
}

export default FrontPage