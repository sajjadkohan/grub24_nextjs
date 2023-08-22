import { ViewContext } from "@/context/ViewContext";
import Link from "next/link";
import { useContext, useState } from "react"
import PhoneInput from 'react-phone-number-input';
import { getDevice } from "../../../../../utils/functions";
import styles from "./login.module.css"

const Register = ({BackAction,setDetailing,detail}) => {
    const {loginModal, setLoginModal} = useContext(ViewContext);
    const [value, setValue] = useState();
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);


    const Register = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append("type","register")
        formData.append("email",detail.email)
        formData.append("password",detail.pass)
        formData.append("cpassword",detail.cpass)
        formData.append("phone",value)
        formData.append("firstname",detail.first_name)
        formData.append("lastname",detail.last_name)
        formData.append("deviceplatform",getDevice())

        const res = await fetch('http://grub24.com/NextApi/Register?debug=2',{
            method:"POST",
            body:formData,
            withCredentials: true
        })
        const data = await res.json();
        setLoading(false)

        // if(data.code === 200){
            
        // }else{
        //     toast.error(data.result.msg)
        //     console.log(data.result.msg)
        // }




    }

    
  return (
    <div className={styles.botComp1}>
        <header >
            <button 
            onClick={() => BackAction()}
            className={styles.btnbck}>Back</button>

            <span 
            onClick={() => setLoginModal(false)} className={styles.cls}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.012" height="16.01" viewBox="0 0 16.012 16.01">
                    <path id="Path_124" data-name="Path 124" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,1,0,1.42,1.42L12,13.41l6.29,6.3a1,1,0,1,0,1.42-1.42Z" transform="translate(-3.994 -3.996)"></path>
                </svg>
            </span>
        </header>

        <h5>Sign up and start Grub24</h5>

        <div className={styles.bxReg}>
            <div className={styles.contpass2}>
                <label>First name</label>
                <input 
                value={detail.first_name}
                placeholder="Last Name ..."
                onChange={(e) => setDetailing('first_name',e.target.value)}
                />
            </div>

            <div className={styles.contpass2}>
                <label>Last Name</label>
                <input 
                placeholder='Last Name ...'
                value={detail.last_name}
                onChange={(e) => setDetailing('last_name',e.target.value)}
                />
            </div>

            <div className={styles.contpass2}>
                <label>Password</label>
                <input 
                value={detail.pass}
                placeholder='Password ...'
                onChange={(e) => setDetailing('pass',e.target.value)}
                type={"password"}/>
            </div>

            <div className={styles.contpass2}>
                <label>Confirm Password</label>
                <input 
                placeholder='Confirm Password ...'
                value={detail.cpass}
                onChange={(e) => setDetailing('cpass',e.target.value)}
                type={"password"}/>
            </div>
        </div>

        <div className={styles.phInf}> 
            <PhoneInput
            placeholder="Enter phone number"
            value={value}
            defaultCountry="GB"
            onChange={setValue}/>
        </div>
        
        <div className={styles.termFooter}>
            <span
            className={terms && styles.activing}
            onClick={() => setTerms(!terms)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12.575" height="9.34" viewBox="0 0 12.575 9.34">
                    <path id="Path_60" data-name="Path 60" d="M58.455,72l-6.97,7.53L48,75.77" transform="translate(-46.94 -70.945)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </svg>
            </span>
            <p 
            style={{fontFamily:"Roboto!important",fontWeight:"500!important"}}
            className={styles.mic}>
                I have read and agree with the User Terms of Service .
                <Link href={""}>Terms of Service and Purchase</Link>
            </p>
        </div>

        <button 
        onClick={Register}
        className={styles.regCont}>
            Continue            
        </button>

        


        {/* 

        <span className={styles.fgpas}>Forget Password</span>
        <button 
        onClick={LoginUser}
        className={styles.btLoginG}>Login</button> */}
    </div>
  )
}

export default Register