import React from 'react'
import styles from "./careers.module.css"

const Sec3 = () => {
  return (
    <div className={styles.sec3Cont}>
        <div className='container'>
            <h3>Why work with us?</h3>
            <div className={styles.Sec3Items}>
                <div>
                    <h5>
                        <span>1.</span>
                        Solve challenging problems.
                    </h5>
                    <p>
                    We’re not just an app. We’re solving complex problems for customers, riders and
                    restaurants.
                    </p>
                </div>

                <div>
                    <h5>
                        <span>2.</span>
                        Great idea? Make it happen.
                    </h5>
                    <p>
                    Today’s ideas are tomorrow’s projects.
                    At Grub24 everyone is an
                    entrepreneur.
                    </p>
                </div>

                <div>
                    <h5>
                        <span>3.</span>
                        Own a slice of the pie.
                    </h5>
                    <p>
                    We want you to feel like an owner – so we’ll
                    make you one. Everyone at Grub24
                    gets equity.
                    </p>
                </div>

                <div>
                    <h5>
                        <span>4.</span>  
                        Fast-moving company.
                    </h5>
                    <p>
                        We’re one of the world’s fastest-growing
                        companies – growing over 100% in the
                        last year.
                    </p>
                </div>

                <div>
                    <h5>
                        <span>5.</span>
                        Diversity helps us win.
                    </h5>
                    <p>
                    We know diverse teams are the best teams. We want our team to be as diverse as our riders,
                     restaurants and the consumers that we serve.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec3