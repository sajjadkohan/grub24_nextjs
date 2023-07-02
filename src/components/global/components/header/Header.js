'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../../global/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../images/434x0w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { useNavigation } from 'next/navigation'
const Header = () => {

    const navMenu = useRef(null);
    const itemMenu = useRef(null);
    // const navigation = useNavigation();
    const [activeItem, setActiveItem] = useState(NaN);

    useEffect(() => {
      const currentPath = window.location.pathname;
      if (currentPath === '/') {
        setActiveItem(0);
      } else if (currentPath === '/browse') {
        setActiveItem(1);
      }
    }, []);

    // const activeItem = () => {
    //     // console.log(navigation);
    // }

    const menuHandler = () => {
        navMenu.current.classList.toggle(styles.navOpen)
    }

    const menuClose = () => {
        navMenu.current.classList.remove(styles.navOpen)
    }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.contHeader+' '+'dFlex algCenter'}>
            <div className={styles.left+' '+'dFlex algCenter'}>
                <Link className={styles.logo} href={'/'}>
                    <div className='dFlex algCenter' >
                        <Image alt='logo' className={styles.logoImg} width={400} height={100} src={logo}/>

                        <h4 className={styles.textLogo+' '+'noneXs'}>GRUB24</h4>
                    </div>
                </Link>

                <form>
                    <input placeholder="Dishes, Restaurants & Cuisine" className={styles.inputSearch+' '+'inputC lowColor'} />
                </form>

            </div>
            <div className={styles.right+' '+'dFlex jstBtn algCenter'}>
                <button  onClick={menuHandler} className={styles.toggleMenu+' '+'noneXl btnNoneStyle'}><FontAwesomeIcon icon={faBars} /></button>
                <div ref={navMenu} onClick={menuClose} className={styles.nav}>
                    <ul className={styles.ulNav+' '+'dFlex algCenter'}>
                    <li
                        onClick={() => setActiveItem(0)}
                        className={`${styles.liNav} ${activeItem === 0 ? styles.active : ''}`}><Link href="/">Home</Link></li>
                    <li
                        onClick={() => setActiveItem(1)}
                        className={`${styles.liNav} ${activeItem === 1 ? styles.active : ''}`}><Link href="/browse">Restaurants</Link></li>
                        <li className={styles.liNav+' '+'noneXl'}><Link href={'/'}>Login</Link></li>
                        <li className={styles.liNav+' '+'noneXl'}><Link href={'/'}>SignUp</Link></li>
                    <span className={styles.closeIcon+' '+'noneXl'}><FontAwesomeIcon icon={faClose} /></span>    
                    </ul>
                </div>
                <div className={styles.loginSign+' '+'dFlex algCenter noneXs'}>
                    <button className={'btnStyle btnNoneStyle'}>login</button>
                    <button className={'btnStyle'+' '+styles.singBtn}>sign Up</button>
                </div>
            </div>
        </div>
        {/* <div className={styles.mapAndFilterParent}>
            sss
        </div> */}
      </div>
    </header>
  )
}

export default Header
