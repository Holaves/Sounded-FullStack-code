import React from 'react';
import styles from '../styles/ThemeSwitch.module.scss'

const ThemeSwitch = () => {
    
   return(
       <div className={`${styles.toggleWrapper}`}>
           <input type="checkbox" className="dn" id="dn"/>
            <label htmlFor="dn" className={`${styles.toggle}`}> 
                <span className={`${styles.toggle__handler}`}>
                <span className={`${styles.crater} ${styles.crater__1}`}></span>
                <span className={`${styles.crater} ${styles.crater__2}`}></span>
                <span className={`${styles.crater} ${styles.crater__3}`}></span>
                </span>
                <span className={`${styles.star} ${styles.star__1}`}></span>
                <span className={`${styles.star} ${styles.star__2}`}></span>
                <span className={`${styles.star} ${styles.star__3}`}></span>
                <span className={`${styles.star} ${styles.star__4}`}></span>
                <span className={`${styles.star} ${styles.star__5}`}></span>
                <span className={`${styles.star} ${styles.star__6}`}></span>
            </label>
       </div>
   );
};


export default ThemeSwitch;