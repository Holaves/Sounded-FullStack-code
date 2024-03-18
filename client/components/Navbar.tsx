import React from 'react';
import styles from '../styles/Navbar.module.scss'
import ContainerA from './ContainerA';
import Image from 'next/image';
import { AppName } from '@/layouts/MainLayout';
import Logo from '../public/images/Generalis/Logo.svg'
import ThemeSwitch from './ThemeSwitch';


const Navbar = () => {
   return(
       <nav className={styles.navbar}>
            <ContainerA>
                <div className={styles.navbar__wrapper}>
                    <div className={styles.logo_cont}>
                        <Image src={Logo} alt={`${AppName}`} className={styles.logo_nav}/>
                    </div>
                    <ul className={styles.navbar_list}>
                        <li className={styles.navbar_list__item}>Список треков</li>
                        <li className={styles.navbar_list__item}>Загрузить трек</li>
                        <li className={styles.navbar_list__item}>Мои плейлисты</li>
                        <li className={styles.navbar_list__item}>Альбомы исполнителей</li>
                    </ul>
                    <div className={styles.nav_buttons}>
                        <button className={styles.nav_buttons__language_button}>
                            <p>Язык</p>
                            <div className={styles.nav_buttons__language_button__lang_icon}></div>
                        </button>
                        <ThemeSwitch/>
                    </div>
                    <div className={styles.AuthButtons}>
                        <p>Войти</p>
                        <div className={styles.profile_image_cont}>
                            <img src={`https://ростр.рф/assets/img/no-profile.png`} alt="I'm" />
                        </div>
                    </div>
                </div>
            </ContainerA>
       </nav>
   );
};


export default Navbar;