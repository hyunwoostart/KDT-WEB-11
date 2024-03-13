import React from "react";
import Img from "./img_book.png";

function Book(props) {
    const {title, author, price, type} = props
    return (
        <div>
            <h1>{title}</h1>
            <img src={Img} />
            <p><span>{author}</span></p>
            <p><span>{price}</span></p>
            <p><span>{type}</span></p>
        </div>
    ) 
}

export default Book;