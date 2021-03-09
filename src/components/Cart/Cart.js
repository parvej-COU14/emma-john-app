import React from 'react';

const Cart = (props) => {
    const cart=props.cart
    console.log(cart);
    // const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
   let total =0;
   for(let i=0;i<cart.length;i++){
       const product=cart[i];
       total=total+product.price;

   }

    return (
        <div>
            <h2>Order Summary</h2>
            <h4 >Item Ordered:{cart.length}</h4>
            <h3>Total Price= ${total}</h3>

        </div>
    );
};

export default Cart;