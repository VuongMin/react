import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { URI } from '../common';
import Slider from '../components/slider/Slider';
import { useStateValue } from '../provides/StateProvider';
import Product from '../components/products/Product'

export default function Category() {
    const [{ products }, dispatch] = useStateValue()
    const [id, setid] = useState()
    const [productsOfCatID, setproductsOfCatID] = useState([])
    const [splitRow, setsplitRow] = useState(false)
    const plugid = useParams()
    const EmtyProduct = ()=><h3 style={{fontStyle:'italic',fontFamily:'cursive',textAlign:'center',fontSize:30}}>category item find of you is empty!</h3>
    const SortProduct = (id)=> {
        let results;
     
        switch (id) {
           
            case 'des':
                results=productsOfCatID.sort(compareValues('pirce', 'desc'))
               
                 setproductsOfCatID([...results])
                break;
            case 'adc':
                results=productsOfCatID.sort(compareValues('pirce'))
                 setproductsOfCatID([...results])
                break;
            case 'az':
                results=productsOfCatID.sort(compareValues('name'))
                 setproductsOfCatID([...results])
                break;
            case 'za':
                results=productsOfCatID.sort(compareValues('name','desc'))
                 setproductsOfCatID([...results])
                break;
        
        
        }
    }
    //func sort
    const compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }
    useEffect(() => {
        //get id of category
        fetch(URI.menu)
            .then(data => data.json())
            .then(data => {

                const result = data.find(item => item.plug == plugid.id)
                if (result) setid(result.id)


            })
        return () => {

        }
    })
    useEffect(() => {

        if (id) {

            const result = products.filter(item => item.cartergoryID == id)
            setproductsOfCatID(result)

        }
        return () => {

        }
    }, [id])
   
    return (
        <React.Fragment>

            <section id="main-content">
                <Slider />
                <div className="filter-bar">
                    <select className="sort-bar" 
                    onChange={(e)=>SortProduct(e.target.value)}
                    >
                        <option value="des">giảm dần </option>
                        <option value="adc">Tăng  dần </option>
                        <option value="az">A -Z </option>
                        <option value="za">Z -A </option>
                    </select>
                    <div className="view-bar" >
                        <span onClick={()=>setsplitRow(false)} className="df"><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-grid-view" viewBox="0 0 500 500">
                            <path d="M231.3 232.1H5.8V6.6h225.6v225.5zm-190.5-35h155.6V41.6H40.8v155.5zM493.5 232.1H267.9V6.6h225.6v225.5zm-190.6-35h155.6V41.6H302.9v155.5zM231.3 493.1H5.8V267.6h225.6v225.5zm-190.5-35h155.6V302.6H40.8v155.5zM493.5 493.1H267.9V267.6h225.6v225.5zm-190.6-35h155.6V302.6H302.9v155.5z" />
                        </svg></span>
                        <span className="two-line" onClick={()=>setsplitRow(true)}><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-list-view" viewBox="0 0 500 500">
                            <path d="M493.5 232.1H5.8V6.6h487.7v225.5zm-452.7-35h417.7V41.6H40.8v155.5zM493.5 493.1H5.8V267.6h487.7v225.5zm-452.7-35h417.7V302.6H40.8v155.5z" />
                        </svg></span>
                    </div>
                </div>

               {
                   productsOfCatID?.length>0? <Product
                    cls="section-products category"
                     products={productsOfCatID} 
                      splitRow = {splitRow}   
                     />:<EmtyProduct/>
               }
            </section>
        </React.Fragment>
    )
}
