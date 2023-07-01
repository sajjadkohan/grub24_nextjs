import React from 'react'
import styles from '../../styles/largeComponents/AbsoluteSection.module.css'
import image from '../../images/rightImage.webp';
import Image from 'next/image';
import Link from 'next/link';

const AbsoluteSection = () => {
  return (
    <div className={styles.absoluteSection+' '+'containerFliuid80 dFlex'}>
      <div className={styles.left}>
        <div className={styles.subTitle+' '+'roboto700'}>What is Grub24?</div>
        <div className={styles.title+' '+'roboto700'}>We bring yummy <br/> food to you</div>
        <div className='w100'>
        <p className={styles.desc+' '+'roboto400'}>
        Grub24 is the solution to a grumbling stomach.
         Faced with a long list of restaurants that offer ...
        </p>
        </div>
        <Link href={'/'} className={styles.btn+' '+''}>Read More</Link>
      </div>
      <div className={styles.right}>
        <Image className={styles.imageRight} width={1000} height={1000} alt='right image' src={image} />
      </div>
    </div>
  )
}

export default AbsoluteSection
