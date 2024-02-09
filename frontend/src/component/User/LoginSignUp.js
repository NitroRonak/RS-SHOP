import React, { useEffect } from 'react'
import './LoginSignUp.css'
import Loader from '../layout/Loader/Loader';
import { Fragment, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import {useSelector,useDispatch} from "react-redux";
import {clearErrors,login,register} from "../../actions/userAction";
import {useAlert} from 'react-alert';
import {withRouter} from 'react-router-dom'
function LoginSignUp({history}) {
    const dispatch=useDispatch();
    const alert = useAlert();
    const location=useLocation();
    const {error,loading,isAuthenticated}=useSelector((state)=>state.user);
    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
    
    
    const { name, email, password } = user;
    
    const [avatar, setAvatar] = useState("/Profile.png");
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail,loginPassword))
    }
    const redirect=location.search ? location.search.split("=")[1] : "/account"
    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(isAuthenticated){
            history.push(redirect);
        }
    },[dispatch,error,alert,isAuthenticated,history,redirect])
    const switchTabs = (e, tab) => {
        if (tab === "login") {
          switcherTab.current.classList.add("shiftToNeutral");
          switcherTab.current.classList.remove("shiftToRight");
    
          registerTab.current.classList.remove("shiftToNeutralForm");
          loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
          switcherTab.current.classList.add("shiftToRight");
          switcherTab.current.classList.remove("shiftToNeutral");
    
          registerTab.current.classList.add("shiftToNeutralForm");
          loginTab.current.classList.add("shiftToLeft");
        }
    };
    
    const registerSubmit=(e)=>{
        e.preventDefault();
        const myForm=new FormData();
        myForm.set("name",name);
        myForm.set("email",email);
        myForm.set("password",password);
        myForm.set("avatar",avatar);
        dispatch(register(myForm));
    }

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
        } else {
          setUser({ ...user, [e.target.name]: e.target.value });
        }
    };
    return (
       <Fragment>
            {loading?<Loader/>:(
                 <Fragment>
                 <div className='LoginSignUpContainer'>
                     <div className='LoginSignUpBox'>
                         <div>
                             <div className='login_signUp_toggle'>
                                 <p onClick={(e) => switchTabs(e, "login")}>Login</p>
                                 <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                             </div>
                             <button ref={switcherTab}></button>
                         </div>
                         <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                             <div className='loginEmail'>
                                 <MailOutlineIcon />
                                 <input type="email"
                                     placeholder='Email'
                                     required
                                     value={loginEmail}
                                     onChange={(e) => setLoginEmail(e.target.value)} />
                                 <label>Email</label>
                             </div>
                             <div className='loginPassword'>
                                 <LockOpenIcon />
                                 <input type="password" required placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                                 <label>Password</label>
                             </div>
                             <Link to="/password/forgot">Forget Password</Link>
                             <button type='submit' className='loginBtn'>
                                 Login
                             </button>
                         </form>
                         <form className="signUpForm" ref={registerTab} encType="multipart/form-data" onSubmit={registerSubmit}>
                             <div className="signUpName">
                                 <FaceIcon />
                                 <input type="text" placeholder="Name" required name="name" value={name} onChange={registerDataChange}/>
                                 <label>Name</label>
                             </div>
                             <div className="signUpEmail">
                                 <MailOutlineIcon />
                                 <input type="email" placeholder="Email" required name="email" value={email} onChange={registerDataChange}/>
                                 <label>Email</label>
                             </div>
                             <div className="signUpPassword">
                                 <LockOpenIcon />
                                 <input type="password" placeholder="Password" required name="password" value={password} onChange={registerDataChange}/>
                                 <label>Password</label>
                             </div>
                             <div id="registerImage">
                                 <img src={avatarPreview} alt="Avatar Preview" />
                                 <input type="file" name="avatar" accept="image/*" onChange={registerDataChange}/>
                             </div>
                             <input type='submit' className='signUpBtn' value="Register"/>
                         </form>
                     </div>
                 </div>
             </Fragment>
            )}
       </Fragment>
    )
}
export default withRouter(LoginSignUp);