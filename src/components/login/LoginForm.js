import { timers } from 'jquery';
import React from 'react'
import { Link } from 'react-router-dom'
import { URI,postData } from '../../common';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      ITEMS:[],
      email:'',
      password:''
    }
    this.comitForm = this.comitForm.bind(this)
    this.handelChane=this.handelChane.bind(this)
    this.isValidMess = this.isValidMess.bind(this)
  }
  componentDidMount() {
     fetch(URI.users)
     .then(data=>data.json())
     .then(data=>this.setState({ITEMS:data}))
  }
  
  handelChane(event){
    const target = event.target;
    const name = target.name;
    const value =target.value;
    this.setState({
      [name]: value
    });
  }
  comitForm (){
     const isValid = this.isValidMess(this.state)
     if(isValid){
       const [result] = this.state.ITEMS.filter(data=>data.username ==this.state.email&&data.pass ==this.state.password)
       
       if(result){
       
          const check =  window.confirm("wellcom :" + result.username)
          if(check){
            const {fn_matchwShowLogin,fn_ckeckForHasUser}=this.props
              fn_ckeckForHasUser(result)
            fn_matchwShowLogin()
            // save into variable section local
             localStorage.setItem('USER_LOGIN',JSON.stringify(result))

          }
       }else{
         window.confirm("User or password is invalid!")
       }
     }
  }
  isValidMess(obj){
     const {email,password} = obj
     if(email==''&&password =='') 
     {
       window.confirm('err : email & password is emtry!')
       
     }else if(email==''){
      window.confirm('err : email is emtry!')
      return false
     }else if(password ==''){
      window.confirm('err : password is emtry!')
      return false
     }
     return true
  }
  render() {
    return (
      <div className="compound-logon page-width">
        <div className="head">
          <img src="http://theme.hstatic.net/1000245692/1000351967/14/hannah-morgan-39891.jpg" alt="" />
        </div>
        <div className="body">
          <div className="body-loin">
            <input onChange={this.handelChane} type="text" name="email" placeholder="email or phone number ..." id required />
            <input onChange={this.handelChane} type="password" name="password" placeholder="password ..." id required />
            <button onClick ={this.comitForm} className="button"> -&gt; </button>
            <div className="combo-page">
              <p><Link to='/' >Về trang chủ</Link></p>
              <p className="sign"><Link Link to='/sign-in'>Đăng ký</Link></p>
              <p className="fg-pass"><Link Link to='/sign-in'>forget password</Link></p>
            </div>
          </div>

        </div>
      </div>
    )
  }



}
