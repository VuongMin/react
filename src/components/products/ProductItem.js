import { Link } from "react-router-dom";
import React, { useState } from 'react';
export function ProductItem({item,setproductDetails}) {
    const [src, setSRC] = useState("");
     const handelCheckSetProductDetailsFunc = (item)=>{
         if(typeof setproductDetails == 'function'){
            setproductDetails(item)
         }
     }
    return (

        <div className="product-item">
            <Link to={"/product/" + item.plug}  onClick={()=>handelCheckSetProductDetailsFunc(item)}>
                <div className="thumb">
                 
                       
                            {item.img.map((item, idx) => {
                                return <img key={idx} className={"imgShow"} src={item} alt={item} />
                            })}
                       
                
                    <div className="content">
                        <div className="many-type">
                            {item.imgmalls.map((item, idx) => {
                                return <img key={idx} onMouseLeave={matchImg} onMouseEnter={matchImg} src={item.img} alt={item.img} />
                            })}
                        </div>
                    </div>
                </div>
            </Link>
            <div className="price">{Intl.NumberFormat('en-US').format(item.pirce) + " vnd"}</div>
        </div>

    )
    function matchImg(e) {
        let eParent = e.target.closest('.thumb').querySelectorAll(".imgShow")
       if(eParent.length>1){
           eParent = eParent[eParent.length-1]
       }else{
           eParent = eParent[0]
       }
        if (e.type === "mouseenter") {
            const srcHover = e.target.src

            setSRC(eParent.src)
            eParent.src = srcHover
        } else {
            eParent.src = src
        }


    }

}


