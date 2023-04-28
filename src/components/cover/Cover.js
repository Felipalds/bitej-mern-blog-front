import React from 'react'
import './Styles.css'

const Cover = () => {


  return (
    <div className='cover'>
      <div className="coverText">
        <h1 className="coverH1">Welcome to BitAnimes</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <input class="coverInput" type='email' placeholder='seuemail@email.com'/>
        <button>Receba as útimas notícias</button>
      </div>
    </div>
  )
}

export default Cover