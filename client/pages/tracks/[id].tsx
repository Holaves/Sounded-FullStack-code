import { useInput } from '@/hooks/useInput';
import MainLayout, { AppName, AppURL } from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// @ts-ignore
const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()

    const username = useInput ('')
    const text = useInput ('')

    const addComment = async () => {
        try {
            const response  = await axios.post(`${AppURL}/tracks/comment`, {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (error) {
            console.log(error)
        }
        
    } 
   return(
       <MainLayout
       title={`${AppName} - ${track.name} - ${track.artist} `}
       keywords={`Музыка, треки, артисты, новый звук, ${AppName}, песни, ${track.name}, ${track.artist}, ${track.name} - ${track.artist}`}
       >
            <Button
            variant={"outlined"}
            style={{fontSize: 32}}
            onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: "20px 0px"}}>
                <img src={`${AppURL}/` + track.picture} style={{width: "200", height: '200px', borderRadius: '15px'}} />
                <div style={{marginLeft: 30}}>
                    <h1>Название - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушивания - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p style={{whiteSpace: 'pre-wrap'}}>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField
                    label="Ваше имя"
                    fullWidth
                    style={{marginTop: "15px"}}
                    {...username}
                />
                <TextField
                    label="Коментарий"
                    fullWidth
                    {...text}
                    style={{marginTop: "15px"}}
                    multiline
                    rows={4}
                />
                <Button
                    style={{marginTop: "10px"}}
                    variant={"outlined"}
                    onClick={addComment}
                >Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий: {comment.text}</div>
                    </div>
                )}
            </div>
       </MainLayout>
   );
};


export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    if(params){
        const response: AxiosResponse = await axios.get(`${AppURL}/tracks/` + params.id)
        return {
            props: {
                serverTrack: response.data
            }
        }
    }
    return {
        props: {
            serverTrack: null
        }
    }
}