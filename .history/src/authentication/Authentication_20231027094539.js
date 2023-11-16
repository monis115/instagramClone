import React from 'react'
import "./Authentication.css"

const Authentication = () => {
  return (
    <div className='authentication'>
        <div className="auth__left">
            <img src="https://i.imgur.com/P3Vm1Kq.png" alt=''/>
        </div>
        <div className="auth__right">
            <div className="auth__more">
                <span>
                    Dont have an account <button>Sign up</button>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Authentication