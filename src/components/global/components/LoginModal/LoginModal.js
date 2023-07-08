"use client"
import { ViewContext } from '@/context/ViewContext'
import React, { useContext } from 'react'
import styles from "./login.module.css"

const LoginModal = () => {
    const {loginModal, setLoginModal} = useContext(ViewContext);
    console.log(loginModal)
  return (
    <>
    {
        loginModal && <div className={styles.contLoginModal}>
        <div className={styles.childComp}>
            <header>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.012" height="16.01" viewBox="0 0 16.012 16.01">
                        <path id="Path_124" data-name="Path 124" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,1,0,1.42,1.42L12,13.41l6.29,6.3a1,1,0,1,0,1.42-1.42Z" transform="translate(-3.994 -3.996)"></path>
                    </svg>
                </span>
            </header>
        </div>
        <div></div>
    </div>
    }
    </>
  )
}

export default LoginModal