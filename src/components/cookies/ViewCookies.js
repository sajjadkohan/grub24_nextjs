import React from 'react'
import styles from "./cookies.module.css"

const ViewCookies = () => {
  return (
    <div className={styles.termsView}>
        <div className={`container`}>
            <div className={`${styles.viewContent} ${styles.bnh}`}>
                <h2>Cookie Policy</h2>
                <p>
                We use cookies to help improve your experience of our website at https://grub24.co.uk/. This cookie policy is part of Grub24's privacy policy. It covers the use of cookies between your device and our site. 
                <br /><br />
                We also provide basic information on third-party services we may use, who may also use cookies as part of their service. This policy does not cover their cookies. 
                <br /><br />
                If you don’t wish to accept cookies from us, you should instruct your browser to refuse cookies from https://grub24.co.uk/. In such a case, we may be unable to provide you with some of your desired content and services. 
                </p>
                
                <h2>What is a cookie?</h2>
                <p>
                A cookie is a small piece of data that a website stores on your device when you visit. It typically contains information about the website itself, a unique identifier that allows the site to recognise your web browser when you return, additional data that serves the cookie’s purpose, and the lifespan of the cookie itself. 
                <br /><br />
                Cookies are used to enable certain features (eg logging in), track site usage (eg analytics), store your user settings (eg time zone, notification preferences), and to personalise your content (eg advertising, language). 
                <br /><br />
                Cookies set by the website you are visiting are usually referred to as first-party cookies. They typically only track your activity on that particular site. 
                <br /><br />
                Cookies set by other sites and companies (i.e. third parties) are called third-party cookies They can be used to track you on other websites that use the same third-party service. 

                </p>

                <h2>Types of cookies and how we use them</h2>
                <h4>Essential cookies</h4>
                <p>
                Essential cookies are crucial to your experience of a website, enabling core features like user logins, account management, shopping carts, and payment processing. 
                <br /><br />
                We use essential cookies to enable certain functions on our website. 
                </p>
                <h4>Performance cookies</h4>
                <p>
                Performance cookies track how you use a website during your visit. Typically, this information is anonymous and aggregated, with information tracked across all site users. They help companies understand visitor usage patterns, identify and diagnose problems or errors their users may encounter, and make better strategic decisions in improving their audience’s overall website experience. These cookies may be set by the website you’re visiting (first-party) or by third-party services. They do not collect personal information about you. 
                <br /><br />
                We use performance cookies on our site. 

                </p>

                <h4>Functionality cookies</h4>
                <p>
                Functionality cookies are used to collect information about your device and any settings you may configure on the website you’re visiting (like language and time zone settings). With this information, websites can provide you with customised, enhanced, or optimised content and services. These cookies may be set by the website you’re visiting (first-party) or by third-party services. 
                <br /><br />
                We use functionality cookies for selected features on our site. 

                </p>

                <h4>Targeting/advertising cookies</h4>
                <p>
                Targeting/advertising cookies help determine what promotional content is most relevant and appropriate to you and your interests. Websites may use them to deliver targeted advertising or limit the number of times you see an advertisement. This helps companies improve the effectiveness of their campaigns and the quality of content presented to you. These cookies may be set by the website you’re visiting (first-party) or by third-party services. Targeting/advertising cookies set by third-parties may be used to track you on other websites that use the same third-party service. 
                <br /><br />
                We do not use this type of cookie on our site. 
                </p>
           
            </div>
        </div>
    </div>
  )
}

export default ViewCookies