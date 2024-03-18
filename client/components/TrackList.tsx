import { IPlaylist } from '@/types/playlist';
import { ITrack } from '@/types/track';
import React, { useState } from 'react';
import TrackItem from './TrackItem';
import styles from '../styles/TrackList.module.scss'
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface TrackListProps {
    tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    const {width} = useTypedSelector(state => state.size)
   return(
       <div className={styles.TrackList}>
            <div className={styles.TrackListPart}>
            {
                tracks.slice(0, 3).map((track, index) => 
                    <TrackItem key={index} track={track}/>
                )
            }
            </div>
            <div className={styles.TrackListPart}>
            {
                tracks.slice(3, 6).map((track, index) => 
                    <TrackItem key={index} track={track}/>
                )
            }
            </div>
            {
                width > 1685 &&
                <div className={styles.TrackListPart}>
                {
                    tracks.slice(6, 9).map((track, index) => 
                        <TrackItem key={index} track={track}/>
                    )
                }
                </div>
            }
           
       </div>
   );
};


export default TrackList;