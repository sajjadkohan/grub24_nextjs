import React from 'react'
import styles from "./contact.module.css"


const ViewContact = () => {
  return (
    <div className={styles.termsView}>
        <div className={styles.contIf4}></div>
        <div className={`container`}>
            <div className={`${styles.viewContent} ${styles.bnh}`}>
                <h2>By Mail</h2>
                <p>
                Please write us to:
                <br/>
                Unit 8 Elite House 
                <br />
                The Courtyard 
                <br />
                100 Villiers Road 
                <br/>
                London
                <br/>
                NW2 5PJ
                </p>

                <h2>General inquiries:</h2>
                <p>
                    info@grub24.co.uk
                </p>

                <h2>Support</h2>
                <p>
                    Please visit us on support page
                </p>

                <h2>Contact Support:</h2>
                <p>
                If you didn’t find a suitable answer in our FAQ page, please feel free to contact us directly right away: Drop us a line at support@grub24.co.uk or Send us a tweet on twitter
                </p>
            </div>
        </div>
    </div>
  )
}

export default ViewContact