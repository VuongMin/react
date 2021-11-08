import React, {useState} from 'react'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Header_extra from './Header_extra';
function NavMoibile() {
    const [toggleMenushow, settoggleMenushow] = useState(false)
    return (
        <div className ={!toggleMenushow?"nav-mobile":"nav-mobile show-menu-mobile"}
        
        >
            <FormatAlignJustifyIcon onClick={()=>settoggleMenushow(pre=>!pre)}/>
            <Header_extra/>
        </div>
    )
}

export default NavMoibile
