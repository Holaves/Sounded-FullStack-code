import { IAlbum } from '@/types/album';
import React, { CSSProperties } from 'react';
import styles from '../styles/AlbumItem.module.scss'
import { AppURL } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';

interface AlbumItemProps {
    album: IAlbum;
    styleCSS?: CSSProperties; 
}

const AlbumItem: React.FC<AlbumItemProps> = ({album, styleCSS}) => {
    const router = useRouter()
   return(
       <div className={styles.AlbumItem} style={styleCSS} onClick={() => router.push(`/albums/${album._id}`)}>
            <div className={styles.AlbumItem__imgCont}>
                <img src={`${AppURL}/${album.picture}`} alt="https://top-fon.com/uploads/posts/2023-02/1675354453_top-fon-com-p-fon-dlya-prezentatsii-odnotonnii-chernii-5.jpg" />
            </div>
            <div className={styles.AlbumItem__names}>
                <h1>{album.name}</h1>
                <h2>{album.artist}</h2>
            </div>
            <div className={styles.AlbumItem__bottom}>
                <p>{album.tracks.length} треков</p>
                <div className={styles.AlbumItem__bottom__arrow_icon}></div>
            </div>
       </div>
   );
};


export default AlbumItem;