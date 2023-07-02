import React from 'react'
import styles from '../AbsoluteSection/AbsoluteSection.module.css';
import Link from 'next/link';
import Image from 'next/image';

import mobile1 from '../../../../public/images/mobileAppSection/mobhome1.webp';
import mobile2 from '../../../../public/images/mobileAppSection/mobhome2.webp';
import qrCode from '../../../../public/images/mobileAppSection/qr_grub.png';
import appStore from '../../../../public/images/mobileAppSection/logo_ios.png';
import googlePlay from '../../../../public/images/mobileAppSection/android-download.png';

const MobileAppSection = () => {
  return (
    <div className={styles.mobileAppSection}>
      <div className='containerFliuid80 dFlex'>
            <div className={styles.left}>
                <div className={styles.title+' '+'roboto700 noneXs'}>GRUB24 in your hand!</div>
                <div className='w100'>
                    <p className={styles.desc+' '+'roboto700 noneXs'}>
                        Get the GRUB24 app and choose from 1000s of restaurants
                        and hundreds of stores in multiple cities.
                    Discover and get what you want – we’ll bring it right to you..
                    </p>
                </div>

                <div className='w-100'>
                    <div className={styles.qrCode}>
                        <Image width={500} height={500} src={qrCode} />
                    </div>
                </div>

                <div className='w-100'>
                    <div className={styles.parentDownload}>
                        <Link href={'/'} className={styles.btnDownload}>
                            <Image width={200} height={100} src={appStore} />
                        </Link>
                        <Link href={'/'} className={styles.btnDownload}>
                            <Image width={200} height={100} src={googlePlay} />
                        </Link>
                        <div className='w100'>
                        <p className={styles.desc2+' '+'roboto400'}>Current version: iOS 2.9.1 | Android 2.9.1</p>
                        </div>
                        <div className='w100'>
                        <p className={styles.desc3+' '+'roboto400'}>
                        Get the GRUB24 app and choose from 1000s
                         of restaurants and hundreds of stores in multiple cities.
                        </p>
                        </div>
                    </div>
                </div>

                
            </div>
            
            <div className={styles.right}>
                <div className={styles.textInMobile+' '+'noneXl'}>
                    <div className={styles.title+' '+'roboto700'}>GRUB24 in your hand!</div>
                    <div className='w100'>
                        <p className={styles.desc+' '+'roboto700'}>
                            Get the GRUB24 app and choose from 1000s of restaurants
                            and hundreds of stores in multiple cities.
                        Discover and get what you want – we’ll bring it right to you..
                        </p>
                    </div>
                </div>
                <Image className={styles.imageRight} width={1000} height={1000} alt='mobile image2' src={mobile2} />
                <Image className={styles.imageRight+' '+styles.mobileImage} width={1000} height={1000} alt='mobile image' src={mobile1} />
            </div>
      </div>

    </div>
  )
}

export default MobileAppSection