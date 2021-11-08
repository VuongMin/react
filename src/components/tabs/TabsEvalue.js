
import React, { useState, useEffect } from 'react'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { app } from '../../provides/firebase'
import { getDatabase, ref, onValue, child, get, set } from "firebase/database";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from '../../provides/StateProvider';

function TabsEvalue() {
    // Get a reference to the database service
    const [ {reviewOfUser,userLogin},dispatch] =useStateValue()
    const database = getDatabase(app);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [activeForm, setactiveForm] = useState()
    const [hoverStarNumber, sethoverStarNumber] = useState(-1)
    const [userCommentFirsttime, setuserCommentFirsttime] = useState(false)


  console.log(reviewOfUser);
  
    useEffect(() => {

        if (userLogin) {
            setactiveForm(<FormUserCanComment />)
          
        } else {
          
            setactiveForm(<FormInfoEvalute />)
        }
        return () => {

        }
    }, [hoverStarNumber])
 
    useEffect(() => {
        if(userCommentFirsttime)  setactiveForm(<FormUserCanComment/>)    
        return () => {
            
        }
    }, [userCommentFirsttime])
 
    const handelSignIn = ({ email, password }) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    setactiveForm(<FormLogin />)
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });

    }
    const FormSignIn = () => {
        return (
            <div className="compound-logon page-width">
                <div className="head">
                    <img src="http://theme.hstatic.net/1000245692/1000351967/14/hannah-morgan-39891.jpg" alt="" /></div>
                <div className="body">
                    <form onSubmit={handleSubmit(handelSignIn)} className="body-loin">
                        <input type="text" placeholder={errors.emailLogin ? 'Email is require!' : "email or phone number ..."}     {...register("email", { required: true })} />

                        <input type="password" placeholder={errors.emailLogin ? 'Password is require!' : 'password...'}  {...register("password", { required: true })} />

                        <button type="submit" className="button" > Sign-in </button>

                    </form>
                </div>
            </div>

        )
    }
    const FormForgetPassword = () => {
        return (
            <div className="forget-password body-loin">
                <input type="text" name placeholder="email or phone number ..." id required />
                <button className="button get-password">Get  new password ...</button>
            </div>
        )
    }
    const FormUserCanComment = () => {
        const handelHoverEnterStarEffect = (idx) => {
            sethoverStarNumber(idx)

        }
        const handelSubmmitUseComment = ({ review }) => {
            if(hoverStarNumber==-1) {
                alert('please vote rated for products!')
                return false
            }
            
            const userReplaced = userLogin.replace('@gmail.com', '')
            const date = new Date();
            const dt = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`
            const time = `${date.getHours()}h${date.getMinutes()}'${date.getUTCSeconds()}s`
            const db = getDatabase();
         
       
            if (reviewOfUser) {
               
               const result = {

                date: reviewOfUser.date.push(dt),
                review: reviewOfUser.review.push(review),
                rated: hoverStarNumber,
                time: reviewOfUser.time.push(time)
            }
            dispatch({
                type:'USER_COMMENT',
                value:result
            })
             
                set(ref(db, 'comments/' + userReplaced), reviewOfUser);
                 setactiveForm(<FormUserCanComment/>)     

            } else {
                const result = {
                    'review': [review],
                    'rated': hoverStarNumber,
                    'date': [dt],
                    'time': [time]
                }


                set(ref(db, 'comments/' + userReplaced), result);
                dispatch({
                    type:'USER_COMMENT',
                    value:result
                })
                 
               setuserCommentFirsttime(true)
         
            }

        }
 
        return (
            <>
                <div className="info-evaluate">
                    <div className="info">
                        <h3><span style={{ fontFamily: 'cursive', fontStyle: 'italic', fontWeight: 300 }}>wellcom :</span>{userLogin}</h3>
                        <span>{reviewOfUser?.review.length || 0}</span>ĐÁNH GIÁ <span></span>
                    </div>
                     <div className='reviews'>
                   
                    
                        {
                            reviewOfUser?.review.map((item,idx) => {
                                return (
                                    <div className='review-item' key={idx}>
                                        <span style={{color:'blue',fontFamily:'cursive'}}>
                                            {userLogin}:
                                        </span>
                                        <b>{item}  - </b>
                                        <i style={{color:'gray'}}>{`  :${reviewOfUser.date[idx]} - ${reviewOfUser.time[idx]}`}</i>


                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <form className="loggin has-login" onSubmit={handleSubmit(handelSubmmitUseComment)} >
                    <p>THÊM ĐÁNH GIÁ </p>
                    <div className="evaluate">
                        <p> your evaluate</p>
                        <div className="star">
                            {
                                Array(5).fill().map((_, idx) =>
                                    <StarHalfIcon
                                        className={idx <= hoverStarNumber ? 'hover-star' : ''}
                                        key={idx}
                                        onMouseEnter={(e) => handelHoverEnterStarEffect(idx)}

                                    />)
                            }

                        </div>
                        <textarea className="review" name id cols={30} rows={10} placeholder={errors.review ? 'Review is require!' : "your review ..."} defaultValue={""}   {...register("review", { required: true })} />
                    </div>
                    <button className="button send-to " type="submit" value="Send Email">Send to ... </button>
                </form>
            </>
        )
    }
    const handelSubmitLogin = ({ email, password }) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    setactiveForm(<FormUserCanComment />)
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    const FormLogin = () => {

        return (
            <div className="compound-logon page-width">
                <div className="head">
                    <img src="http://theme.hstatic.net/1000245692/1000351967/14/hannah-morgan-39891.jpg" alt="" />
                </div>
                <div className="body">
                    <form onSubmit={handleSubmit(handelSubmitLogin)} className="body-loin">
                        <input type="text" placeholder={errors.emailLogin ? 'Email is require!' : "email or phone number ..."}     {...register("email", { required: true })} />

                        <input type="password" placeholder={errors.emailLogin ? 'Password is require!' : 'password...'}  {...register("email", { required: true })} />

                        <button type="submit" className="button" > Login </button>
                        <div className="combo-page">
                            <p><Link to='/'>Về trang chủ</Link></p>
                            <p className="sign" onClick={() => setactiveForm(<FormSignIn />)} >Đăng ký</p>
                            <p className="fg-pass">Quên mật khẩu?</p>
                        </div>
                    </form>


                </div>
            </div>

        )



    }
    const FormInfoEvalute = () => {
        return (
            <>
                <div className="info-evaluate">
                    <span>0</span>ĐÁNH GIÁ CHO <span>ÁO THUN D1ATN2041002</span>
                </div>
                <div className="loggin active">
                    <p>THÊM ĐÁNH GIÁ </p>
                    <button className="button"
                        onClick={e => setactiveForm(<FormLogin />)}
                    >Đăng nhập để đánh giá </button>
                </div>
            </>
        )
    }

    return (
        <div className="tabs-item ">
            <div className="evaluate">


                {
                    activeForm
                }

            </div>
        </div>

    )
}

export default TabsEvalue


