import React, { useState,useEffect} from 'react'
import { ProductIf } from '../components/productInfo/ProductIf';
import Tabs from '../components/tabs/Tabs';
import Product from '../components/products/Product';
import { useStateValue } from '../provides/StateProvider'
import {useParams} from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams()
    const [{ products }, dispatch] = useStateValue()
    const [ItemsRecently, setItemsRecently] = useState([])
    const [productDetails, setproductDetails] = useState()
   
    useEffect(() => {
        const handelGetIProductRencently = () => {
        
            const item = products.find(item => item.plug === id)
            if (item !== undefined) {
                const result = products.filter(i => i.cartergoryID == item.cartergoryID)
                setItemsRecently(result)
            }
        }
        handelGetIProductRencently()
        return () => {
        
        }
    }, [])
    useEffect(() => {
        const product= products.find(item=>item.plug ==id)
        if(product) setproductDetails(product)
        return () => {
         
        }
    }, [])


 

    return (
        <React.Fragment>

            <section id="main-content">
                <div className="info-product page-width">
                    <div className="box-wapper-2">
                     {productDetails &&  
                      <ProductIf
                        productDetails = {productDetails}
                     />}
                    </div>
                </div>

                <Tabs />
                <Product cls="section-products same-category " title="sản phẩm cùng danh mục" setproductDetails={setproductDetails}  products={ItemsRecently} />
            </section>
            {/* {cart} */}
        </React.Fragment>
    )
}

export default ProductDetail


