import { useRouter } from 'next/router';
import React, { CSSProperties } from 'react';
import styles from '../../styles/UI/Title.module.scss'

interface TitleProps {
    children: React.ReactNode;
    seeAllPath: string;
    stylesCSS?: CSSProperties;
}

const Title: React.FC<TitleProps> = ({children, seeAllPath = '/', stylesCSS}) => {
    const router = useRouter();
   return(
        <div className={styles.list_header} style={stylesCSS}>
            <h1>{children}</h1>
            <div className={styles.list_header__seeAll} onClick={() => router.push(seeAllPath)}>
                <h2>Смотреть все</h2>
                <div className={styles.list_header__seeAll__icon}></div>
            </div>
        </div>
    );
};


export default Title;