
import React from 'react'
import { URI } from '../../common';
import { Heading } from '../Heading';
import { ProductItem } from './ProductItem';
import './Product.css'
import $ from 'jquery';
class Product extends React.Component {
    constructor(props) {
        super(props);


    }

     
    render() {
    
        const {cls,products,title,setproductDetails ,splitRow} =this.props
         return (
            <div className={cls}>
                <Heading>{title}</Heading>
                <div className={!splitRow?"colection-products colection-wapper":"colection-products colection-wapper row-to-split-2"}>
                    {
                        products.map(item => {
                            return <ProductItem 
                                        key={item.id}
                                        item={item} 
                                        setproductDetails={setproductDetails}
                                        />
                        })
                    }

                </div>
            </div>

        )
    }

}
export default Product