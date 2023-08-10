"use client"
import { ViewContext } from '@/context/ViewContext'
import React, { useContext } from 'react'
import styles from "./login.module.css"

const LoginModal = () => {
    const {loginModal, setLoginModal} = useContext(ViewContext);
  return (
    <>
    {
        loginModal && <div className={styles.contLoginModal}>
        <div className={`${styles.childComp} ${loginModal && styles.openLogin}` }>
            <div style={{padding:"0 38px",marginTop:"23px"}}>
                <span className={styles.grLogo}></span>
                <header>
                    <span onClick={() => setLoginModal(false)} className={styles.cls}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.012" height="16.01" viewBox="0 0 16.012 16.01">
                            <path id="Path_124" data-name="Path 124" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,1,0,1.42,1.42L12,13.41l6.29,6.3a1,1,0,1,0,1.42-1.42Z" transform="translate(-3.994 -3.996)"></path>
                        </svg>
                    </span>
                </header>
                <h4 className='quicksand700'>Create an account or log in</h4>
                <p className='roboto300'>Sign in below or create a new Grub24 account.</p>
                <button className={`roboto400 ${styles.btGoogle}`}>
                    <span>
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.64 12.0128C20.64 11.3879 20.5827 10.787 20.4764 10.2102H12V13.619H16.8436C16.635 14.7206 16.0009 15.6539 15.0477 16.2788V18.49H17.9564C19.6582 16.9558 20.64 14.6966 20.64 12.0128Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 20.6249C14.4298 20.6249 16.467 19.8358 17.9561 18.4899L15.0475 16.2788C14.2416 16.8075 13.2107 17.12 11.9998 17.12C9.65567 17.12 7.67158 15.5698 6.96385 13.4868H3.95703V15.7701C5.43794 18.6501 8.48158 20.6249 11.9998 20.6249Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.96409 13.487C6.78409 12.9582 6.68182 12.3934 6.68182 11.8126C6.68182 11.2318 6.78409 10.667 6.96409 10.1382V7.85498H3.95727C3.34773 9.04467 3 10.3906 3 11.8126C3 13.2346 3.34773 14.5805 3.95727 15.7702L6.96409 13.487Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 6.50497C13.3211 6.50497 14.5075 6.9496 15.4402 7.82284L18.0216 5.29526C16.4629 3.87324 14.4257 3 11.9998 3C8.48158 3 5.43794 4.9748 3.95703 7.85489L6.96385 10.1381C7.67158 8.05517 9.65567 6.50497 11.9998 6.50497Z" fill="#EA4335"></path></svg>
                    </span>
                    <span>Continue with Google</span>
                </button>

                <button className={`roboto400 ${styles.btGoogle} ${styles.btMeta}`}>
                    <span>
                       
                    </span>
                    <span>Continue with Meta</span>
                </button>

            </div>

            <div className={styles.botComp}>
                <span className={styles.el1}>OR</span>
                <input placeholder='Your email address' />

                <button className={`roboto400 ${styles.btEmail}`}>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21.38" viewBox="0 0 30 21.38"> <g id="Layer_2" data-name="Layer 2" transform="translate(-1 -5.31)"> <path id="Path_143" data-name="Path 143" d="M27.5,26.69H4.5A3.5,3.5,0,0,1,1,23.19V8.81a3.5,3.5,0,0,1,3.5-3.5h23A3.5,3.5,0,0,1,31,8.81V23.19a3.5,3.5,0,0,1-3.5,3.5ZM4.5,7.31A1.5,1.5,0,0,0,3,8.81V23.19a1.5,1.5,0,0,0,1.5,1.5h23a1.5,1.5,0,0,0,1.5-1.5V8.81a1.5,1.5,0,0,0-1.5-1.5Z" fill="#fff"></path> <path id="Path_144" data-name="Path 144" d="M16,14.78a4.49,4.49,0,0,1-2.23-.59l-11.25-6,.94-1.76,11.28,6a2.5,2.5,0,0,0,2.48,0l11.3-6,.94,1.76-11.28,6a4.41,4.41,0,0,1-2.18.59Z" fill="#fff"></path> </g> </svg>
                    </span>
                    <span>Continue with Google</span>
                </button>
                
                <p>
                By continuing you agree to our T&Cs. Please also check out our Privacy Policy. We use your data to offer you a <br/> personalised experience and to better understand and improve our services. For more information see here.
                </p>
            </div>
        </div>
        <div></div>
    </div>
    }
    </>
  )
}

export default LoginModal