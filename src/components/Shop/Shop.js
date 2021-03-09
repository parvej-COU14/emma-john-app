import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React,{ useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';



const Shop = () => {
    const first10=fakeData.slice(0,10);
 const [products, setProducts]= useState(first10);
 const [cart, setCarts]=useState([]);
 const handleAddProduct=(product)=>{
     console.log("Product Added",product);
     const newCart=[...cart,product];
     setCarts(newCart);
 }

    return (
        <div className="Shop-container">

            {/* product-part */}
            <div className="product-container">
          
              
                {
                    products.map(pd=><Product 
                        handleAddProduct={handleAddProduct}
                        product={pd} ></Product>)
                }
         
            </div>

            {/* card-part */}
            <div className="card-container">
         <Cart cart={cart}></Cart>
             
            </div>
            
        </div>
    );
};

export default Shop;