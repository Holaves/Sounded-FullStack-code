import React from 'react';
import styles from '../styles/PlaylistList.module.scss'
import PlaylistItem from './PlaylistItem';

interface PlaylistListProps {
    plylists:
}

const PlaylistList: React.FC<PlaylistListProps> = ({plylists}) => {
   return(
       <div className={styles.PlaylistList}>
            {
                playlists.map((item, index) = > 
                    <PlaylistItem playlist={item} key={index}/>
                )
            }
       </div>
   );
};


export default PlaylistList;