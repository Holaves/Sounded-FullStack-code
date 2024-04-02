import React, { CSSProperties } from 'react';
import styles from '../styles/AlbumItem.module.scss'
import { useRouter } from 'next/router';

interface CreateAlbumCardProps {
    styleCSS?: CSSProperties; 
}

const CreateAlbumCard: React.FC<CreateAlbumCardProps> = ({styleCSS}) => {
    const router = useRouter()
   return(
    <div className={styles.AlbumItem} style={styleCSS} onClick={() => router.push(`/albums/create`)}>
        <div className={styles.AlbumItem__imgCont}>
            <div className={styles.UnnamedAlbum__plus_icon}></div>
        </div>
        <div className={styles.AlbumItem__names}>
            <h1>Добавьте свой</h1>
            <h2>новый альбом</h2>
        </div>
        <div className={styles.AlbumItem__bottom}>
            <p>до 100 треков</p>
            <div className={styles.AlbumItem__bottom__arrow_icon}></div>
        </div>
    </div>
   );
};


export default CreateAlbumCard;