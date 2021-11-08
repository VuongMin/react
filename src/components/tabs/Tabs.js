import React, {  useState, useEffect } from 'react';
import TabsfbComment from './TabsfbComment';
import Tabsimg from './Tabsimg';
import './tabs.css'
import TabsEvalue from './TabsEvalue';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, child, get, set } from "firebase/database";
import { useStateValue } from '../../provides/StateProvider';



function Tabs() {
    const [matchTabs, setmatchTabs] = useState(<Tabsimg/>)
    const [ {reviewOfUser,userLogin},dispatch] =useStateValue()
   //2 this effect wait together to render varialbe into tabsevalue
 
    useEffect(() => {
      
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                
                dispatch({
                    type:'ADD_USERLOGIN',
                    value:user.email
                })
               
                // ...
            } 
        });

        return () => {

        }
    }, [])
    useEffect(() => { 

        const userReplaced = userLogin?.replace('@gmail.com', '')
        const dbRef = ref(getDatabase());
        get(child(dbRef, `comments/`)).then((snapshot) => {

            if (snapshot.exists()) {
         
                dispatch({
                    type:'GET_DATA_REVIEWSOFUSER_FIRST_TIME',
                    value:snapshot.val()[userReplaced]
                })
                  
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
        return () => {

        }
    }, [userLogin])
   

   
     const handelShowMatchTabs= (id)=>{
       
        if(id=='evalue')setmatchTabs(<Tabsimg/>)
        else if (id=='comment') setmatchTabs(<TabsfbComment/>)
        else setmatchTabs(<TabsEvalue />)
    }

    return (
        <>
            <div className="page-width list-tabs">
                <div className="tabs-wapper">
                    <div id="evalue" onClick={e=>handelShowMatchTabs(e.target.id)}>ĐÁNH GIÁ </div>
                    <div id="comment" onClick={e=>handelShowMatchTabs(e.target.id)}>comment</div>
                    <div id="description" onClick={e=>handelShowMatchTabs(e.target.id)}>Mô tả</div>
                </div>

               {matchTabs}

            </div>

        </>
    )
}

export default Tabs

