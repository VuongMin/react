import React from "react";
import { Link } from 'react-router-dom'

export function MenuItem(props) {
    const { menu } = props

    return (
       
            <div className="nav-box">
                {menu.map((item, idx) => {
                    let cls = "nav-item "
                    if (menu.length - 1 === idx) { cls = "nav-item  subtitles" }
                    return <div key={item.id} className={cls}>
                     <Link to={"/category/" +item.plug}>{item.name}</Link>
                     </div>
                })}
             
            </div>
       
    )
}
