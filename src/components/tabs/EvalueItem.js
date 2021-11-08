import React from 'react'
import ReviewItem from './ReviewItem';

export default function EvalueItem(props) {
    const { userEvaluate ,username} = props

    if(!(Object.keys(userEvaluate).length === 0
    && Object.getPrototypeOf(userEvaluate) === Object.prototype)){
   
        return (
            <div className="info-evaluate"><span>{''}
            </span> reviews of <span style={{ color: 'green', fontSize: '2rem', padding: 0 }}>{username}</span>
                <div className="review-wpp">
                 {
                     userEvaluate.reviews.map((item,idx)=><ReviewItem rated={userEvaluate.rated} date={userEvaluate.date[idx]} username={username}  review={item}/>)
                 }
    
                </div></div>
    
        )
    }
    return null
}
