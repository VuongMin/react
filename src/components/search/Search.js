import React,{ useEffect,useState} from 'react'
import { useParams } from 'react-router'

import { useStateValue } from '../../provides/StateProvider'
import Product from '../products/Product'
function Search() {
    const [{products},dispatch] = useStateValue()
    const {id} =  useParams ()
    const [productsResult, setproductsResult] = useState([])
    useEffect(() => {
        const results = products.filter(item=>item.name.includes(id))
       setproductsResult(results)
        return () => {
            
        }
    }, [id])
    const Emty = ()=><h3 style={{fontFamily:'cursive',fontSize:30,textAlign:'center'}}>result for :{id} is emty!</h3>
    return (
        <div className='search-container' style={{flex:1}}>
           {
               productsResult.length>0 ?
               <Product
                    title={`result for :${id}`} 
                    splitRow={false} cls="section-products" 
                    products ={productsResult}/> :<Emty/>
           }
        </div>
    )
}

export default Search 
