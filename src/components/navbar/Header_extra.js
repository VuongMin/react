import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../provides/StateProvider'
import{useHistory} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
function Header_extra() {
     const [{carts,userLogin},dispatch] =useStateValue()
     const [toggleSearchTemplate, settoggleSearchTemplate] = useState(false)
     const [toggleLogout, settoggleLogout] = useState(false)
     const history = useHistory()
     const SearchTemp =()=>{
         return(
             <div className={!toggleSearchTemplate?"search-template":"search-template active"}>
                 <input 
                    type="text" 
                     onKeyUp={(e)=>handelSearchAndNavPage(e,e.target.value)}   
                    />  
             </div>
         )
     }
    const handelProcessUser = ()=>{
        if(!userLogin){
           alert ('you are not logged in, please go to product details and login account !')
        }else{
            settoggleLogout(pre=>!pre)
        }
    }
     const handelSearchAndNavPage =(event,value)=>{
        if (event.keyCode === 13) {
            history.push(`/search/${value}`)
          }
     }
     const handelLogout =()=>{
         
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
     }
    return (
      <>
         <SearchTemp/>
        <div className="head-extra">
            <div className="extra-item" onClick={()=>handelProcessUser()}>
                    <i className="fas fa-user-circle"></i>
                    <p 
                        className={!toggleLogout?"logout":"logout active"}
                        onClick ={()=>handelLogout()}
                        >logout</p>
            </div>
            <div className="extra-item" onClick ={()=>settoggleSearchTemplate((pre)=>!pre)} ><i className="fas fa-search"></i></div>
            <div className="extra-item"><i class="far fa-heart"></i></div>
            <div className="extra-item"><Link to="/checkout"><i class="fas fa-shopping-cart"></i>{carts.length ||'0'}</Link></div>
        </div>
      </>
    )
}

export default   React.memo(Header_extra)
