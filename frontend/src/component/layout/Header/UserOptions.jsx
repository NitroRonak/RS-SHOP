import React, { Fragment, useState } from 'react'
import "./Header.css";
import profile from "../../../images/Profile.png"
import {SpeedDial,SpeedDialAction} from '@material-ui/lab';
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {useHistory} from 'react-router-dom';
import { useAlert } from 'react-alert';
import {useDispatch,useSelector} from 'react-redux' 
import { logout } from '../../../actions/userAction';
function UserOptions({user}) {
    const [open,setOpen]=useState(false);
    const alert = useAlert();
    const dispatch=useDispatch();
    const {cartItems} = useSelector((state)=> state.cart)
    const history=useHistory();
    const options=[
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        {icon:<ShoppingCart style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}/>,name:`Cart(${cartItems.length})`, func:cart},
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ]

    if(user.role==="admin"){
        options.unshift({ icon: <DashboardIcon />, name: "Dashboard", func: dashboard })
    }
    
    function dashboard(){
        history.push("/admin/dashboard");
    }
    function orders(){
        history.push("/orders");
    }
    function account(){
        history.push("/account");
    }
    function cart(){
        history.push("/cart");
    }
    function logoutUser(){
        dispatch(logout())
        alert.success("Logout Successfully");
    }
    return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial 
      ariaLabel='SpeedDial tooltip example'
      style={{ zIndex: "11" }}
      onClose={()=>setOpen(false)}
      onOpen={()=>setOpen(true)}
      open={open}
      direction="down"
      className='speedDial'
      icon={
        <img
          className="speedDialIcon"
          src={user && user.avatar.url ? user.avatar.url : {profile}}
          alt="Profile"
        />
      }>
        {options.map((item)=>(
            <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func} tooltipOpen={window.innerWidth<=600?true:false} />
        ))}
      </SpeedDial>
    </Fragment>
  )
}

export default UserOptions
