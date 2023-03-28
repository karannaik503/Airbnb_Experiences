import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.openSpots !== "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}        
            <img src={props.img} className="card-image" alt='card' />
            <div className="card-stats">
                <img src="star-img.png" alt="star" className="star-img"/>
                <span className="rating">{props.rating}</span>
                <span className="review-count">{props.reviews}</span>
                <span className="location">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="price">{props.price}</span> / person</p>
        </div>
    )
}


