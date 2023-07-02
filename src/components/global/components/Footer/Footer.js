import React from 'react'
import styles from '../../components/Footer/Footer.module.css'
import logoGrub from '../../../../images/434x0w.png';
import appStore from '../../../../../public/images/mobileAppSection/logo_ios.png';
import googlePlay from '../../../../../public/images/mobileAppSection/android-download.png';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className={styles.footer}>
     <div className={styles.w100Xs+' '+ 'containerFliuid80'}>
      <div className={styles.content}>

          <div className='col3 colxs12'>
            <h5 className='roboto500'>Download Grub24</h5>
            <p className={styles.desc+' '+'roboto300'}>
            Get the GRUB24 app and choose from 1000s of
             restaurants and hundreds of stores in multiple cities. Discover and 
            </p>
            <Link href={'/'} className={styles.btnDownload}>
                <Image width={200} height={100} src={appStore} />
            </Link>
            <Link href={'/'} className={styles.btnDownload}>
                <Image width={200} height={100} src={googlePlay} />
            </Link>
          </div>
          <div className='col3 colxs12 noneXs'>
            <h5 className='roboto500'>Let’s do this together</h5>
            <ul className='roboto400'>
              <li>
              <Link href={'/'}> For Riders</Link>
              </li>
              <li>
              <Link href={'/'}> For Restaurants</Link>
              </li>
              <li>
              <Link href={'/'}> For Careers</Link>
              </li>
              <li>
              <Link href={'/'}>About Us</Link>
              </li>
              <li>
              <Link href={'/'}>Blog</Link>
              </li>
            </ul>

          </div>
          <div className='col3 colxs12 noneXs'>
            <h5 className='roboto500'>Legal</h5>
            <ul className='roboto400'>
              <li>
              <Link href={'/'}>Terms & Conditions</Link>
              </li>
              <li>
              <Link href={'/'}>Cookies</Link>
              </li>
              <li>
              <Link href={'/'}>Privacy</Link>
              </li>
              <li>
              <Link href={'/'}> Use Policy</Link>
              </li>
            </ul>

          </div>

          <div className='col3 colxs12 noneXs'>
            <h5 className='roboto500'>Hot Links</h5>
            <ul className='roboto400'>
              <li>
              <Link href={'/'}>About us</Link>
              </li>
              <li>
              <Link href={'/'}>Contact us</Link>
              </li>
              <li>
              <Link href={'/'}>FAQ</Link>
              </li>
              <li>
              <Link href={'/'}>Cuisines</Link>
              </li>
              <li>
              <Link href={'/'}>Brands</Link>
              </li>
            </ul>

          </div>

        </div>
        <div className={styles.bottomDiv}>
          <div className={styles.left +' '+'dFlexPro'}>
            <span className={styles.icon}>
              <Image className={styles.logoGrub} width={300} height={300} src={logoGrub}/>
            </span>
            <span className={styles.text+' '+'roboto400'}>©️ Grub24 2018–2023</span>

          </div>
          <div className={styles.right +' '+'dFlexPro'}>
            <span className={styles.text +' '+'roboto300'}>  Follow us</span>
            <ul className='dFlexPro'>
              <li>
                <Link href={'/'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19.993" height="20.004" viewBox="0 0 19.993 20.004">
                      <g id="Group_35" data-name="Group 35" transform="translate(-98 -614.998)">
                          <path id="Vector" d="M7.7,4.15,3.19,6.41,0,3.22,3.22,0,7.7,2.25A1.058,1.058,0,0,1,7.7,4.15Z" transform="translate(109.7 621.8)" fill="#292d32" opacity="0.4"></path>
                          <path id="Vector-2" data-name="Vector" d="M12.89,6.45,9.67,9.67,0,0Z" transform="translate(100.03 615.35)" fill="#292d32"></path>
                          <path id="Vector-3" data-name="Vector" d="M11.7,10.022,2.12,19.6l-.57.29A1.071,1.071,0,0,1,0,18.932V1.072A1.071,1.071,0,0,1,1.55.112l.48.24Z" transform="translate(98 614.998)" fill="#292d32" opacity="0.4"></path>
                          <path id="Vector-4" data-name="Vector" d="M12.77,3.19,0,9.58,9.58,0Z" transform="translate(100.12 625.02)" fill="#292d32"></path>
                          <path id="Vector-5" data-name="Vector" d="M.03.03,0,0" transform="translate(112.89 628.21)" fill="#292d32"></path>
                      </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path id="Vector" d="M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10Z" fill="#292d32" opacity="0.4"></path>
                    <path id="Vector-2" data-name="Vector" d="M10.829,8.75a2.865,2.865,0,0,1-.73.28,1.284,1.284,0,0,0-.43.16.407.407,0,0,0-.16.33c-.02.11-.03.2-.11.26a1.113,1.113,0,0,1-.49.08,4.614,4.614,0,0,0-1.14.17,3.637,3.637,0,0,0-.62.32,2.83,2.83,0,0,1-3.27,0,2.907,2.907,0,0,0-.63-.33,4.131,4.131,0,0,0-1.14-.17,1.144,1.144,0,0,1-.49-.08c-.08-.05-.09-.15-.11-.26a.407.407,0,0,0-.16-.33,1.678,1.678,0,0,0-.43-.17,2.781,2.781,0,0,1-.73-.27c-.34-.19-.14-.3-.03-.36A3.716,3.716,0,0,0,2.4,5.9V5.88a.324.324,0,0,0-.11-.35,6.057,6.057,0,0,0-.65-.45,2.112,2.112,0,0,0-.27-.17c-.28-.2-.4-.39-.31-.64a.37.37,0,0,1,.38-.23.68.68,0,0,1,.15.02,3.958,3.958,0,0,1,.52.17,1.913,1.913,0,0,0,.27.1.149.149,0,0,0,.06.01c.1,0,.13-.05.12-.15a.277.277,0,0,0-.01-.09,12.425,12.425,0,0,1-.01-1.52A2.581,2.581,0,0,1,3.209.95,3,3,0,0,1,5.489,0a3.038,3.038,0,0,1,2.28.94,2.612,2.612,0,0,1,.67,1.64,9.781,9.781,0,0,1-.02,1.57v.03c-.01.11.02.15.12.15a.127.127,0,0,0,.06-.01q.1-.03.27-.09a3.173,3.173,0,0,1,.52-.17.389.389,0,0,1,.15-.02.371.371,0,0,1,.38.24c.09.24-.03.43-.31.63a1.625,1.625,0,0,1-.27.17,7.312,7.312,0,0,0-.65.45.324.324,0,0,0-.11.35V5.9a3.783,3.783,0,0,0,2.24,2.48C10.969,8.44,11.169,8.56,10.829,8.75Z" transform="translate(4.481 4.56)" fill="#292d32"></path>
                </svg>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.823" height="20" viewBox="0 0 16.823 20">
                    <g id="Group_29" data-name="Group 29" transform="translate(-420.177 -551)">
                        <path id="Vector" d="M14.823,5a4.405,4.405,0,0,1-.03.52A6,6,0,0,1,8.823,11H5.693a1,1,0,0,0-.99.86l-.76,5.28a.991.991,0,0,1-.71.81.663.663,0,0,1-.28.05H1a1,1,0,0,1-.99-1.16L2.4,2.51A3,3,0,0,1,5.363,0h4.46A5,5,0,0,1,14.823,5Z" transform="translate(420.177 551)" fill="#292d32"></path>
                        <path id="Vector-2" data-name="Vector" d="M13.779,3.48a4.985,4.985,0,0,1-5,5H6.629a1,1,0,0,0-.99.84l-.72,4.32a1,1,0,0,1-.99.84H1a1,1,0,0,1-.98-1.2l.17-.85a.991.991,0,0,0,.71-.81l.76-5.28a1,1,0,0,1,.99-.86h3.13a5.944,5.944,0,0,0,4.24-1.76A5.922,5.922,0,0,0,11.749,0,4.007,4.007,0,0,1,13.779,3.48Z" transform="translate(423.221 556.52)" fill="#292d32" opacity="0.4"></path>
                    </g>
                </svg>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.99" height="20.04" viewBox="0 0 19.99 20.04">
                    <path id="Vector" d="M14.18,0H5.81C2.17,0,0,2.17,0,5.81v8.37c0,3.64,2.17,5.81,5.81,5.81h8.37c3.64,0,5.81-2.17,5.81-5.81V5.81C19.99,2.17,17.82,0,14.18,0Z" fill="#292d32" opacity="0.4"></path>
                    <path id="Vector-2" data-name="Vector" d="M4.94,3.33l.05,2.95,2.63-.04a.3.3,0,0,1,.3.35L7.57,8.5a.319.319,0,0,1-.29.25l-2.25.04.12,7.25-3,.05L2.03,8.84l-1.7.03a.3.3,0,0,1-.3-.3L0,6.67a.3.3,0,0,1,.3-.3L2,6.34,1.95,3.09A3,3,0,0,1,4.9.04L7.6,0a.3.3,0,0,1,.3.3l.04,2.4a.3.3,0,0,1-.3.3l-2.4.04A.286.286,0,0,0,4.94,3.33Z" transform="translate(6.97 3.95)" fill="#292d32"></path>
                </svg>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.99" height="19.99" viewBox="0 0 19.99 19.99">
                    <path id="Vector" d="M11,5a1,1,0,0,1-1-1V3A2.652,2.652,0,0,0,7,0H3A2.652,2.652,0,0,0,0,3V9a2.652,2.652,0,0,0,3,3H9a2.652,2.652,0,0,0,3-3V6A1,1,0,0,0,11,5ZM4,3.25H6a.75.75,0,0,1,0,1.5H4a.75.75,0,0,1,0-1.5Zm4,5.5H4a.75.75,0,0,1,0-1.5H8a.75.75,0,0,1,0,1.5Z" transform="translate(3.995 3.995)" fill="#292d32"></path>
                    <path id="Vector-2" data-name="Vector" d="M14.18,0H5.81C2.17,0,0,2.17,0,5.81v8.37c0,3.64,2.17,5.81,5.81,5.81h8.37a7.111,7.111,0,0,0,3.03-.649c1.673-.713,2.78-2.562,2.78-5.161V5.81C19.99,2.17,17.82,0,14.18,0Z" fill="#292d32" opacity="0.4"></path>
                </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
