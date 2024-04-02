import { IAlbum } from '@/types/album';
import React from 'react';
import styles from '../styles/AlbumList.module.scss'
import AlbumItem from './AlbumItem';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import CreateAlbumCard from './CreateAlbumCard';

interface AlbumListProps {
    albums: IAlbum[];
}

const AlbumList: React.FC<AlbumListProps> = ({albums}) => {
    const {width} = useTypedSelector(state => state.size)

    interface IAlbumParams {
        width: number;
        margin: number;
    }
    const albumParams: IAlbumParams = {
        width: 175,
        margin: 68,
    }
    const getAlbumsCount = (): number => {
        return Math.floor(width / (albumParams.width + albumParams.margin));
    }
   return(
       <div className={styles.AlbumList}>
            {
                albums.slice(0, getAlbumsCount()).map((item, index) => 
                    <AlbumItem album={item} key={index}
                    styleCSS={{
                        maxWidth: albumParams.width,
                        marginLeft: index === 0 ? 0 : albumParams.margin
                    }}/>
                )
            }
            <CreateAlbumCard 
            styleCSS={{
                maxWidth: albumParams.width,
                marginLeft: albumParams.margin,
            }}/>
       </div>
   );
};


export default AlbumList;