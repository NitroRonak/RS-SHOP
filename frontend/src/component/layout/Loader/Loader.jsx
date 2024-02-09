import React from 'react'
import './Loader.css'
function Loader() {
  return (
    <div className='load'>
        <div className='loaderContainer'>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <h5>Loading...</h5>
        </div>
    </div>
  )
}
export default Loader
