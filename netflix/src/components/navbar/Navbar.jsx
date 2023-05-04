import React from 'react'
import '../navbar/navbar.scss'
import Netflix_logo from "../navbar/Netflix-logo-red-black-png.png";
import avtar from "../navbar/Tushyap.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="left">
            <img src={Netflix_logo} alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>     
        <div className="right">
            <SearchIcon className='icon'/>
            <span>Kids</span>
            <NotificationsIcon className='icon'/>
            <img src={avtar} alt="" />
            <div className="profile">
            <ArrowDropDownIcon className='icon'/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Navbar
