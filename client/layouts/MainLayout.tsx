import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Container } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    const {setHeight, setWidth} = useActions()
    const {width} = useTypedSelector(state => state.size)

    const setSizes = (): void => {
        setWidth(window.innerWidth) 
        setHeight(window.innerHeight)
    }
    
    const getMaxWidth = (windowW: number): number | string => {
        if(windowW >= 1870){
            return 1690
        }
        else if(windowW >= 1685){
            return 1630
        }
        else if(windowW >= 1340){
            return 1139
        }
        return 'none';
    }
    useEffect(() => {
        setSizes()
        window.addEventListener('resize', function(event) {
            setSizes()
        }, true)
    },  [])
   
   return(
       <>
            <Head>
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name="description" content={`Музыкальная площадка. Сайт для прослушивания и загрузки своих треков. Оставь свой след. ${description ? description : ''}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || 'Музыка, треки, артисты, новый звук'} />
                <meta name="viewport" content='width=device-width, initial-scale=1' />
            </Head>
            {
                width > 1024
                ?
                <Navbar/>
                :
                <MobileNavbar/>

            }
            <Container style={{maxWidth: getMaxWidth(width)}}>
                {children}
            </Container>
            <Player/>
       </>
   );
};


export default MainLayout;

export const AppPORT: string = '6838'
export const AppURL: string = `http://localhost:${AppPORT}`
export const AppName: string = "Sounded"