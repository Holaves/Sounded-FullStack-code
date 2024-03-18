import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../styles/Player.module.scss'
import secondStyles from '../styles/TrackItem.module.scss'
import { ITrack } from '@/types/track';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { AppName, AppURL } from '@/layouts/MainLayout';

const getCookie = (name: string) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    console.log(matches ? (matches[1]) : undefined)
    return matches ? matches[1] : undefined;
}

export let audio: HTMLMediaElement;

const Player = () => {
    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setDuration, setCurrentTime, setActiveTrack} = useActions()
    const [timer, setTimer] = useState(null)

    useEffect(() => {
        setVolume(Number(getCookie(`${AppName}_VOLUME`)))
    }, [])

    const setAudio = (): void => {
        if(active) {
            audio.src = `${AppURL}/` + active?.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = (): void  => {
        if(pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    useEffect(() => {
        if(!audio) {
            audio = new Audio();
        }
        else{
            setAudio()
            play()
        }
    }, [active])

    if(!active) {
        return null;
    }


    const changeVolume = (e: ChangeEvent<HTMLInputElement>): void => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
        if(timer) {
            clearTimeout(timer)
        }
        setTimer(
            //@ts-ignore
            setTimeout(async () => {
                document.cookie = `${AppName}_VOLUME=${String(e.target.value)}`
            }, 500)
        )
    }
    const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>): void => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

   return(
       <div className={styles.player}>
            <IconButton onClick={play}>
                {!pause
                ?
                <Pause/>
                :
                <PlayArrow/>
                }
            </IconButton>
            <Grid container direction="column" className={secondStyles.names}>
                <div className={secondStyles.trackName}>{active?.name}</div>
                <div className={secondStyles.artistName}>{active?.artist}</div>
            </Grid>
            {/* @ts-ignore */}
            <TrackProgress left={currentTime} type="duration" right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: 'auto'}} />
            {/* @ts-ignore */}
            <TrackProgress type="volume" left={volume} right={100} onChange={changeVolume}/>
       </div>
   );
};


export default Player;