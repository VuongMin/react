import React, { useEffect } from 'react'
import Slider from '../components/slider/Slider';
import Colection from '../components/colections/Colection'
import Product from '../components/products/Product';
import { Heading } from '../components/Heading';
import Thumb from '../components/thumb/Thumb';
import { URI } from '../common';
import {useStateValue} from '../provides/StateProvider'
function Home() {
      const [{products},dispatch] = useStateValue()
    
      useEffect(() => {
        fetch(URI.products)
        .then(data => data.json())
        .then(data => dispatch({type:'API_PRODUCTS',data}))
        
          return () => {
              
          }
      }, [])
   
    return (
        <React.Fragment>
       
            <section id="main-content">
                <Slider />
                <Colection />
                <Colection style_modify="full" />
                <Product cls="section-products" title="new arivals" products={products} />
                <div className="section-news">
                    <Heading>Tin tức mỗi ngày</Heading>
                    <div className="colection-wapper colection-news">
                        <Thumb hot={true} cls={{ clsMain: "news-slider", clsChild: "slider-item" }} />
                        <div className="list-news">
                            <Heading>Tin tức mỗi ngày</Heading>
                            <Thumb hot={false} cls={{ clsMain: "list-news-content", clsChild: "list-news-item" }} />
                        </div>
                    </div>
                </div>
                <section class="pr-video">
                    <iframe width="100%" height="700px" src="https://www.youtube.com/embed/xjrU3N8M4eo?autoplay=1&amp;loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </section>
                <section className="info-shop">
                    <Heading>Hệ thống cửa hàng</Heading>
                    <div className="shop-content">
                        <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/sb_1570684484_63.jpg" alt="" />
                        <div className="text">Địa chỉ hiện tại của shop</div>
                        <style dangerouslySetInnerHTML={{ __html: "\n                                .shop-content {position: relative; }\n                                .text {position: absolute; top: 50%; left: 50%; background: rgba(255, 165, 0, 0.53); font-size: 2rem; text-transform: uppercase; padding: 15px 20px; transform: translate(-50%, -50%); color: rgb(0, 0, 0); cursor: pointer; border: 3px solid rgb(255, 255, 255); }\n                            " }} />

                    </div>
                </section>

            </section>
        </React.Fragment>
    )
}

export default Home

