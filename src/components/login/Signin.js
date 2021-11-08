import React from 'react'

export default function Signin() {
    return (
        <div className="body-sign body-loin">
            <input type="text" name placeholder="email or phone number ..." id required />
            <input type="password" name placeholder="password ..." id required />
            <button className="button sign-in"> Đăng ký </button>
        </div>
    )
}
