import Image from 'next/image'
import React from 'react'
import styles from "./blog.module.css"

const ViewBlog = () => {

  const data = [
    {
      id:1,
      title:"How to Improve Your Sales as a Delivery Restaurant",
      description:"Delivering food is an integral part of the modern restaurant business However, restaurant owners often struggle with mastering this trade with mastering this trade.",
      link:"",
      image:"https://d3o47ov0yc40fm.cloudfront.net/assets/images/3.jpeg"
    },
    {
      id:2,
      title:"3 Ways to Get More Sales for Your Delivery Restaurant",
      description:"The restaurant business is very competitive, and customers have many options, whether ordering in or dining out.",
      link:"",
      image:"https://d3o47ov0yc40fm.cloudfront.net/assets/images/2.jpeg"
    },
    {
      id:3,
      title:"How to Improve Your Food Delivery Experience",
      description:"Customers are an integral part of a business.Customers being unhappy and having a negative experience will tell their friends and family to steer clear of the products or services.",
      link:"",
      image:"https://d3o47ov0yc40fm.cloudfront.net/assets/images/1.jpeg"
    },
    {
      id:4,
      title:"Why Food Photography is Important for Your Restaurant",
      description:"Food photography is the presentation and compilation of food preparation in a way that increases its desirability. ",
      link:"",
      image:"https://d3o47ov0yc40fm.cloudfront.net/images/foodphoto.png"
    },
    {
      id:5,
      title:"Why Your Restaurant Needs to Be Online to Grow Sales",
      description:"Connecting with your customers from any device is essential for any business—no matter how large or small.",
      link:"",
      image:"https://d3o47ov0yc40fm.cloudfront.net/images/blogbanner.jpeg"
    }
  ]
  return (
    <div>
      <div className={`container ${styles.contBlog}`}>
        <h1>Blog</h1>
        <div className={styles.contItem}>

          {
            data.map((item,index) => 
            <div
            key={index} 
            className={styles.item}>
              <div >
                <Image alt='' fill  src={item.image}/>
              </div>
              <h3>{item.title}</h3>  
              <p>{item.description}</p>
              <button>Read more</button>
            </div>
            )
          }
          
        </div>
      </div>
    </div>
  )
}

export default ViewBlog