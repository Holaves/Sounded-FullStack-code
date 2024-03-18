import TrackList from '@/components/TrackList';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout, { AppName } from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks, searchTracks } from '@/store/actions-creators/track';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Index = () => {
    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)
    const [query, setQuery] = useState <string>('')
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, setTimer] = useState(null)

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if(timer) {
            clearTimeout(timer)
        }
        setTimer(
            //@ts-ignore
            setTimeout(async () => {
                await dispatch(searchTracks(e.target.value))
            }, 500)
        )
    }

    if(error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }
   return(
       <MainLayout
            title={`${AppName} - Список треков`}
            description={`Загрузи свой трек или бесплатно слушай музыку`}
        >
            <Grid container justifyContent='center' className='grid-center'>
                <Card style={{width: '900px'}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TextField
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                    <TrackList
                    tracks={tracks}
                    />
                </Card>
            </Grid>
       </MainLayout>
   );
};


export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
    store => async () =>
    {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(fetchTracks());

        return { props: {} }
    }
);