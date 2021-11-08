import React from "react";
import { ColectionItem } from "./ColectionItem";

export function ColectionFullwidth(props) {
    const { items } = props

    return (
        <React.Fragment>
            <ColectionItem  item={items[0]}/>
            <div className="colections-item">
                <div className="list-products">
                {
                   items.map((item,idx)=>{
                       if(idx==0){return null}
                       return (
                        <div key={item.id} className="product-item"><img src={item.img} alt={item.img} /></div>
                       )
                   })
                }
                   
                    
                </div>
            </div>
        </React.Fragment>
    )
}