import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../provides/StateProvider";
import './ProductIf.css'

export function ProductIf({productDetails}) {
    const customSize = ['x','m','xl','xxx']
   const [{products,carts},dispatch] = useStateValue()
   const [qty, setqty] = useState()
   const [size, setsize] = useState()
   const [colorImage, setcolorImage] = useState()
   const handelAddToCart =()=>{
  
     const isvalid =   handelCheckForErrorMess()
      if(isvalid){
        const cart ={...productDetails,qty,size,colorImage}
        dispatch({
            type:'ADD_TO_CART',
            cart
        })
      }
  
 
   }
   const handelCheckForErrorMess =()=>{
       
     if(qty==undefined){
         alert('Please check for Quantity ')
         return false
         
     }
     if(colorImage==undefined){
        alert('Please check for colorImage ')
        return false
     }
     if(size==undefined){
        alert('Please check for size ')
        return false
     }
     return true
   } 

    return (
        <React.Fragment>
        <div className="box-left box-item">
            <div className="thumb">
                <img src={productDetails.img[0]} alt={productDetails.img[0]} />
            </div>
        </div>
        <div className="box-right box-item">
            <h3 className="title">{productDetails.name}</h3>
            <p className="price">{Intl.NumberFormat('en-US').format(productDetails.pirce) + " vnd"}</p>
            <p className="guide txt ">Hướng dẫn chọn size</p>
            <div className="box-wapper-3-small">
                {

                    productDetails.imgmalls.map(item => 
                    <img 
                        className={colorImage==item.img?'active':null}
                        key={item.id} 
                        src={item.img} 
                        alt={item.img} 
                        onClick={(e)=>setcolorImage(item.img)}
                    />)
                }


            </div>
            <div className="box-quatity">
                <p className=" txt ">color :</p>
                <div className="box-wapper-2">
                    <div className="size">
                        {
                            customSize.map(item=>
                                <p 
                                   className={size==item?'active':null}
                                    key={item}
                                    onClick = {(e)=>setsize(e.target.textContent)}
                                > 
                                {item}</p>
                            )
                        }
                    </div>
                    <input 
                        type="number" 
                        defaultValue={1} 
                        id="quantity" 
                        name="quantity" 
                        min={1}
                        max={5}
                         onChange={(e)=>setqty(e.target.value)}
                         />
                </div>
            </div>
            <div className="box-wapper-2 add-cart-list">
                <button onClick = {handelAddToCart}  className="add-cart button button-red "> ADD CART</button>
                <button  className="buy-now button"
                     onClick = {e=>carts.length ==0? alert('Please add a cart !'):''}
                > {carts.length>0? <Link to="/checkout"> buy now</Link>:'buy now'}</button>
            </div>
            <button  className="add-cart button button-fullwidth "> Đang có tại các cửa hàng</button>
        </div>

           
          
        </React.Fragment>
    )
}
