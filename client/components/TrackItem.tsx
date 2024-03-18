import { ITrack } from '@/types/track';
import React, { useState } from 'react';
import styles from '../styles/TrackItem.module.scss'
import { AppURL } from '@/layouts/MainLayout';

interface TrackItemProps {
    track: ITrack;
    stylesMaxWidth?: number;
}

const TrackItem: React.FC<TrackItemProps>  = ({track, stylesMaxWidth}) => {
    const [isAddLike, setIsAddLike] = useState <boolean>(false)

    const addLike = () => {
        if(isAddLike === false){
            setIsAddLike(true)
            // request, +like
        }
        else{
            setIsAddLike(false)
            // request, -like
        }
    }
   return(
       <div className={styles.TrackItem} style={{maxWidth: stylesMaxWidth ? stylesMaxWidth : 542}}>
            <div className={styles.Track_info}>
                <div className={styles.TrackItem__avatar_cont}>
                    {/* Alt зависит от Темы */}
                    <img src={`${AppURL}/${track.picture}`} alt="https://top-fon.com/uploads/posts/2023-02/1675354453_top-fon-com-p-fon-dlya-prezentatsii-odnotonnii-chernii-5.jpg" />
                </div>
                <div className={styles.TrackItem__Headlines}>
                    <h2>{track.name}</h2>
                    <h3>{track.artist}</h3>
                </div>
            </div>
            <div className={styles.TrackItem__iconsAndTIme}>
                <div className={styles.TrackItem__iconsAndTIme__icons}>
                    <div className={styles.TrackItem_add_icon}>
                        <span></span>
                        <span className={styles.span_two}></span>
                    </div>
                    <div
                    className={!isAddLike ? styles.TrackItem_like_icon : styles.TrackItem_like_icon_active}
                    onClick={addLike}
                    ></div>
                </div>
                {/* Временное значение */}
                <p className={styles.TrackItem__iconsAndTIme__time}>2:42</p>
            </div>
       </div>
   );
};


export default TrackItem;