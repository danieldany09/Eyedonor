import React from 'react'
import "./Eyebanks.css";
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const Eyebanks = ({ item }) => {
    return (
        <main>
           <div className="card" style={{"width": "18rem"}}>
            <div className="card-img-top">
            <img className="" src={item.img} alt="Card image cap"/>

            </div>
  <div className="card-body">
    <h5 className="card-title"> {item.BusinessName}</h5>
    <p className="card-text">{item.BusinessGenre}</p>
  </div>
  <ul className="list-group list-group-flush">
  <div class="hotel-location-wrapper">
       <div className='icon'><a href={item.address}><i class="fa-solid fa-location-dot"></i></a> </div>
        <div class="hotel-location-distance">{item.BusinessAddress}</div>
    </div>
   
    <div class="hotel-location-wrapper">
       <div className='icon'><a href=''><i class="fa-solid fa-phone"></i></a> </div>
        <div class="hotel-location-distance">{item.BusinessPhoneNumber}</div>
    </div>


    
  </ul>
  <div className="card-body more" >
  <button  type="button" className="btn info"><a href={item.more} className="card-link" style={{color:"white",textDecoration:"none"}}>More Information</a></button>
    
  </div>
</div>
        </main>


    )
}

export default Eyebanks