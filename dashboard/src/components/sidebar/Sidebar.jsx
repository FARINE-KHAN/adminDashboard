import React from 'react'
import logo from "../../assets/logo.png";
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='logo'>
         <img src={logo} alt='logo' title='Home'/>
         <h3 title='Home'> Econex</h3>
        </div>
        <div className='li'>
        <h5>
          <i className="fa-solid fa-house"></i>Home
        </h5>
        <h5>
          <i className="fa-solid fa-right-left"></i>Transactions
        </h5>
        <h5>
          <i className="fa-solid fa-credit-card"></i>Cards
        </h5>
        <h5>
          <i className="fa-solid fa-dollar-sign"></i>Payments
        </h5>
        <h5>
          <i className="fa-solid fa-cart-shopping"></i>Orders<span>1</span>
        </h5>
        <h5>
          <i className="fa-solid fa-user-group"></i>Recipients
        </h5>
        <h5>
          <i className="fa-solid fa-gears"></i>Settings
        </h5>
        </div>
        <div className='nav-btn'>
        <button>
          <i className="fa-solid fa-qrcode"></i>Scan Card
        </button>
        </div>
        

    </div>

  )
}

export default Sidebar