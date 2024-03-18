import Navbar from '@/components/MobileNavbar';
import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks } from '@/store/actions-creators/track';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function Home() {
  const {width, height} = useTypedSelector(state => state.size)
  const {error, tracks} = useTypedSelector(state => state.track)
  useEffect(() => {
    console.log(tracks)
  })
  return (
    <>
      <MainLayout>
        <div className='list_header'>
          <h1>Список треков</h1>
          <div className='list_header__seeAll'>
            <h2>Смотреть все</h2>
            <div className="list_header__seeAll__icon"></div>
          </div>
        </div>
        <TrackList
        tracks={tracks}
        />
      </MainLayout>
    </>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(
  store => async () =>
  {
      const dispatch = store.dispatch as NextThunkDispatch;
      await dispatch(fetchTracks());

      return { props: {} }
  }
);