import React,{useEffect,useState} from 'react'
import { useForm } from "react-hook-form";
import Commerce from '@chec/commerce.js';
import { useStateValue } from '../provides/StateProvider';
import { Link } from 'react-router-dom';
function Checkout() {
  const commerce = new Commerce('pk_test_34952d4dcaee58b76216b5da141bef9d07e04e4a194d8');
  const [{carts},dispatch] = useStateValue()
  const [city, setcity] = useState([])
  const [cityActive, setcityActive] = useState(0)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      if(carts.length==0){
        alert('Please buy a product can to payment!')
      }else{
        console.log(data);
      }
  }
  useEffect(() => {
    commerce.services.localeListSubdivisions('VN').then(({subdivisions}) => {
      setcity(Object.entries(subdivisions))
      setcityActive(Object.entries(subdivisions)[0][0])
    });
    return () => {
 
    }
  }, [])

  return (
    <section id="main-content">
      <div className="headding">
        <h3>Thanh toán giỏ hàng</h3>
      </div>
      <div className="body-content">
        <div className="bill">
          <h4>Thông tin hóa đơn</h4>
          <form >
            <div className="fr-gruop">
              <div className="gruop-item">
                <label htmlFor>full name</label>
                <input type="text"  {...register("fullname",{ required: true, maxLength: 20 })} />
              <span>{errors.fullname?.type === 'required' && "First name is required"}</span>
              </div>
            </div>
            <div className="fr-gruop">
              <div className="gruop-item">
                <label htmlFor>Email </label>
                <input type="email"  {...register("email",{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
              <span>{errors.email?.type === 'required' && "email is required"}</span>
              </div>
              <div className="gruop-item">
                <label htmlFor>Phone </label>
                <input type="number"  {...register("phone",{ required: true, maxLength: 10 })} />
              <span>{errors.phone?.type === 'required' && "Phone is required"}</span>
              </div>
            </div>
            <div className="fr-gruop">
              <div className="gruop-item">
                <label htmlFor>city </label>
                <select 
                    
                   value={cityActive} 
                   {...register("city")} onChange={e=>setcityActive(e.target.value)}id="country">
                     {
                       city.map(item=>   <option value={item[0]}>{item[1]}</option>)
                     }
                </select>
              </div>
             
            </div>
            <div className="fr-gruop">
              <div className="gruop-item">
                <label htmlFor>Comment write </label>
                <textarea {...register("comment",{required:true,maxLength:49})} cols={30} rows={10} defaultValue={""} />
              <span>{errors.comment?.type === 'required' && "comment is required"}</span>
              </div>
            </div>
          </form>
        </div>
        <div className="method-pays">
          <h4>Phương thức thanh toán</h4>
          <form action>
            <div className="fr-gruop">
              <div className="gruop-item">
                <label htmlFor>Thanh toán tiền mặt khi nhận hàng (COD)</label>
                <input {...register("methodpay")} type="radio"  />
              </div>
            </div>
          </form>
        </div>
        <div className="cart-info">
          <h4>Phương thức thanh toán</h4>
          <div className="head">
            <p>Name</p>
            <p>Quantyti</p>
            <p>Price</p>
          </div>
          <div className="body">
          {
            carts.map(item=>{
              console.log(item)
              return (
                <div className="item" key={item.id}>
                      <div className="thumb">
                          <img src={item.colorImage}/>
                          <p className="name">{item.name}</p>
                      </div>
                      <div className="qty">
                          {item.qty}
                      </div>
                      <div className="price-total">
                            {
                              item.pirce * Number.parseInt(item.qty)
                            }
                            vnd
                      </div>
                </div>
              )
            })
          }
          </div>
          <div className="money-fetch"> <span>TẠM TÍNH</span> {
             carts.reduce((total,current)=>total+current.pirce * Number.parseInt(current.qty),0)
          }.vnd</div>
          <button className="button"> <Link to='/'>return home</Link></button>
          <button className="button"
              onClick={ handleSubmit(onSubmit)}
            >Thanh toán</button>
        </div>
      </div>
    </section>

  )
}

export default Checkout
