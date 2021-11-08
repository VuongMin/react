import React from 'react'

export function CartItem(props) {
    const {item,fn_upcart} = props
    return (
        <div>
            <div className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-name">{item.name}</div>
                <div className="cart-price">{Intl.NumberFormat('en-US').format(item.price) + " vnd"}</div>
                <div className="quatity"><input type="number" min={0} max={49} onChange={(e) =>fn_upcart(e,item)} value={item.quantity}/></div>
                <div className="total-money">{Intl.NumberFormat('en-US').format(item.price * item.quantity) + " vnd"}</div>
            </div>
        </div>
    )
}
