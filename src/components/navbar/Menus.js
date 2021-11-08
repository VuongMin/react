import { MenuItem } from "../navbar/MenuItem";

export function Menus(props) {
   const{menu} =props
    return (
        <div className="nav">
            <MenuItem menu = {menu}/>
            <div className="phone-contact">
                <div className="thub">
                    <img src="./images/phone.png" alt="" />
                </div>
                <div className="phone-number">1900 0000</div>
            </div>
        </div>
    )
}