import { useState, useEffect } from "react"
import starEmpty from "../../assets/icons/star-empty.svg"
import starFull from "../../assets/icons/star-full.svg"
import "../../styles/Rating.css"

function Rating(props) {
    const {rating} = props
    const maxRating = 5;
    const fullStars = rating;
    const emptyStars = maxRating - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(starFull)
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(starEmpty)
    }

    return (
        <div className="rating">
            <ul className="stars-list">
                <li className="star-item">
                {stars.map((star, index) => (
                <img key={index} src={star} />
            ))}
                </li>
            </ul>
        </div>
    )

}

export default Rating