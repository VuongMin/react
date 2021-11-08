import React from 'react'

export default function LoginTemp(props) {
 const {fn_matchwShowLogin} = props

    return (
        <div className="loggin ">
        <p>THÊM ĐÁNH GIÁ </p>
        <button onClick={fn_matchwShowLogin} className="button ">Đăng nhập để đánh giá </button>
    </div>
    )
}
