import React from "react";
import styles from '../../global/GlobalSwiper.module.css'

function TagContainer(props) {
  // تعداد تگ‌هایی که قرار است نمایش داده شوند
  let displayNum = props.num >= 5 ? 5 : props.num;

  // تعداد تگ‌هایی که باید با کلاس off نشان داده شوند
  let offNum = props.num < 5 ? 5 - props.num : 0;

  // تگ‌هایی که با کلاس on نشان داده شوند
  const onTags = [];
  for (let i = 0; i < displayNum; i++) {
    onTags.push(<div key={i} className={styles.on}>£</div>);
  }

  // تگ‌هایی که با کلاس off نشان داده شوند
  const offTags = [];
  for (let i = 0; i < offNum; i++) {
    offTags.push(<div key={i} className={styles.off}>£</div>);
  }

  return (
    <div className={styles.tagContainer+' '+ 'dFlexPro roboto400'}>
      {onTags}
      {offTags}
    </div>
  );
}

export default TagContainer;