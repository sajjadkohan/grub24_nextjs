import React from 'react'
import styles from "./about.module.css"
import about1 from "../../images/about1.jpg"
import Image from 'next/image'

const Sec1 = () => {
  return (
    <div className={styles.contSec1About}>
        <div>
            <div className={styles.el5}>
                <h5>Unparalleled Food Delivery and Ordering Convenience</h5>
                <p>
                    Grub24 is your trusted partner for 
                    seamless food delivery and online 
                    ordering. Operating in your local area, we provide an
                     extensive range of restaurants and takeaways to ensure
                      that you never experience hunger again. Our user-friendly
                       platform allows you to effortlessly browse through the options,
                        customize your order, and have it delivered promptly to your door.
                         Say goodbye to the hassle of waiting in line or dealing with busy 
                         phone lines—Grub24 has you covered.
                </p>
            </div>

            <div className={styles.el5}>
                <h5>Unbeatable Affordability: The Cheapest on the Market</h5>
                <p>
                We understand the value of your hard-earned money, which is why Grub24 is committed to being the most cost-effective choice for food delivery. When you order through us, you can save significantly compared to ordering from our competitors. How do we do it? By eliminating any commission charges or imposing minimal fees. Additionally, we collaborate with the best restaurant partners in the industry to ensure that you receive high-quality meals at the best prices.
                </p>
            </div>

            <div className={styles.el5}>
                <h5>Discover Your Perfect Takeaway Delight</h5>
                <p>
                With Grub24, finding your ideal takeaway has never been easier. Our extensive network of restaurants and takeaways in your local area offers an array of options that cater to every craving. Whether you're in the mood for a scrumptious pizza, a mouthwatering burger, or a refreshing salad, we have it all. We continuously strive to enhance our list, regularly updating it to keep you informed about the latest and greatest eateries in town. With Grub24, culinary satisfaction is just a few clicks away.
                </p>
            </div>

            <div className={styles.el5}>
                <h5>Join Grub24 and Embark on Our Remarkable Journey</h5>

            </div>
        </div>
        <div>
            <div className={styles.contImgSec1Ab}>
                <Image alt='' fill src={about1} />
            </div>
        </div>
    </div>
  )
}

export default Sec1