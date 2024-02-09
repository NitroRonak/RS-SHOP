import { Rating } from '@material-ui/lab'
import React from 'react'
import profilePng from '../../images/Profile.png'
export default function ReviewCard({ review }) {
    const options = {
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        value: review.rating,
        size:"large",
        readOnly:true,
        precision:0.5,
    }
    return (
        <div className='reviewCard'>
            <img src={profilePng} alt="User" />
            <p>{review.name}</p>
            <Rating {...options}/>
            <span>{review.comment}</span>
        </div>
    )
}
