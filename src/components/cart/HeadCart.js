import React from 'react'

export function HeadCart(props) {
    const {num} = props
    return (
        <div className="headding-cart">
            <p>Hiện đang có <span className="cart-number">{num}</span> sản phẩm trong giỏ hàng</p>
        </div>
    )
}
