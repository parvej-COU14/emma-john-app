import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
  
    
    return (
        <div className="Product">
            <div className="product-img">
             <img src={img} alt=""/>
            </div>

            <div className="Product-name">
            <h4>{name}</h4>
            <br/>
            <p> By : {seller}</p>
            <p>${price}</p>
            <br/>
            <p><small>Only {stock} left in stock-order soon</small></p>
            <button className="main-btn"
            onClick={()=>props.handleAddProduct(props.product)}
            
            ><FontAwesomeIcon icon={faShoppingCart} />add to card</button>
            </div>
           
        </div>
    );
};

export default Product;