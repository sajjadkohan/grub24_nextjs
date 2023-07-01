'use client';
import React, { useState } from 'react'
import TopMap from '../smallComponents/TopMap'
import CuisineSwiperTop from '../smallComponents/CuisineSwiperTop'
// images
import cuisineImage from '../../../public/images/cuisine/a1.webp';
import cuisineImage2 from '../../../public/images/cuisine/a2.webp';
import cuisineImage3 from '../../../public/images/cuisine/a3.webp';
import cuisineImage4 from '../../../public/images/cuisine/a4.png';
import cuisineImage5 from '../../../public/images/cuisine/a5.webp';
import cuisineImage6 from '../../../public/images/cuisine/a6.png';
import cuisineImage7 from '../../../public/images/cuisine/a7.png';
import cuisineImage8 from '../../../public/images/cuisine/a8.png';
import cuisineImage9 from '../../../public/images/cuisine/a9.png';
import cuisineImage10 from '../../../public/images/cuisine/a10.png';
import cuisineImage11 from '../../../public/images/cuisine/a11.png';
import styles from '../../styles/largeComponents/TopSectionBrowse.module.css';

const dataSwiperCuisine2 = [
    {
      id: '1skf1e34554',
      title : 'barbeque',
      desc : '253 restaurant',
      image : cuisineImage
    },  {
      id: '1skf12e34554',
      title : 'kebab',
      desc : '53 restaurant',
      image : cuisineImage2
    },
    {
      id: '2s1kfe34554',
      title : 'italian',
      desc : '25 restaurant',
      image : cuisineImage3
    },
    {
      id: '11sk344fe34554',
      title : 'mexican',
      desc : '21 restaurant',
      image : cuisineImage4
    },
    {
      id: '11sk4',
      title : 'persian',
      desc : '12 restaurant',
      image : cuisineImage5
    },
    {
      id: '11skfe3453354',
      title : 'english',
      desc : '45 restaurant',
      image : cuisineImage6
    },
    {
      id: '1134554',
      title : 'fish',
      desc : '87 restaurant',
      image : cuisineImage7
    },
    {
      id: '11skfedd34554',
      title : 'breakfast',
      desc : '99 restaurant',
      image : cuisineImage8
    },
    {
      id: '11skfe34552224',
      title : 'dessert',
      desc : '100 restaurant',
      image : cuisineImage9
    },
    {
      id: '11skfe3455dws4',
      title : 'gluten-free',
      desc : '432 restaurant',
      image : cuisineImage10
    },
    {
      id: '11554',
      title : 'vegan',
      desc : '17 restaurant',
      image : cuisineImage11
    },
    
  ]

const TopSectionBrowse = () => {

  const [showMap,setShowMap] = useState(false);

  const toggleShowMap = () => {
    setShowMap(!showMap);
  }

  return (
    <div className='poRelative'>
        <TopMap showMap={showMap} />
        <button className={showMap?styles.toggleBottonMap+' '+styles.close+' '+'':'dNone'+' '+styles.toggleBottonMap} onClick={toggleShowMap}>
        <span className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.95" height="18" viewBox="0 0 16.95 18">
              <g id="van" transform="translate(0)">
                <path id="Path_171" data-name="Path 171" d="M12,16a.945.945,0,0,0,1-1V10.9A4.012,4.012,0,1,0,8,7a4.079,4.079,0,0,0,3,3.9V15A.945.945,0,0,0,12,16ZM10,7a2,2,0,1,1,2,2A2.006,2.006,0,0,1,10,7Z" transform="translate(-3.525 -3)" fill="#0a99ff"></path>
                <path id="Path_172" data-name="Path 172" d="M4.2,19.9A2.845,2.845,0,0,0,6.5,21h11a2.977,2.977,0,0,0,2.9-3.6l-.7-3A2.833,2.833,0,0,0,16.8,12H16a1,1,0,0,0,0,2h.8a.974.974,0,0,1,1,.8l.7,3a.778.778,0,0,1-.2.8,1.234,1.234,0,0,1-.8.4H6.5a.909.909,0,0,1-.8-.4.778.778,0,0,1-.2-.8l.7-3a.974.974,0,0,1,1-.8H8a1,1,0,0,0,0-2H7.2a3,3,0,0,0-2.9,2.3l-.7,3A3.033,3.033,0,0,0,4.2,19.9Z" transform="translate(-3.525 -3)" fill="#393636" opacity="0.412"></path>
              </g>
            </svg>
          </span>
          <span className={styles.text}>Close map</span>
          <span className={styles.icon}>
          <svg  className={styles.rotateSvg} id="Group_210" data-name="Group 210" xmlns="http://www.w3.org/2000/svg" width="12.142" height="12.078" viewBox="0 0 12.142 12.078">
                <g id="Group_208" data-name="Group 208" transform="translate(12.142 5.076) rotate(90)">
                    <g id="Icon-Chevron-Left" transform="translate(0 0)">
                        <path id="Fill-35" d="M.886,12.142,0,11.256,5.229,6.071,0,.886.886,0,7,6.071.886,12.142" fill="#393636"></path>
                    </g>
                </g>
                <g id="Group_209" data-name="Group 209" transform="translate(12.142) rotate(90)">
                    <g id="Icon-Chevron-Left-2" data-name="Icon-Chevron-Left" transform="translate(0 0)">
                        <path id="Fill-35-2" data-name="Fill-35" d="M.886,12.142,0,11.256,5.229,6.071,0,.886.886,0,7,6.071.886,12.142" fill="rgba(57,54,54,0.51)"></path>
                    </g>
                </g>
            </svg>
          </span>
        </button>
        <CuisineSwiperTop showMap={showMap} toggleShowFn={toggleShowMap} data={dataSwiperCuisine2} />
        <button className={showMap?styles.toggleBottonMap+' '+'dNone':''+' '+styles.toggleBottonMap} onClick={toggleShowMap}>
          <span className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.95" height="18" viewBox="0 0 16.95 18">
              <g id="van" transform="translate(0)">
                <path id="Path_171" data-name="Path 171" d="M12,16a.945.945,0,0,0,1-1V10.9A4.012,4.012,0,1,0,8,7a4.079,4.079,0,0,0,3,3.9V15A.945.945,0,0,0,12,16ZM10,7a2,2,0,1,1,2,2A2.006,2.006,0,0,1,10,7Z" transform="translate(-3.525 -3)" fill="#0a99ff"></path>
                <path id="Path_172" data-name="Path 172" d="M4.2,19.9A2.845,2.845,0,0,0,6.5,21h11a2.977,2.977,0,0,0,2.9-3.6l-.7-3A2.833,2.833,0,0,0,16.8,12H16a1,1,0,0,0,0,2h.8a.974.974,0,0,1,1,.8l.7,3a.778.778,0,0,1-.2.8,1.234,1.234,0,0,1-.8.4H6.5a.909.909,0,0,1-.8-.4.778.778,0,0,1-.2-.8l.7-3a.974.974,0,0,1,1-.8H8a1,1,0,0,0,0-2H7.2a3,3,0,0,0-2.9,2.3l-.7,3A3.033,3.033,0,0,0,4.2,19.9Z" transform="translate(-3.525 -3)" fill="#393636" opacity="0.412"></path>
              </g>
            </svg>
          </span>
          <span className={styles.text}>Explore on map</span>
          <span className={styles.icon}>
          <svg id="Group_210" data-name="Group 210" xmlns="http://www.w3.org/2000/svg" width="12.142" height="12.078" viewBox="0 0 12.142 12.078">
                <g id="Group_208" data-name="Group 208" transform="translate(12.142 5.076) rotate(90)">
                    <g id="Icon-Chevron-Left" transform="translate(0 0)">
                        <path id="Fill-35" d="M.886,12.142,0,11.256,5.229,6.071,0,.886.886,0,7,6.071.886,12.142" fill="#393636"></path>
                    </g>
                </g>
                <g id="Group_209" data-name="Group 209" transform="translate(12.142) rotate(90)">
                    <g id="Icon-Chevron-Left-2" data-name="Icon-Chevron-Left" transform="translate(0 0)">
                        <path id="Fill-35-2" data-name="Fill-35" d="M.886,12.142,0,11.256,5.229,6.071,0,.886.886,0,7,6.071.886,12.142" fill="rgba(57,54,54,0.51)"></path>
                    </g>
                </g>
            </svg>
          </span>
        </button>
    </div>
  )
}

export default TopSectionBrowse