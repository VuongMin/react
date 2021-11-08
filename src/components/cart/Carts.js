import React, { Component } from 'react';
import { CartItem } from './CartItem';
import { HeadCart } from './HeadCart';
import './cart.css'
import { URI, postData } from '../../common';
import { Link } from 'react-router-dom';

class Carts extends Component {
    constructor(props) {
        super(props);
        this.state = { ITEMS: [] }
        this.addCart = this.addCart.bind(this)
        this.upDateCart = this.upDateCart.bind(this)
    }
    componentDidMount() {
        fetch(URI.Carts)
            .then(data => data.json())
            .then(data => {
                const { item, cartselected } = this.props
                const resultIdExist = data.find(data => data.id_product == item.id)
                if (resultIdExist === undefined) {
                    const obj = {}
                    obj.id_product = item.id
                    obj.name = item.name
                    obj.img = cartselected.img
                    obj.size = cartselected.size
                    obj.quantity = cartselected.quantity
                    obj.price = item.pirce
                    obj.total = item.pirce * cartselected.quantity
                    this.addCart(obj)
                }

                this.setState({ ITEMS: data })
            })

    }

    addCart(obj) {
        postData(URI.Carts, obj)
            .then(data => console.log(data))
        //lazy code ^^ not use setstate to it auto reload render
        this.render()
    }
    upDateCart(event, item) {
        const val = event.target.value
        let index = 0
        const { ITEMS } = this.state
        item["quantity"] = val
        item["total"] = val * item.price
        ITEMS.find((it, idx) => { if (it.id === item.id) { index = idx } })
        ITEMS[index] = item
        //update money and ITEMS
        this.setState({ ITEMS: ITEMS })
        //Update data api
        postData(URI.Carts+item.id,ITEMS[index],"PUT")
        .then(data=>console.log(data))

    }

    render() {
        const { fn_isShowupCart } = this.props
        const { ITEMS } = this.state
        const money = ITEMS.reduce((total, num) => total + num.total, 0)
        return (
            <div className="popup-carts" >
                <HeadCart num={ITEMS.length} />
                <div className="cart-content">
                    <div className="cart-topic">
                        <p>... </p>
                        <p>sản phẩm </p>
                        <p>đơn giá</p>
                        <p>số lượng</p>
                        <p>thành tiền</p>
                    </div>
                    <div className="cart-product-warpper">
                        {
                            ITEMS.map(item => <CartItem fn_upcart={this.upDateCart} item={item} />)
                        }
                    </div>
                    <div className="cart-user">
                        <p>Tiếp tục mua hàng</p>
                        <p className="total">{Intl.NumberFormat('en-US').format(money) + " vnd"}</p>
                    </div>
                    <button><Link to="/checkout">Pays</Link></button>
                    <button onClick={fn_isShowupCart} className="exits">Exits</button>
                </div>
            </div>

        );
    }
}

export default Carts;