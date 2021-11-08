import React from 'react'

export default function ReviewItem(props) {
     const {review,username,date,rated} = props
     let htmlRate = <i className="fas fa-star" />


    return (
        <div className="review">
        <span style={{ fontWeight: 600 }}>{username}</span> :{review}
        {/* {
            htmlRate
        } */}
        <span>{date}</span>
    </div>
    )
}
