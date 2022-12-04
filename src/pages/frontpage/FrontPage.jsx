import React from 'react'
import './frontpage.css'
import FrontPageNav from './FrontPageNav'




const FrontPage = () => {
  return (
    <>
      <FrontPageNav />
      <div className="container">
        {/* <img src="https://idlfoundation.org/wp-content/uploads/2022/04/Eye-Donation-Blog.png" alt="Snow" style={{margin:"100%",}}/> */}

        <div className="container1">
          <div className="row">
            <span className="centered">VISION MATE</span>
            <span className="text2">DONATE</span>

          </div>
        </div>

      </div></>
  )
}

export default FrontPage